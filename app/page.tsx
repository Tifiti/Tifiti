export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">My Live Project!</h1>
      <p className="text-xl">Successfully deployed from GitHub to Vercel</p>

      {/* Display environment info */}
      <div className="mt-8 p-4 border rounded bg-gray-50">
        <p>Deployment URL: {process.env.NEXT_PUBLIC_VERCEL_URL || "localhost"}</p>
        <p>Environment: {process.env.NODE_ENV}</p>
      </div>
    </main>
  )
}
