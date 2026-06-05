import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  Download,
  ExternalLink,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import MotionCard from './components/MotionCard.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import {
  certifications,
  journey,
  links,
  projects,
  resumeUrl,
  skills,
  socials,
  strengths,
} from './data.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function IconBubble({ icon: Icon }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan shadow-glow">
      <Icon size={22} />
    </div>
  );
}

function ButtonLink({ href, children, variant = 'primary' }) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-center text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan/70 focus:ring-offset-2 focus:ring-offset-ink sm:px-6';
  const styles =
    variant === 'primary'
      ? 'bg-aurora-line text-ink shadow-glow hover:scale-[1.03]'
      : 'border border-white/15 bg-white/[0.08] text-white hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan';

  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

function ProfileVisual() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-[420px] items-center justify-center pb-20 pt-8 sm:max-w-[500px] sm:pb-24 lg:py-0 lg:pb-24"
      initial={{ opacity: 0, scale: 0.92, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-3xl" />
      <div className="glass absolute inset-x-10 top-10 h-64 rotate-[-7deg] rounded-3xl opacity-70 sm:inset-x-12 sm:h-80">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full rounded-3xl object-cover opacity-25 saturate-150"
          src="/assets/hero-ai-core.png"
        />
      </div>

      <motion.div
        className="portrait-orbit absolute inset-3 rounded-full sm:inset-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[310px] sm:max-w-[380px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="rounded-full bg-aurora-line p-[2px] shadow-glow">
          <div className="rounded-full bg-ink p-3 sm:p-4">
            <div className="relative aspect-square overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-slate-950 via-slate-900 to-ink">
              {imageLoaded ? (
                <img
                  alt="Portrait of Abhyanand Jha"
                  className="h-full w-full object-cover object-[50%_18%]"
                  onError={() => setImageLoaded(false)}
                  src="/assets/profile-photo.png"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-aurora-line">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-ink/20 bg-ink/90 font-display text-4xl font-bold text-cyan shadow-glow">
                    AJ
                  </div>
                </div>
              )}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-ink/30 via-transparent to-white/5" />
            </div>
          </div>
        </div>

        <div className="glass relative z-30 mx-auto mt-4 w-[86%] rounded-2xl px-5 py-4 text-center shadow-violet">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Abhyanand Jha</p>
          <p className="mt-1 font-display text-base font-bold text-white sm:text-lg">Software Engineer</p>
        </div>
      </motion.div>

      <motion.div
        className="glass absolute bottom-8 left-2 z-20 rounded-xl px-3 py-2 sm:bottom-10 sm:left-0 sm:px-4 sm:py-3 lg:-left-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Focus</p>
        <p className="mt-1 font-display text-sm font-bold text-white sm:text-lg">AI-ready products</p>
      </motion.div>

      <motion.div
        className="glass absolute right-0 top-8 z-20 rounded-xl px-3 py-2 sm:right-2 sm:top-12 sm:px-4 sm:py-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Stack</p>
        <p className="mt-1 font-display text-sm font-bold text-cyan sm:text-lg">React + AI</p>
      </motion.div>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <nav className="section-shell flex h-16 items-center justify-between sm:h-20">
        <a className="font-display text-lg font-bold text-white sm:text-xl" href="#home" onClick={() => setOpen(false)}>
          Abhyanand <span className="text-cyan">Jha</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              className="text-sm font-semibold text-slate-300 transition hover:text-cyan"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={resumeUrl} variant="secondary">
            Resume
            <Download size={16} />
          </ButtonLink>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="section-shell pb-5 lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
          >
            <div className="glass rounded-xl p-2">
              {links.map((link) => (
                <a
                  className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] hover:text-cyan"
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="section-shell flex min-h-[100svh] items-center pt-20 sm:pt-24" id="home">
      <div className="grid w-full items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.86fr] lg:gap-12 lg:py-20">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-2 text-xs font-semibold text-cyan sm:mb-6 sm:px-4 sm:text-sm"
            variants={fadeUp}
          >
            <Sparkles size={16} />
            Building intelligent, polished digital systems
          </motion.div>
          <motion.h1
            className="text-balance font-display text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
            variants={fadeUp}
          >
            Hi, I'm <span className="gradient-text">Abhyanand Jha</span>
          </motion.h1>
          <motion.div className="mt-5 h-8 overflow-hidden text-lg font-semibold text-cyan sm:h-9 sm:text-2xl" variants={fadeUp}>
            <motion.div
              animate={{ y: ['0%', '-33.333%', '-66.666%', '0%'] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="h-8 sm:h-9">Software Engineer</p>
              <p className="h-8 sm:h-9">AI & Full Stack Enthusiast</p>
              <p className="h-8 sm:h-9">Problem Solver</p>
            </motion.div>
          </motion.div>
          <motion.p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8" variants={fadeUp}>
            I craft fast, modern interfaces and intelligent software experiences with a strong focus on clean
            engineering, practical AI, and details that make products feel exceptional.
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4" variants={fadeUp}>
            <ButtonLink href="#projects">
              View Projects
              <ArrowRight size={18} />
            </ButtonLink>
            <ButtonLink href={resumeUrl} variant="secondary">
              Download Resume
              <Download size={18} />
            </ButtonLink>
          </motion.div>
          <motion.div className="mt-8 flex items-center gap-3" variants={fadeUp}>
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-slate-200 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan hover:shadow-glow"
                href={href}
                key={label}
                rel="noreferrer"
                target="_blank"
              >
                <Icon size={19} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <ProfileVisual />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-pad" id="about">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Engineering with taste, clarity, and momentum"
          description="I am a software engineer focused on building sleek web experiences, practical AI-powered tools, and systems that feel simple on the surface because the engineering underneath is thoughtful."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <MotionCard delay={index * 0.08} key={item.title}>
              <IconBubble icon={item.icon} />
              <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-pad" id="skills">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A modern stack for intelligent products"
          description="Balanced across polished frontends, API thinking, AI/ML foundations, and the day-to-day tools that keep delivery sharp."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill, index) => (
            <MotionCard delay={index * 0.08} key={skill.category}>
              <div className="flex items-center gap-4">
                <IconBubble icon={skill.icon} />
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{skill.category}</h3>
                  <p className="mt-1 text-sm text-slate-400">Practical proficiency</p>
                </div>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-aurora-line"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-sm font-semibold text-slate-200"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Premium product ideas with engineering depth"
          description="Placeholder projects shaped as portfolio-ready case studies, each with a clear product angle and modern implementation stack."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <MotionCard className="flex min-h-[300px] flex-col sm:min-h-[320px]" delay={index * 0.06} key={project.title}>
              <div className="flex items-start justify-between gap-4">
                <IconBubble icon={project.icon} />
                <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
                  Featured
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold text-slate-300" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
                <a
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.08] text-sm font-bold text-white transition hover:border-cyan/40 hover:text-cyan"
                  href={project.githubUrl || 'https://github.com/abhijha910'}
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                  <ExternalLink size={15} />
                </a>
                <a
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-bold text-ink transition hover:bg-cyan"
                  href={project.liveUrl || '#home'}
                >
                  Demo
                  <ArrowRight size={15} />
                </a>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Journey"
          title="A focused path through software, AI, and product craft"
          description="A clean placeholder timeline that can be swapped with internships, roles, education, or milestones as the portfolio grows."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan via-violet to-transparent sm:left-1/2" />
          {journey.map((item, index) => (
            <motion.div
              className={`relative mb-8 flex sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}
              initial={{ opacity: 0, y: 30 }}
              key={item.period}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span
                className={`absolute left-2 top-7 h-4 w-4 rounded-full border-2 border-cyan bg-ink shadow-glow ${
                  index % 2 === 0 ? 'sm:left-auto sm:right-[-8px]' : 'sm:left-[-8px]'
                }`}
              />
              <div className="glass ml-10 w-full rounded-xl p-5 sm:ml-0 sm:p-6">
                <p className="font-display text-xl font-bold text-cyan sm:text-2xl">{item.period}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-white sm:text-xl">{item.role}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section-pad" id="certifications">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Signals of continuous learning"
          description="Placeholder certification cards for AI, machine learning, cloud, and web development credentials."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <MotionCard delay={index * 0.08} key={cert.title}>
              <IconBubble icon={cert.icon} />
              <h3 className="mt-6 font-display text-xl font-bold text-white">{cert.title}</h3>
              <p className="mt-3 text-slate-400">{cert.issuer}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSent(false), 3200);
  };

  return (
    <section className="section-pad" id="contact">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something sharp"
          description="Reach out for software engineering opportunities, AI-focused projects, frontend work, or collaborations."
        />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionCard>
            <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-center">
              <IconBubble icon={Mail} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Email</p>
                <a className="mt-1 block break-all font-display text-lg font-bold text-white sm:text-xl" href="mailto:abhayanandjha05@gmail.com">
                  abhayanandjha05@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-slate-200 transition hover:-translate-y-1 hover:border-cyan/40 hover:text-cyan"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </MotionCard>

          <MotionCard>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="min-h-12 rounded-xl border border-white/10 bg-white/[0.08] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                  placeholder="Your name"
                  required
                  type="text"
                />
                <input
                  className="min-h-12 rounded-xl border border-white/10 bg-white/[0.08] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                  placeholder="Your email"
                  required
                  type="email"
                />
              </div>
              <input
                className="min-h-12 rounded-xl border border-white/10 bg-white/[0.08] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                placeholder="Subject"
                required
                type="text"
              />
              <textarea
                className="min-h-36 resize-none rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                placeholder="Message"
                required
              />
              <button
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-aurora-line px-5 text-center text-sm font-bold text-ink shadow-glow transition hover:scale-[1.02] sm:px-6"
                type="submit"
              >
                Send Message
                <Send size={17} />
              </button>
            </form>
          </MotionCard>
        </div>
      </div>

      <AnimatePresence>
        {sent ? (
          <motion.div
            className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-28px)] max-w-md -translate-x-1/2 rounded-xl border border-cyan/25 bg-ink/90 px-4 py-4 text-center text-sm font-semibold text-cyan shadow-glow backdrop-blur-xl sm:bottom-6 sm:px-5 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Message received in the frontend preview.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">Copyright 2026 Abhyanand Jha. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-slate-300 transition hover:border-cyan/40 hover:text-cyan"
              href={href}
              key={label}
              rel="noreferrer"
              target="_blank"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-ink transition hover:bg-cyan"
            href="#home"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
