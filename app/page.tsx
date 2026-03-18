import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Task Manager</h1>
      <p className="text-gray-600 mb-8">Organize your team workflows with ease</p>
      <div className="flex gap-4">
        <Link href="/boards" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View Boards
        </Link>
        <Link href="/api/auth/signin" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
          Sign In
        </Link>
      </div>
    </main>
  );
}
