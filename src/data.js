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
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/abhyanand-jha-9392a0209', icon: Linkedin },
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
    subtitle: 'Full-stack AI assistant',
    description: 'Processes emails and documents, extracts tasks, predicts schedules, and generates daily action plans through an AI-powered productivity workflow.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'TypeScript'],
    icon: BrainCircuit,
    tone: 'cyan',
    githubUrl: 'https://github.com/abhijha910/ai-life-admin',
    demoUrl: 'https://github.com/abhijha910/ai-life-admin',
  },
  {
    title: 'Smart Portfolio Builder',
    subtitle: 'Guided portfolio-generation experience',
    description: 'A guided portfolio-generation experience with polished templates, content prompts, and instant previews.',
    tech: ['React', 'Vite', 'Framer Motion'],
    icon: Rocket,
    tone: 'violet',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
  {
    title: 'Cloud Security Dashboard',
    subtitle: 'Security operations UI',
    description: 'A security operations UI for posture monitoring, incident triage, risk scoring, and compliance snapshots.',
    tech: ['React', 'GCP', 'APIs', 'Charts'],
    icon: ShieldCheck,
    tone: 'blue',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
  {
    title: 'Real-Time Analytics UI',
    subtitle: 'Live KPI intelligence interface',
    description: 'A responsive data product for live KPIs, streaming metrics, anomaly cues, and executive-ready reporting.',
    tech: ['TypeScript', 'WebSockets', 'Data Viz'],
    icon: LineChart,
    tone: 'cyan',
    githubUrl: 'https://github.com/abhijha910',
    demoUrl: 'https://github.com/abhijha910',
  },
  {
    title: 'E-Commerce Frontend',
    subtitle: 'Premium conversion storefront',
    description: 'A premium storefront with product discovery, cart interactions, refined filters, and conversion-focused details.',
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
    company: 'Aindra Systems',
    period: 'Aug 2025 - Present',
    role: 'Software Engineer',
    location: '',
    highlights: [
      'Designed, developed, and maintained scalable software systems using Java, Python, C++, and Linux.',
      'Built responsive web applications using Spring Boot, Flask, HTML, CSS, and JavaScript.',
      'Developed optimized backend and full-stack applications using Spring MVC, Hibernate, Servlets, and MySQL.',
      'Debugged and optimized applications to improve performance, scalability, and quality compliance.',
      'Researched and applied emerging technologies and algorithms to support product innovation.',
    ],
    tech: ['Java', 'Python', 'C++', 'Linux', 'Spring Boot', 'Flask', 'MySQL'],
  },
  {
    company: 'NATS Apprenticeship',
    period: 'Sep 2024 - Aug 2025',
    role: 'Software Development Engineer Trainee',
    location: '',
    highlights: [
      'Worked on real-world software development projects in a professional engineering environment.',
      'Collaborated with cross-functional teams while following Agile methodologies and delivery practices.',
    ],
    tech: ['Software Development', 'Agile', 'Team Collaboration'],
  },
  {
    company: 'GrapplTech',
    period: 'Jul 2024 - Aug 2024',
    role: 'Software Development Engineer Intern',
    location: 'Virtual',
    highlights: [
      'Built a responsive hero section using HTML, CSS, JavaScript, and React.js.',
      'Ensured accessibility, responsive behavior, and modern UI quality across devices.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Accessibility'],
  },
  {
    company: 'Smart Internz',
    period: 'Nov 2023 - Jan 2024',
    role: 'Salesforce Developer Intern',
    location: 'Virtual',
    highlights: [
      'Worked on Salesforce development from fundamentals through Lightning Web Components.',
      'Earned Apex Specialist Super Badge and Process Automation Specialist badges.',
    ],
    tech: ['Salesforce', 'Apex', 'Lightning Web Components', 'Process Automation'],
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
