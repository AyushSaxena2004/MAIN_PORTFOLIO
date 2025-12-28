export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  features: string[];
  techStack: string[];
  architecture?: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  isFeatured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
  tools: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
