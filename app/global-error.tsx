"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-[70vh] bg-white flex flex-col justify-center items-center p-4">
          <div className="text-center">
            <AlertCircle className="mx-auto h-16 w-16 text-cyan-500" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Something went wrong
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We apologize for the inconvenience. Our team has been notified and
              is working on resolving the issue.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={reset}
                className="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
              >
                Try again
              </button>
              <a
                href="/"
                className="text-sm font-semibold text-cyan-500 hover:text-cyan-600"
              >
                Go back home <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
