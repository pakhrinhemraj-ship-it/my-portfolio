export interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'other';
  image?: { url: string; publicId: string };
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  githubUrl?: string;
  liveUrl?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration?: string;
  responsibilities: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
