export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  thumbnail?: string;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  order: number;
}

export interface Project {
  id: string;
  moduleId: string;
  title: string;
  instructions: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Submission {
  id: string;
  projectId: string;
  studentId: string;
  content: string;
  version: number;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'revised';
}

export interface Feedback {
  id: string;
  submissionId: string;
  authorId: string; // AI or Teacher
  type: 'ai' | 'teacher';
  content: string;
  correctness: number; // 0-100
  clarity: number; // 0-100
  suggestions: string[];
  createdAt: string;
}

export interface Progress {
  id: string;
  studentId: string;
  topicId: string;
  skillLevel: number;
  revisionCount: number;
  lastActivity: string;
}

export interface Report {
  id: string;
  studentId: string;
  weekStarting: string;
  summary: string;
  strengths: string[];
  improvementAreas: string[];
  activityFrequency: number;
}
