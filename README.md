# Tikur – Adaptive AI Learning Platform

## 1. Problem Definition

Most learning systems optimize for scores, not growth. Tikur addresses this by building a continuous loop where students do real work, receive feedback, improve, and track progress over time.

### Key gaps we solve
- Students memorize instead of building.
- Feedback is delayed or unclear.
- Parents see grades but not true progress.
- Teachers cannot scale personalized feedback.

## 2. Product Vision

Create a platform where:
- students learn by building real projects,
- AI + teachers provide continuous feedback,
- progress is measured by improvement over time,
- parents receive clear weekly insights.

## 3. Target Users

### Primary users
- Students (high school / early university), especially in coding, AI, and emerging tech.

### Secondary users
- Teachers / mentors
- Parents

## 4. Product Principles

1. **Learning = Doing**  
   Every concept leads to project-based work.
2. **Feedback > Grades**  
   Static score-only evaluation is not enough.
3. **Progress Over Time**  
   Improvement is the primary success signal.
4. **AI Assists, Humans Guide**  
   AI amplifies teachers; it does not replace them.

## 5. Core Features

### 5.1 Authentication & roles
- Student
- Teacher
- Parent
- Admin

### 5.2 Student experience
- Dashboard with current courses, active projects, and progress.
- Learning flow: concept → mini-task → project.
- Project workspace with instructions, submission area, and AI assistant.
- Feedback system with AI feedback, teacher comments, and revision history.

### 5.3 Teacher experience
- Dashboard with student lists, flagged submissions, and progress trends.
- Review workflow to inspect work, add feedback, and approve or request revision.

### 5.4 Parent experience
- Weekly reports summarizing progress, strengths, improvement areas, and activity.

### 5.5 AI capabilities
- **AI Tutor:** explains concepts and answers questions.
- **AI Evaluator:** reviews submissions and returns structured feedback (correctness, clarity, suggestions).
- **AI Progress Analyzer:** compares current vs past work and detects trends.
- **AI Report Generator:** creates weekly parent summaries.

## 6. Functional Requirements

### 6.1 Course system
- Teachers/admin can create courses.
- Courses contain modules, lessons, and projects.

### 6.2 Project submission
- Students can submit code, files, or text.
- Submission versions are stored.
- AI feedback is automatically triggered.

### 6.3 Feedback loop
1. Student submits work.
2. AI generates feedback.
3. Student revises.
4. Teacher optionally reviews.
5. Progress is updated.

### 6.4 Progress tracking
Track:
- skill level per topic,
- revision count,
- project complexity,
- consistency (activity frequency).

### 6.5 Weekly reports
Every 7 days:
- aggregate activity,
- analyze improvement,
- generate report,
- deliver to parent.

## 7. Non-Functional Requirements

### Performance
- AI feedback response target: **< 5 seconds**
- Page load target: **< 2 seconds**

### Scalability
- Support **10K+ concurrent users**
- Use modular services

### Security
- Role-based access control
- Encrypted user data

### Reliability
- No data loss on submissions
- Maintain version history

## 8. High-Level Data Model

Core entities:
- User
- Course
- Module
- Project
- Submission
- Feedback
- Progress
- Report

Key relationships:
- user enrolls in courses,
- course contains modules and projects,
- project has submissions,
- submission has feedback,
- progress links to each student over time.

## 9. End-to-End User Flow

1. Student signs up.
2. Student enrolls in a course.
3. Student learns a concept.
4. Student builds a project.
5. Student submits work.
6. Student receives AI feedback.
7. Student improves and resubmits.
8. System updates progress.
9. Parent receives weekly report.

## 10. Success Metrics

### Learning metrics
- Improvement rate over time
- Number of revisions per project
- Completion rate

### Engagement metrics
- Daily active users
- Session time

### Quality metrics
- Feedback usefulness rating
- Parent satisfaction

## 11. MVP Scope

### Include in MVP
- Student + teacher roles
- Course + project system
- Submission + AI feedback
- Basic progress tracking
- Simple weekly report

### Defer for later
- Advanced analytics
- Gamification
- Multi-language support

## 12. Risks & Challenges

- AI feedback quality may vary.
- Measuring progress accurately is complex.
- Too much early complexity can slow delivery.
- Teacher adoption may require change management.

## Product North Star

The platform is centered on a single loop:

**learn → build → feedback → improve → track**
