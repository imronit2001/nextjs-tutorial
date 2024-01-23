"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const LearnUseRouter = () => {
    const router = useRouter()
    // console.log("Router : ", router)
    return (
        <>
            <h1>LearnUseRouter</h1>
            <button onClick={() => router.push("/admin/dashboard")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go to Admin Dashboard</button>
        </>
    )
}

export default LearnUseRouter