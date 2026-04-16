'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Tikur
        </Link>
        <div className="space-x-6">
          <Link
            href="/student"
            className={`hover:text-blue-300 ${pathname.startsWith('/student') ? 'text-blue-400 border-b-2 border-blue-400' : ''}`}
          >
            Student
          </Link>
          <Link
            href="/teacher"
            className={`hover:text-blue-300 ${pathname.startsWith('/teacher') ? 'text-blue-400 border-b-2 border-blue-400' : ''}`}
          >
            Teacher
          </Link>
          <Link
            href="/parent"
            className={`hover:text-blue-300 ${pathname.startsWith('/parent') ? 'text-blue-400 border-b-2 border-blue-400' : ''}`}
          >
            Parent
          </Link>
        </div>
      </div>
    </nav>
  );
}
