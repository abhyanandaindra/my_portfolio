import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUp,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Download,
  ExternalLink,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import {
  bootLines,
  certifications,
  links,
  milestones,
  profile,
  projects,
  skills,
  socials,
  strengths,
  systemSignals,
} from './data.js';

const reveal = {
  hidden: { opacity: 0, y: 50, filter: 'blur(18px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const revealTransition = { duration: 0.85, ease: [0.16, 1, 0.3, 1] };

function usePointerDepth() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 90, damping: 18 });
  const springY = useSpring(y, { stiffness: 90, damping: 18 });

  const onPointerMove = (event) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((event.clientX - bounds.left) / bounds.width - 0.5);
    y.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onPointerMove, onPointerLeave };
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { stiffness: 450, damping: 38 });
  const y = useSpring(cursorY, { stiffness: 450, damping: 38 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
    };
    const over = (event) => {
      const target = event.target;
      setActive(Boolean(target instanceof Element && target.closest('a, button, input, textarea, .cursor-reactive')));
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor ${active ? 'cursor-active' : ''}`}
      style={{ x, y }}
    />
  );
}

function BootSequence() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-black"
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(16px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="boot-grid absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,241,255,.16),transparent_32%)]" />
          <motion.div
            className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/25"
            animate={{ rotate: 360, scale: [1, 1.12, 1] }}
            transition={{ rotate: { duration: 5, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.8, repeat: Infinity } }}
          />
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="w-full max-w-2xl">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-display text-sm font-bold uppercase tracking-[0.34em] text-cyan">Abhyanand Jha</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Secure boot</p>
              </div>
              <div className="space-y-4 font-mono text-sm text-slate-300 sm:text-base">
                {bootLines.map((line, index) => (
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.55, duration: 0.45 }}
                    key={line}
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan shadow-glow" />
                    <span>{line}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-10 h-1 overflow-hidden rounded-full bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="h-full rounded-full bg-aurora-line"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3.6, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MagneticButton({ href, children, variant = 'primary', className = '', target }) {
  const external = target === '_blank';

  return (
    <motion.a
      className={`magnetic-button ${variant === 'primary' ? 'button-primary' : 'button-secondary'} ${className}`}
      href={href}
      rel={external ? 'noreferrer' : undefined}
      target={target}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.97 }}
    >
      <span>{children}</span>
    </motion.a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-[min(1180px,calc(100%-32px))] items-center justify-between sm:h-20">
        <a className="font-display text-lg font-bold text-white" href="#home" onClick={() => setOpen(false)}>
          Abhyanand <span className="text-cyan">Jha</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a className="nav-link text-sm font-semibold text-slate-300" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <MagneticButton href={profile.resumeUrl} target="_blank" variant="secondary">
            Resume <Download size={16} />
          </MagneticButton>
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
            className="mx-auto w-[min(1180px,calc(100%-32px))] pb-5 lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            <div className="os-panel rounded-2xl p-2">
              {links.map((link) => (
                <a
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-cyan"
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

function CommandCenter() {
  const depth = usePointerDepth();
  const rotateX = useTransform(depth.y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(depth.x, [-0.5, 0.5], [-12, 12]);
  const panelX = useTransform(depth.x, [-0.5, 0.5], [-24, 24]);
  const panelY = useTransform(depth.y, [-0.5, 0.5], [-18, 18]);
  const terminalX = useTransform(depth.x, [-0.5, 0.5], [-34, 34]);

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden px-4 pt-24"
      id="home"
      ref={depth.ref}
      onPointerLeave={depth.onPointerLeave}
      onPointerMove={depth.onPointerMove}
    >
      <div className="mx-auto grid min-h-[calc(100svh-6rem)] w-[min(1180px,100%)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          variants={{ hidden: {}, show: {} }}
        >
          <motion.div className="system-pill" variants={reveal} transition={revealTransition}>
            <Sparkles size={16} />
            Enter Abhyanand Jha's portfolio
          </motion.div>
          <motion.h1
            className="mt-8 max-w-4xl font-display text-6xl font-bold leading-[0.86] text-white sm:text-7xl lg:text-8xl xl:text-9xl"
            variants={reveal}
            transition={revealTransition}
          >
            <span className="block">Abhyanand</span>
            <span className="animated-gradient gradient-text block">Jha</span>
          </motion.h1>
          <motion.p className="mt-7 text-xl font-semibold text-cyan sm:text-2xl" variants={reveal} transition={revealTransition}>
            {profile.title}
          </motion.p>
          <motion.p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg" variants={reveal} transition={revealTransition}>
            {profile.intro}
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" variants={reveal} transition={revealTransition}>
            <MagneticButton href="#projects">
              View Project Worlds <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href={profile.resumeUrl} target="_blank" variant="secondary">
              Download Resume <Download size={18} />
            </MagneticButton>
          </motion.div>
          <motion.div className="mt-8 flex gap-3" variants={reveal} transition={revealTransition}>
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                aria-label={label}
                className="social-node"
                href={href}
                key={label}
                rel="noreferrer"
                target="_blank"
                whileHover={{ y: -5, rotate: -5 }}
              >
                <Icon size={19} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="relative mx-auto h-[560px] w-full max-w-[620px] perspective-hero" style={{ rotateX, rotateY }}>
          <motion.div className="command-halo" style={{ x: panelX, y: panelY }} />
          <motion.div className="jarvis-ring ring-one" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="jarvis-ring ring-two" animate={{ rotate: -360 }} transition={{ duration: 38, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="jarvis-ring ring-three" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} />

          <motion.div
            className="hero-identity-shell"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero-identity-aura" />
            <div className="hero-photo-frame">
              <img alt="Abhyanand Jha" className="hero-photo" src={profile.photoUrl} />
            </div>
          </motion.div>

          <motion.div className="core-terminal os-panel" style={{ x: terminalX }}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">Engineer Core</p>
              <span className="h-2 w-2 rounded-full bg-cyan shadow-glow" />
            </div>
            <div className="mt-6 space-y-3 font-mono text-sm text-slate-300">
              <p>&gt; profile.name = “Abhyanand Jha”</p>
              <p>&gt; role = “Software Engineer”</p>
              <p>&gt; mode = “AI + Full Stack”</p>
              <p className="text-cyan">&gt; status = ready_to_build()</p>
            </div>
          </motion.div>

          {systemSignals.map((signal, index) => (
            <motion.div
              className={`signal-chip chip-${index + 1}`}
              animate={{ y: [0, index % 2 === 0 ? -14 : 14, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
              key={signal.label}
            >
              <p>{signal.label}</p>
              <strong>{signal.value}</strong>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-3xl text-center"
      initial={{ opacity: 0, y: 36, filter: 'blur(14px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-120px' }}
      transition={revealTransition}
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}

function Discovery() {
  return (
    <section className="universe-section" id="about">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Discovery"
          title="Not a resume. A system for building."
          description="A look inside the operating principles behind the work: clarity, scalability, intelligence, and interface craft."
        />
        <div className="discovery-grid">
          {strengths.map((item, index) => (
            <motion.div
              className="principle-tile cursor-reactive"
              initial={{ opacity: 0, y: 50, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -12, rotateX: 8, rotateY: index % 2 ? -6 : 6 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ ...revealTransition, delay: index * 0.08 }}
              key={item.title}
            >
              <item.icon size={28} />
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyGalaxy() {
  const [active, setActive] = useState(skills[0]);

  return (
    <section className="universe-section overflow-hidden" id="skills">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Technology Galaxy"
          title="Tools orbiting one engineering core"
          description="No bars. No percentages. Just the technology constellations that power the system."
        />
        <div className="galaxy-shell">
          <div className="galaxy-core">
            <BrainCircuit size={42} />
            <p>Engineering Core</p>
            <strong>{active.category}</strong>
          </div>
          {skills.map((skill, skillIndex) =>
            skill.items.map((item, itemIndex) => {
              const index = skillIndex * 6 + itemIndex;
              return (
                <motion.button
                  className={`tech-orb orbit-${(index % 12) + 1}`}
                  key={`${skill.category}-${item}`}
                  onMouseEnter={() => setActive(skill)}
                  type="button"
                  whileHover={{ scale: 1.18, zIndex: 20 }}
                >
                  {item}
                </motion.button>
              );
            }),
          )}
          <div className="galaxy-info os-panel">
            <active.icon size={24} />
            <h3>{active.category}</h3>
            <p>{active.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectWorlds() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section className="universe-section" id="projects">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Worlds"
          title="Projects as orbiting product worlds"
          description="Each world expands on hover: environment, stack, story, and launch actions move as one product moment."
        />
        <div className="world-stage">
          <div className="world-preview os-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={revealTransition}
              >
                <active.icon className="text-cyan" size={32} />
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-cyan">{active.subtitle}</p>
                <h3 className="mt-3 font-display text-4xl font-bold text-white">{active.title}</h3>
                <p className="mt-5 leading-8 text-slate-300">{active.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.tech.map((tag) => (
                    <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold text-slate-300" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                  <MagneticButton href={active.githubUrl} target="_blank" variant="secondary">
                    GitHub <ExternalLink size={15} />
                  </MagneticButton>
                  <MagneticButton href={active.demoUrl} target="_blank">
                    Live Demo <ArrowRight size={15} />
                  </MagneticButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="world-orbits">
            {projects.map((project, index) => (
              <motion.button
                className={`world-node node-${index + 1} ${active.title === project.title ? 'active-world' : ''}`}
                key={project.title}
                onFocus={() => setActive(project)}
                onMouseEnter={() => setActive(project)}
                type="button"
                whileHover={{ scale: 1.15 }}
              >
                <project.icon size={22} />
                <span>{project.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0.38, 0.72], ['0%', '100%']);
  const totalHighlights = milestones.reduce((count, item) => count + item.highlights.length, 0);
  const coreTechnologies = [...new Set(milestones.flatMap((item) => item.tech))].slice(0, 9);

  return (
    <section className="universe-section" id="experience">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Exploration"
          title="Professional journey through software systems"
          description="Real engineering experience across scalable systems, full-stack development, AI-focused products, Agile teams, and modern frontend delivery."
        />
        <div className="journey-system">
          <motion.aside
            className="journey-console os-panel"
            initial={{ opacity: 0, x: -38, filter: 'blur(14px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={revealTransition}
          >
            <div className="journey-console-orb">
              <BriefcaseBusiness size={28} />
            </div>
            <p className="journey-console-kicker">Career Signal</p>
            <h3>Engineering path calibrated for production systems.</h3>
            <div className="journey-stats">
              <div>
                <strong>{milestones.length}</strong>
                <span>roles</span>
              </div>
              <div>
                <strong>{totalHighlights}</strong>
                <span>impact points</span>
              </div>
            </div>
            <div className="journey-core-stack">
              {coreTechnologies.map((tag) => (
                <small key={tag}>{tag}</small>
              ))}
            </div>
          </motion.aside>

          <div className="journey-rail">
            <motion.div className="journey-progress" style={{ height: progress }} />
            {milestones.map((item, index) => (
              <motion.article
                className="milestone os-panel cursor-reactive"
                initial={{ opacity: 0, x: index % 2 ? 54 : -54, rotateY: index % 2 ? -8 : 8, filter: 'blur(14px)' }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' }}
                whileHover={{ y: -8, rotateX: 2 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ ...revealTransition, delay: index * 0.06 }}
                key={`${item.company}-${item.period}`}
              >
                <div className="milestone-index">0{index + 1}</div>
                <div className="milestone-topline">
                  <span>
                    <CalendarDays size={14} />
                    {item.period}
                  </span>
                  <small>{item.location || 'On-site'}</small>
                </div>
                <h3>{item.company}</h3>
                <p className="milestone-role">{item.role}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2 size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="milestone-tech">
                  {item.tech.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="universe-section" id="certifications">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Credentials"
          title="Learning artifacts in the system"
          description="Focused certifications across AI, machine learning, cloud, and web development."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              className="certificate cursor-reactive"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, rotate: index === 1 ? 0 : index ? 2 : -2 }}
              viewport={{ once: true }}
              transition={{ ...revealTransition, delay: index * 0.08 }}
              key={cert.title}
            >
              <cert.icon size={28} />
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </motion.div>
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
    <section className="universe-section" id="contact">
      <div className="mx-auto w-[min(980px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Contact"
          title="Open a channel"
          description="Frontend-only transmission panel. Send a signal, and the interface confirms it locally."
        />
        <div className="contact-console os-panel">
          <div>
            <Mail className="text-cyan" size={30} />
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-slate-400">Email</p>
            <a className="mt-2 block break-all font-display text-2xl font-bold text-white" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="mt-8 flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a className="social-node" href={href} key={label} rel="noreferrer" target="_blank" aria-label={label}>
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input className="form-field" placeholder="Your name" required type="text" />
            <input className="form-field" placeholder="Your email" required type="email" />
            <input className="form-field" placeholder="Subject" required type="text" />
            <textarea className="form-field min-h-36 resize-none py-3" placeholder="Message" required />
            <button className="magnetic-button button-primary" type="submit">
              <span>Send Message <Send size={17} /></span>
            </button>
          </form>
        </div>
      </div>
      <AnimatePresence>
        {sent ? (
          <motion.div
            className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-28px)] max-w-md -translate-x-1/2 rounded-xl border border-cyan/25 bg-ink/90 px-4 py-4 text-center text-sm font-semibold text-cyan shadow-glow backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Signal received. Frontend transmission confirmed.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">Copyright 2026 Abhyanand Jha. Portfolio interface active.</p>
        <a className="social-node bg-white text-ink hover:text-ink" href="#home" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <BootSequence />
      <AnimatedBackground />
      <Navbar />
      <main>
        <CommandCenter />
        <Discovery />
        <TechnologyGalaxy />
        <ProjectWorlds />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
