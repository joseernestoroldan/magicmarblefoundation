"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Loader2 } from "lucide-react"

export default function UnderConstruction() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-[100vh - 100px] flex-col items-center justify-center bg-white p-4 mt-16 text-center">
      <div className="max-w-md space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="h-10 w-10 animate-spin text-cyan-500" />
          <h1 className="text-3xl font-bold text-cyan-500">Under Construction</h1>
        </div>

        <p className="text-gray-500">
          We&apos;re working hard to bring you something amazing. Our team is putting the finishing touches on this
          page.
        </p>

        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full bg-cyan-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500">{progress}% completed</p>

        <div className="flex justify-center pt-4">
          <Link
            href="/"
            className="rounded-full bg-cyan-500 px-6 py-2 font-medium text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Return Home
          </Link>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 animate-ping rounded-full bg-cyan-500 opacity-20"></div>
            <div className="absolute inset-2 animate-pulse rounded-full bg-cyan-500 opacity-30"></div>
            <div className="absolute inset-4 animate-spin rounded-full border-4 border-gray-500 border-t-cyan-500"></div>
            <div className="absolute inset-8 rounded-full bg-white"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-500">COMING SOON</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

