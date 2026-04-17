'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { mockProjects, mockFeedbacks, mockSubmissions } from '@/lib/mock-data';

export default function ProjectWorkspace() {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id);
  const feedback = mockFeedbacks.find(f => {
    const submission = mockSubmissions.find(s => s.id === f.submissionId);
    return submission?.projectId === id;
  }) || mockFeedbacks[0];

  const [submission, setSubmission] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  if (!project) return <div>Project not found</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission and AI feedback trigger
    setTimeout(() => {
      setShowFeedback(true);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-slate-500">Workspace / {project.title}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Instructions and Submission */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4">Instructions</h2>
            <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
              {project.instructions}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4">Your Work</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                className="w-full h-64 p-4 font-mono text-sm border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your code or submission here..."
                value={submission}
                onChange={(e) => setSubmission(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition w-full"
              >
                Submit for AI Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: AI Feedback and Assistant */}
        <div className="space-y-6">
          <div className={`bg-white p-6 rounded-lg shadow-sm border border-slate-200 transition-opacity duration-500 ${showFeedback ? 'opacity-100' : 'opacity-50'}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">AI Evaluator Feedback</h2>
              {showFeedback && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">New Feedback</span>}
            </div>

            {!showFeedback ? (
              <p className="text-slate-400 italic">Submit your work to see AI feedback...</p>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 text-blue-800 rounded border border-blue-100">
                  <p className="text-sm font-medium">{feedback.content}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded">
                    <span className="text-xs text-slate-500 block mb-1 uppercase tracking-wider">Correctness</span>
                    <div className="font-bold text-lg">{feedback.correctness}%</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded">
                    <span className="text-xs text-slate-500 block mb-1 uppercase tracking-wider">Clarity</span>
                    <div className="font-bold text-lg">{feedback.clarity}%</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">Suggestions for Improvement:</h3>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {feedback.suggestions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setShowFeedback(false)}
                  className="w-full py-2 border-2 border-blue-600 text-blue-600 rounded font-bold hover:bg-blue-50 transition"
                >
                  Apply & Revise Work
                </button>
              </div>
            )}
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="mr-2">✨</span> AI Tutor Assistant
            </h2>
            <div className="text-sm text-slate-400 mb-4">
              Ask me anything about {project.title}!
            </div>
            <input
              type="text"
              className="w-full bg-slate-800 border-none rounded p-2 text-sm focus:ring-1 focus:ring-blue-500"
              placeholder="How do I start?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
