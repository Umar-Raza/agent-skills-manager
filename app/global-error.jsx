'use client' // Error boundaries must be Client Components

export default function GlobalError({ error, unstable_retry }) {
    return (
        // global-error must include html and body tags
        <html>
            <body className="flex flex-col items-center justify-center h-screen gap-4 bg-neutral text-neutral-content">
                <h2>Something went wrong!</h2>
                <button className="btn btn-primary" onClick={() => unstable_retry()}>Try again</button>
            </body>
        </html>
    )
}