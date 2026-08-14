// Application constants
export const APP_NAME = 'Hemraj Pakhrin';
export const APP_DESCRIPTION = 'Full-stack developer from Nepal';

// API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Navigation
export const SITE_LINKS = {
  home: '#home',
  about: '#about',
  skills: '#skills',
  projects: '#projects',
  contact: '#contact',
};

// Colors
export const COLORS = {
  primary: '#00ff88', // Cyber green
  secondary: '#00d4aa', // Teal
  background: '#020d0a', // Deep dark
  text: '#a0c4b8', // Silver
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/hemrajpakhrin',
  linkedin: 'https://linkedin.com/in/hemrajpakhrin',
  twitter: 'https://twitter.com/hemrajpakhrin',
  email: 'pakhrinhemraj@gmail.com',
};

// Animation durations (in milliseconds)
export const ANIMATION = {
  fast: 300,
  normal: 500,
  slow: 800,
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
