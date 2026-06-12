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

export const profile = {
  name: 'Abhyanand Jha',
  email: 'abhayanandjha05@gmail.com',
  title: 'Software Engineer | AI & Full Stack Enthusiast',
  intro:
    'A software engineer building intelligent interfaces, scalable systems, and AI-powered product experiences with cinematic precision.',
  resumeUrl: 'https://drive.google.com/file/d/1XEKZqusIFFELOh077eIkkaO8Z9yzIWoz/view?usp=drivesdk',
  photoUrl: '/assets/profile-photo.png',
};

export const links = [
  { label: 'Arrival', href: '#home' },
  { label: 'Discovery', href: '#about' },
  { label: 'Galaxy', href: '#skills' },
  { label: 'Worlds', href: '#projects' },
  { label: 'Timeline', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/abhijha910', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { label: 'Twitter/X', href: 'https://x.com/yourusername', icon: Twitter },
];

export const bootLines = [
  'Initializing...',
  'Loading Engineer Profile...',
  'Building Neural Interface...',
  'Calibrating Project Worlds...',
  'Welcome',
];

export const systemSignals = [
  { label: 'Interface', value: 'Cinematic' },
  { label: 'Stack', value: 'AI + Full Stack' },
  { label: 'Mode', value: 'Build Systems' },
];

export const strengths = [
  {
    title: 'Clean Code',
    description: 'Readable architecture, clear ownership, and implementation choices built for future velocity.',
    icon: Code2,
  },
  {
    title: 'Scalable Systems',
    description: 'Backends, APIs, and product surfaces designed to stay reliable as complexity grows.',
    icon: Cpu,
  },
  {
    title: 'AI Solutions',
    description: 'Useful AI workflows that transform raw information into decisions, automation, and leverage.',
    icon: BrainCircuit,
  },
  {
    title: 'Modern UI/UX',
    description: 'High-polish interfaces with motion, hierarchy, accessibility, and responsive depth.',
    icon: Wand2,
  },
];

export const skills = [
  {
    category: 'Frontend',
    icon: MonitorSmartphone,
    detail: 'Interface systems, motion, responsive architecture, and user-facing product polish.',
    items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend Knowledge',
    icon: TerminalSquare,
    detail: 'API thinking, service design, integrations, data flow, and product infrastructure.',
    items: ['Node.js', 'Express', 'APIs'],
  },
  {
    category: 'AI/ML',
    icon: BrainCircuit,
    detail: 'Data-driven features, ML fundamentals, intelligent automation, and AI product workflows.',
    items: ['Python', 'Machine Learning', 'Data Science'],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    detail: 'Daily engineering operations across version control, cloud tools, editors, and Linux environments.',
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Firebase', 'GCP'],
  },
];

export const projects = [
  {
    title: 'AI Life Admin',
    subtitle: 'AI-powered personal operations system',
    description: 'A focused admin experience for organizing life, workflows, intelligent actions, and productivity signals in one clean control plane.',
    tech: ['React', 'AI', 'Dashboard', 'Automation'],
    icon: BrainCircuit,
    tone: 'cyan',
    githubUrl: 'https://github.com/abhijha910/ai-life-admin',
    demoUrl: 'https://github.com/abhijha910/ai-life-admin',
  },
  {
    title: 'Smart Portfolio Builder',
    subtitle: 'Automated identity system',
    description: 'A guided portfolio-generation experience with content prompts, polished templates, and instant previews.',
    tech: ['React', 'Vite', 'Framer Motion'],
    icon: Rocket,
    tone: 'violet',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
  {
    title: 'Cloud Security Dashboard',
    subtitle: 'Risk visibility command center',
    description: 'Security operations UI for posture monitoring, incident triage, compliance views, and risk scoring.',
    tech: ['React', 'GCP', 'APIs', 'Charts'],
    icon: ShieldCheck,
    tone: 'blue',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
  {
    title: 'Real-Time Analytics UI',
    subtitle: 'Live decision cockpit',
    description: 'Streaming KPI interface with anomaly cues, executive reporting, and live product intelligence.',
    tech: ['TypeScript', 'WebSockets', 'Data Viz'],
    icon: LineChart,
    tone: 'cyan',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
  {
    title: 'E-Commerce Frontend',
    subtitle: 'Conversion-focused storefront',
    description: 'Premium shopping surface with product discovery, filtering, cart motion, and clean checkout flow.',
    tech: ['React', 'Tailwind', 'UX'],
    icon: Cloud,
    tone: 'violet',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
  {
    title: 'Task Management App',
    subtitle: 'Execution operating layer',
    description: 'Focused productivity workspace for planning, sprint views, task state, and team coordination.',
    tech: ['React', 'Firebase', 'APIs'],
    icon: DatabaseZap,
    tone: 'blue',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
];

export const milestones = [
  {
    stage: 'Arrival',
    title: 'Problem Solver',
    body: 'The foundation: debugging, programming discipline, and learning how to convert ambiguous problems into shippable logic.',
  },
  {
    stage: 'Discovery',
    title: 'Full Stack Builder',
    body: 'Expanding across frontend, APIs, cloud workflows, and product architecture to build complete experiences.',
  },
  {
    stage: 'Exploration',
    title: 'AI Engineer Mindset',
    body: 'Applying AI, machine learning, and data workflows to create systems that understand, assist, and automate.',
  },
  {
    stage: 'Immersion',
    title: 'Product Craft',
    body: 'Polishing interfaces with motion, usability, visual hierarchy, and a cinematic sense of interaction.',
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
