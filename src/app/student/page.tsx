import Link from 'next/link';
import { mockCourses, mockProgress, mockProjects } from '@/lib/mock-data';

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Student Dashboard</h1>
          <p className="text-slate-500">Welcome back, Alice! Continue your learning journey.</p>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCourses.map(course => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold mb-2">{course.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{course.description}</p>
              <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
                <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
              </div>
              <Link
                href={`/student/courses/${course.id}`}
                className="text-blue-600 font-medium hover:underline text-sm"
              >
                Continue Learning →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 divide-y">
            {mockProjects.map(project => (
              <div key={project.id} className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                    project.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <Link
                  href={`/student/projects/${project.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
                >
                  Work on Project
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            {mockProgress.map(prog => (
              <div key={prog.id} className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{prog.topicId}</span>
                    <span className="font-bold">{prog.skillLevel}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${prog.skillLevel}%` }}
                    ></div>
                  </div>
                </div>
                <div className="pt-4 border-t flex justify-between text-sm">
                  <span className="text-slate-500">Revisions:</span>
                  <span className="font-medium">{prog.revisionCount}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
