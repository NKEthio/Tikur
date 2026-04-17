'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { mockCourses } from '@/lib/mock-data';

export default function CourseOverview() {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id);

  if (!course) return <div className="p-8 text-center">Course not found</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <Link href="/student" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">{course.title}</h1>
        <p className="text-slate-500">{course.description}</p>
      </header>

      <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold mb-6 text-slate-800 border-b pb-4">Course Curriculum</h2>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded border border-slate-200 flex justify-between items-center">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Module 1</span>
              <h3 className="font-bold text-slate-900">Introduction and Basics</h3>
            </div>
            <span className="text-green-600 font-bold text-sm">Completed ✓</span>
          </div>

          <div className="p-4 bg-white rounded border border-slate-200 flex justify-between items-center">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Module 2</span>
              <h3 className="font-bold text-slate-900">Deep Dive into Projects</h3>
            </div>
            <span className="text-blue-600 font-bold text-sm">In Progress</span>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200 opacity-60">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Module 3</span>
              <h3 className="font-bold text-slate-900">Advanced Techniques</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
          Continue to Next Lesson
        </button>
      </div>
    </div>
  );
}
