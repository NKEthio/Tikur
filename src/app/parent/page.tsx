import { mockReports, mockUsers, mockProgress } from '@/lib/mock-data';

export default function ParentDashboard() {
  const student = mockUsers.find(u => u.role === 'student');
  const report = mockReports[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Parent Dashboard</h1>
        <p className="text-slate-500">Tracking progress for {student?.name}</p>
      </header>

      <section className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Weekly Progress Report</h2>
            <span className="bg-blue-500 px-3 py-1 rounded text-sm">
              Week of {new Date(report.weekStarting).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 italic">“AI Insight Summary”</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              {report.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="text-green-800 font-bold mb-3 flex items-center">
                <span className="mr-2">🌟</span> Key Strengths
              </h4>
              <ul className="space-y-2">
                {report.strengths.map((s, i) => (
                  <li key={i} className="text-green-700 flex items-center">
                    <span className="mr-2 text-green-400">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <h4 className="text-orange-800 font-bold mb-3 flex items-center">
                <span className="mr-2">📈</span> Focus Areas
              </h4>
              <ul className="space-y-2">
                {report.improvementAreas.map((s, i) => (
                  <li key={i} className="text-orange-700 flex items-center">
                    <span className="mr-2 text-orange-400">→</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Subject Mastery</h3>
            <div className="space-y-4">
              {mockProgress.map(prog => (
                <div key={prog.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{prog.topicId}</span>
                    <span className="font-bold text-blue-600">{prog.skillLevel}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${prog.skillLevel}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
            <div>Activity Frequency: <span className="font-bold text-slate-900">{report.activityFrequency} days this week</span></div>
            <button className="text-blue-600 font-bold hover:underline">
              Download PDF Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
