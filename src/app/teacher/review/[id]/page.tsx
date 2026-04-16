'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockSubmissions, mockUsers, mockProjects, mockFeedbacks } from '@/lib/mock-data';

export default function TeacherReview() {
  const { id } = useParams();
  const router = useRouter();
  const submission = mockSubmissions.find(s => s.id === id);
  const student = mockUsers.find(u => u.id === submission?.studentId);
  const project = mockProjects.find(p => p.id === submission?.projectId);
  const aiFeedback = mockFeedbacks.find(f => f.submissionId === id && f.type === 'ai');

  const [teacherComment, setTeacherComment] = useState('');

  if (!submission) return <div>Submission not found</div>;

  const handleApprove = () => {
    alert('Submission Approved!');
    router.push('/teacher');
  };

  const handleRequestRevision = () => {
    alert('Revision Requested');
    router.push('/teacher');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Review Submission</h1>
          <p className="text-slate-500">{student?.name} &gt; {project?.title}</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleRequestRevision}
            className="px-6 py-2 border-2 border-orange-500 text-orange-600 rounded font-bold hover:bg-orange-50 transition"
          >
            Request Revision
          </button>
          <button
            onClick={handleApprove}
            className="px-6 py-2 bg-green-600 text-white rounded font-bold hover:bg-green-700 transition"
          >
            Approve Work
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4">Student Submission</h2>
            <pre className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 overflow-x-auto">
              {submission.content}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4">Teacher Feedback</h2>
            <textarea
              className="w-full h-32 p-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Add your comments here..."
              value={teacherComment}
              onChange={(e) => setTeacherComment(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
            <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">🤖</span> AI Feedback Analysis
            </h2>
            {aiFeedback ? (
              <div className="space-y-4 text-sm text-blue-800">
                <p>{aiFeedback.content}</p>
                <div className="grid grid-cols-2 gap-4 border-t border-blue-100 pt-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-blue-500">Correctness</span>
                    <div className="text-lg font-bold">{aiFeedback.correctness}%</div>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-blue-500">Clarity</span>
                    <div className="text-lg font-bold">{aiFeedback.clarity}%</div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-blue-600 italic">No AI feedback available for this submission.</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-lg font-bold mb-4">Submission Stats</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Version:</span>
                <span className="font-medium">{submission.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Submitted:</span>
                <span className="font-medium">{new Date(submission.submittedAt).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
