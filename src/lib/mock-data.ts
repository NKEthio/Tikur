import { User, Course, Project, Submission, Feedback, Report, Progress } from './types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Alice Student', email: 'alice@example.com', role: 'student' },
  { id: 'u2', name: 'Mr. Smith', email: 'smith@example.com', role: 'teacher' },
  { id: 'u3', name: 'Bob Parent', email: 'bob@example.com', role: 'parent' },
];

export const mockCourses: Course[] = [
  {
    id: 'c1',
    title: 'Introduction to AI',
    description: 'Learn the fundamentals of Artificial Intelligence and Machine Learning.',
    instructorId: 'u2',
  },
  {
    id: 'c2',
    title: 'Modern Web Development',
    description: 'Build responsive and dynamic web applications with Next.js and Tailwind.',
    instructorId: 'u2',
  },
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    moduleId: 'm1',
    title: 'Build your first Chatbot',
    instructions: 'Create a simple rule-based chatbot using Python that can answer basic greeting questions.',
    difficulty: 'beginner',
  },
  {
    id: 'p2',
    moduleId: 'm2',
    title: 'Responsive Portfolio',
    instructions: 'Design and implement a responsive personal portfolio website.',
    difficulty: 'intermediate',
  },
];

export const mockSubmissions: Submission[] = [
  {
    id: 's1',
    projectId: 'p1',
    studentId: 'u1',
    content: 'def chatbot():\n  print("Hello! I am your AI assistant.")\n  ...',
    version: 1,
    submittedAt: '2023-10-20T10:00:00Z',
    status: 'reviewed',
  },
];

export const mockFeedbacks: Feedback[] = [
  {
    id: 'f1',
    submissionId: 's1',
    authorId: 'ai',
    type: 'ai',
    content: 'Your chatbot structure is a good start. However, it only handles one greeting.',
    correctness: 80,
    clarity: 90,
    suggestions: ['Add more greeting patterns', 'Handle unknown inputs gracefully'],
    createdAt: '2023-10-20T10:05:00Z',
  },
];

export const mockProgress: Progress[] = [
  {
    id: 'pr1',
    studentId: 'u1',
    topicId: 'AI Basics',
    skillLevel: 65,
    revisionCount: 2,
    lastActivity: '2023-10-20T10:00:00Z',
  },
];

export const mockReports: Report[] = [
  {
    id: 'r1',
    studentId: 'u1',
    weekStarting: '2023-10-16',
    summary: 'Alice has made significant progress in AI basics this week.',
    strengths: ['Logical thinking', 'Basic Python'],
    improvementAreas: ['Complex pattern matching'],
    activityFrequency: 5,
  },
];
