import Link from 'next/link';
import { mockSubmissions, mockUsers, mockProjects } from '@/lib/mock-data';

export default function TeacherDashboard() {
  const pendingReviews = mockSubmissions.filter(s => s.status === 'reviewed' || s.status === 'pending');

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Teacher Dashboard</h1>
        <p className="text-slate-500">Welcome, Mr. Smith. Track student performance and review work.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-slate-500 text-sm font-medium mb-1">Total Students</h3>
          <div className="text-3xl font-bold">24</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-slate-500 text-sm font-medium mb-1">Submissions to Review</h3>
          <div className="text-3xl font-bold text-orange-600">{pendingReviews.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-slate-500 text-sm font-medium mb-1">Avg. Class Progress</h3>
          <div className="text-3xl font-bold text-green-600">72%</div>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Flagged Submissions & Reviews</h2>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
              <tr>
                <th className="px-6 py-3 font-semibold">Student</th>
                <th className="px-6 py-3 font-semibold">Project</th>
                <th className="px-6 py-3 font-semibold">Submitted At</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {pendingReviews.map(submission => {
                const student = mockUsers.find(u => u.id === submission.studentId);
                const project = mockProjects.find(p => p.id === submission.projectId);
                return (
                  <tr key={submission.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{student?.name}</div>
                      <div className="text-xs text-slate-500">{student?.email}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{project?.title}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm">
                      {new Date(submission.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">
                        Needs Review
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/teacher/review/${submission.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Inspect Work
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Student Progress Trends</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 h-64 flex items-center justify-center text-slate-400 italic">
          [Interactive Progress Chart Placeholder]
        </div>
      </section>
    </div>
  );
}
