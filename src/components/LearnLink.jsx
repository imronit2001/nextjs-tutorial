import Link from 'next/link'
import React from 'react'

const LearnLink = () => {
    const id = 2;
    return (
        <>
            <nav className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/admin/dashboard">Admin Dashboard</Link>
                <Link href="/admin/profile">Admin Profile</Link>
                <Link href={`/user/profile/${id}`}>User Profile</Link>
                <Link href="/user/settings">User Settings</Link>
                <Link href="/user">User Page</Link>
            </nav>
        </>
    )
}

export default LearnLink