import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <Link href='/' className="btn btn-ghost text-xl">Agent Skills Manager</Link>
            <div className='flex-1'></div>
            <ul className='menu menu-horizontal p-0'>
                <li>
                    <Link href="/skills">Skills</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/login">login</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </ul>
        </div>)
}
