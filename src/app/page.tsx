import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
        Welcome to <span className="text-blue-600">Tikur</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mb-12">
        The adaptive AI learning platform where students learn by building,
        receive real-time feedback, and track true growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <Link
          href="/student"
          className="p-8 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-blue-500 transition-all group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
          <h2 className="text-2xl font-bold mb-2">Student</h2>
          <p className="text-slate-500">Access courses, build projects, and get AI feedback.</p>
        </Link>

        <Link
          href="/teacher"
          className="p-8 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-green-500 transition-all group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👨‍🏫</div>
          <h2 className="text-2xl font-bold mb-2">Teacher</h2>
          <p className="text-slate-500">Manage students, review work, and guide learning.</p>
        </Link>

        <Link
          href="/parent"
          className="p-8 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-purple-500 transition-all group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👪</div>
          <h2 className="text-2xl font-bold mb-2">Parent</h2>
          <p className="text-slate-500">View weekly reports and track your child&apos;s progress.</p>
        </Link>
      </div>
    </div>
  );
}
