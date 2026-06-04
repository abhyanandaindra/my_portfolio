import {
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Cpu,
  DatabaseZap,
  Figma,
  GitBranch,
  Github,
  Linkedin,
  LineChart,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  TerminalSquare,
  Twitter,
  Wand2,
} from 'lucide-react';

export const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/abhijha910', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { label: 'Twitter/X', href: 'https://x.com/yourusername', icon: Twitter },
];

export const strengths = [
  {
    title: 'Clean Code',
    description: 'Readable, maintainable implementations with a bias for clarity and long-term ownership.',
    icon: Code2,
  },
  {
    title: 'Scalable Systems',
    description: 'Thoughtful architecture, reusable interfaces, and performance-aware engineering choices.',
    icon: Cpu,
  },
  {
    title: 'AI Solutions',
    description: 'Practical ML and AI workflows that turn raw data into useful, human-centered products.',
    icon: BrainCircuit,
  },
  {
    title: 'Modern UI/UX',
    description: 'Responsive interfaces with strong visual hierarchy, smooth motion, and refined details.',
    icon: Wand2,
  },
];

export const skills = [
  {
    category: 'Frontend',
    icon: MonitorSmartphone,
    level: 92,
    items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend Knowledge',
    icon: TerminalSquare,
    level: 78,
    items: ['Node.js', 'Express', 'APIs', 'REST', 'Auth Flows', 'Integrations'],
  },
  {
    category: 'AI/ML',
    icon: BrainCircuit,
    level: 84,
    items: ['Python', 'Machine Learning', 'Data Science', 'Model Workflows', 'Automation'],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    level: 88,
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Firebase', 'GCP'],
  },
];

export const projects = [
  {
    title: 'AI Resume Analyzer',
    description: 'An intelligent resume review interface with scoring flows, role matching, and actionable optimization insights.',
    tech: ['React', 'Python', 'AI', 'Tailwind'],
    icon: BrainCircuit,
  },
  {
    title: 'Smart Portfolio Builder',
    description: 'A guided portfolio-generation experience with polished templates, content prompts, and instant previews.',
    tech: ['React', 'Vite', 'Framer Motion'],
    icon: Rocket,
  },
  {
    title: 'Cloud Security Dashboard',
    description: 'A security operations UI for posture monitoring, incident triage, risk scoring, and compliance snapshots.',
    tech: ['React', 'GCP', 'APIs', 'Charts'],
    icon: ShieldCheck,
  },
  {
    title: 'Real-Time Analytics UI',
    description: 'A responsive data product for live KPIs, streaming metrics, anomaly cues, and executive-ready reporting.',
    tech: ['TypeScript', 'WebSockets', 'Data Viz'],
    icon: LineChart,
  },
  {
    title: 'E-Commerce Frontend',
    description: 'A premium storefront with product discovery, cart interactions, refined filters, and conversion-focused details.',
    tech: ['React', 'Tailwind', 'UX'],
    icon: Cloud,
  },
  {
    title: 'Task Management App',
    description: 'A focused productivity dashboard for task planning, sprint views, status tracking, and team coordination.',
    tech: ['React', 'Firebase', 'APIs'],
    icon: DatabaseZap,
  },
];

export const journey = [
  {
    period: '2026',
    role: 'AI & Full Stack Focus',
    description: 'Building polished web experiences while deepening practical AI, automation, and cloud deployment skills.',
  },
  {
    period: '2025',
    role: 'Software Engineering Projects',
    description: 'Delivered frontend-heavy applications with clean architecture, reusable components, and responsive interfaces.',
  },
  {
    period: '2024',
    role: 'Problem Solving Foundation',
    description: 'Strengthened programming fundamentals, data structures, debugging habits, and disciplined engineering workflows.',
  },
];

export const certifications = [
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'Professional Learning Track',
    icon: Braces,
  },
  {
    title: 'Fundamentals of Machine Learning',
    issuer: 'AI / ML Certification',
    icon: BrainCircuit,
  },
  {
    title: 'Cloud / Web Development Certification',
    issuer: 'Cloud Engineering Program',
    icon: Figma,
  },
];
