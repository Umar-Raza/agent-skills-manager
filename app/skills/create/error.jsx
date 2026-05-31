'use client'


export default function Error({ error, reset }) {
    return (
        <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Somthing went wrong!</h2>
            <p className="mb-4">{error.message}</p>
            <button onClick={reset} className="btn btn-primary">Try Again</button>
        </div>
    )
}