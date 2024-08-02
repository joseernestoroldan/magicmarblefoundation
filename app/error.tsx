"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="relative h-60 w-60"><Image className=" object-contain" src={"dogtransparent.png"} alt="" fill/></div>
      <h2 className="text-center text-xl font-bold text-red-500">
        Something went wrong!
      </h2>
      <button
        className="mt-4 rounded-md bg-cyan-500 px-4 py-2 text-sm text-white transition-colors hover:bg-cyan-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>

      <Link className="text-cyan-500 text-lg font-bold underline" href={"/"}>
        Go Home
      </Link>
    </main>
  );
}
