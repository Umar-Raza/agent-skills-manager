import Link from "next/link";

export default function NotFound() {
    return (
        <article className="flex flex-col max-w-md mx-auto p-4 ">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <Link href="/" className="btn btn-link btn-lg">Back to home</Link>
        </article>
    )
}