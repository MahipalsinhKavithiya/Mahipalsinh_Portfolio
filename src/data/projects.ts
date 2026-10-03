export type ProjectStatus = 'completed' | 'in_progress' | 'planned';

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'student-record-management',
    name: 'Student Record Management System',
    shortDescription:
      'A backend-oriented student record management system built with Python and PostgreSQL.',
    detailedDescription:
      'A backend-focused student record management system built with Python and PostgreSQL. The system handles student management, course management, and course enrollment with full database-driven operations. The project follows a structured architecture with clear separation of concerns, input validation, and relational database design.',
    technologies: ['Python', 'PostgreSQL'],
    status: 'completed',
    githubUrl: 'https://github.com/MahipalsinhKavithiya/student-record-management-system',
    liveUrl: null,
    featured: true,
  },
  {
    id: 'ai-attendance-system',
    name: 'AI-Based Attendance System',
    shortDescription:
      'An AI-based attendance system that automates attendance recording using computer vision techniques.',
    detailedDescription:
      'An AI-based attendance system designed to automate attendance recording using computer vision and AI techniques. The system identifies individuals and logs attendance automatically, reducing manual effort and improving accuracy.',
    technologies: ['Python', 'OpenCV', 'AI/Computer Vision'],
    status: 'completed',
    githubUrl: 'https://github.com/MahipalsinhKavithiya/ai-attendance-system',
    liveUrl: null,
    featured: true,
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    shortDescription:
      'A backend-focused URL shortening service currently under development with FastAPI and PostgreSQL.',
    detailedDescription:
      'A backend-focused URL shortening service currently being developed with emphasis on API design, URL validation, database interaction, and scalable backend architecture. The project uses FastAPI for the REST API layer and PostgreSQL for data persistence. This project is actively under development and not yet complete.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'RESTful API'],
    status: 'in_progress',
    githubUrl: 'https://github.com/MahipalsinhKavithiya/url-shortener',
    liveUrl: null,
    featured: false,
  },
];
