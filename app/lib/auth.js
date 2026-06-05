import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const SALT_ROUNDS = 10;
const TOKEN_EXPIRY_HOURS = parseInt(process.env.AUTH_TOKEN_EXPIRY_HOURS || "24");
const AUTH_COOKIE_NAME = "auth_token";

/**
 * Hash a password using bcrypt
 */
export async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verify a password against a hash
 */
export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

/**
 * Generate a simple base64 encoded token with expiration
 * In production, use a proper JWT library
 */
export function generateToken(user) {
  const payload = {
    userId: user.id,
    email: user.email,
    name: user.name,
    exp: Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000,
  };

  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

/**
 * Verify and decode a token
 */
export function verifyToken(token) {
  try {
    const payload = JSON.parse(
      Buffer.from(token, "base64").toString("utf-8")
    );

    // Check expiration
    if (payload.exp < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Set auth cookie (httpOnly, secure in production)
 */
export function setAuthCookie(response, token) {
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TOKEN_EXPIRY_HOURS * 60 * 60, // in seconds
    path: "/",
  });
}

/**
 * Clear auth cookie
 */
export function clearAuthCookie(response) {
  response.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
}

/**
 * Get auth token from cookies (for server components/actions)
 */
export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value ?? null;
}

/**
 * Get current user from cookie (for server components/actions)
 */
export async function getCurrentUser() {
  const token = await getAuthToken();
  if (!token) return null;
  return verifyToken(token);
}

/**
 * Extract token from cookie in request
 */
export function extractTokenFromRequest(request) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const cookiesMap = cookieHeader.split(";").reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split("=");
    acc[key] = value;
    return acc;
  }, {});

  return cookiesMap[AUTH_COOKIE_NAME] ?? null;
}
