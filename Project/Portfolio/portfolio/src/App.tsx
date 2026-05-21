import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type SectionId = 'home' | 'about' | 'skills' | 'featured' | 'projects' | 'journey' | 'contact';

const navItems: { label: string; id: SectionId }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Featured', id: 'featured' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
];

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive UI', 'Animations'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Serverless Concepts'],
  },
  {
    title: 'Tools',
    items: ['Vite', 'Git', 'Figma', 'Framer Motion', 'Chrome DevTools'],
  },
  {
    title: 'Database',
    items: ['Firebase', 'MongoDB', 'Supabase', 'Prisma'],
  },
];

const featuredProject = {
  title: 'Neon Portfolio Dashboard',
  description:
    'A premium portfolio experience designed for frontend developers with polished motion, clean UI, and adaptive components for modern recruiters.',
  stack: ['React', 'Tailwind', 'TypeScript', 'Framer Motion'],
  features: ['Interactive dashboard panels', 'Glassmorphism cards', 'Smooth scroll transitions', 'Mobile-first experience'],
  demoUrl: '#',
  githubUrl: '#',
};

const projects = [
  {
    title: 'Space Agency Showcase',
    description: 'A responsive landing page with animated sections and advanced content reveal logic.',
    stack: ['React', 'Tailwind', 'GSAP'],
    live: '#',
    github: '#',
  },
  {
    title: 'E-commerce UI Kit',
    description: 'A premium product gallery with filters, hover effects, and polished interactions.',
    stack: ['TypeScript', 'React', 'Styled Components'],
    live: '#',
    github: '#',
  },
  {
    title: 'Learning Tracker App',
    description: 'A study progress tracker with modern cards, charts, and task management flows.',
    stack: ['React', 'Firebase', 'Tailwind'],
    live: '#',
    github: '#',
  },
];

const journey = [
  { year: '2022', title: 'HTML & CSS Foundations', description: 'Built my first websites, learned layouts, responsive design, and visual polish.' },
  { year: '2023', title: 'JavaScript & Modern UI', description: 'Moved into dynamic interfaces, API integration, and interactive experiences.' },
  { year: '2024', title: 'React & TypeScript', description: 'Crafted scalable applications with component-driven design and strong typing.' },
  { year: '2025', title: 'Full-stack Portfolio Projects', description: 'Delivered real portfolio experiences with backend workflows and polished UX.' },
];

const socialLinks = [
  { label: 'GitHub', href: '#', icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .08 1.52 1.03 1.52 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.6 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.84 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z' },
  { label: 'LinkedIn', href: '#', icon: 'M4.98 3.5C4.98 4.88 3.8 6 2.33 6S-.31 4.88-.31 3.5 1.86 1 3.33 1s1.65 1.12 1.65 2.5zM.01 8.99h4.64V23H.01V8.99zm7.5 0h4.43v1.92h.06c.62-1.18 2.13-2.42 4.38-2.42 4.69 0 5.56 3.09 5.56 7.11V23h-4.63v-6.78c0-1.62-.03-3.69-2.25-3.69-2.25 0-2.6 1.77-2.6 3.59V23H7.51V8.99z' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: 'M2 4a2 2 0 012-2h16a2 2 0 012 2v1.5l-10 6.25L2 5.5V4zm0 3.25v8.25A2 2 0 004 17.5h16a2 2 0 002-2V7.25l-10 6.25L2 7.25z' },
];

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(100, (scrollY / maxScroll) * 100) : 0);
      setShowTop(scrollY > 600);
      const positions = navItems.map((item) => {
        const section = document.getElementById(item.id);
        return section ? { id: item.id, offset: section.offsetTop } : null;
      }).filter(Boolean) as { id: SectionId; offset: number }[];

      const current = positions.reduce<SectionId>((active, section) => {
        return scrollY + window.innerHeight / 3 >= section.offset ? section.id : active;
      }, 'home');
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const themeToggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white transition-colors duration-500">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
        <div className="h-full bg-cyan-400/90 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      <div
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(93,224,255,0.18), transparent 18%), radial-gradient(circle at 85% 20%, rgba(96,181,255,0.12), transparent 22%)',
        }}
      />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(93,224,255,0.12),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(96,181,255,0.08),transparent_18%)]" />

      <div
        className="fixed z-40 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/50 blur-2xl"
        style={{ left: cursor.x, top: cursor.y }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 text-sm tracking-[0.02em]">
          <button onClick={() => scrollTo('home')} className="font-semibold text-white/90 transition hover:text-cyan-300">
            Ayan Frontend
          </button>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`transition ${activeSection === item.id ? 'text-cyan-300' : 'text-white/70'} hover:text-cyan-300`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={themeToggle}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white transition hover:border-cyan-400/40 hover:text-cyan-200"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>
      </header>

      {loading ? (
        <main className="grid min-h-screen place-items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/80 px-10 py-12 text-center shadow-card"
          >
            <div className="h-20 w-20 animate-spin rounded-full border-4 border-cyan-300/40 border-t-cyan-200" />
            <p className="max-w-sm text-base text-white/70">Loading a premium frontend portfolio experience...</p>
          </motion.div>
        </main>
      ) : (
        <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-6 py-8 md:py-12">
          <section id="home" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card md:p-10">
            <div className="absolute inset-0 bg-hero-gradient opacity-50" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative space-y-8">
              <p className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200/90 backdrop-blur">
                Frontend Developer • College Intern Ready
              </p>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  Crafting premium frontend experiences with modern interfaces, motion, and polished responsiveness.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  Passionate college developer focused on React, TypeScript, Tailwind, and elegant UI systems that impress hiring managers and users alike.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => scrollTo('projects')} className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
                    View Projects
                  </button>
                  <a href="#" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-cyan-300 hover:text-cyan-200">
                    Download Resume
                  </a>
                </div>
                <button onClick={() => scrollTo('contact')} className="rounded-2xl border border-cyan-400/30 bg-transparent px-6 py-3 text-sm text-cyan-200 transition hover:bg-cyan-400/10">
                  Contact Me
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:justify-start md:gap-8">
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:bg-cyan-400/15 hover:text-cyan-200"
                      aria-label={social.label}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Premium portfolio design with subtle glow and motion.</p>
              </div>
            </motion.div>
          </section>

          <section id="about" className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-md">
              <span className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">About Me</span>
              <h2 className="text-3xl font-semibold text-white">A frontend journey with elegant interfaces and polished interactions.</h2>
              <p className="text-base leading-8 text-slate-300">
                I am a college frontend developer creating sleek experiences for modern web products. My work balances structure, scalability, and user emotion through thoughtful UI systems.
              </p>
              <p className="text-base leading-8 text-slate-300">
                I specialize in React, JavaScript, Tailwind CSS, and TypeScript to build responsive, component-driven applications with a premium developer aesthetic.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {['React', 'JavaScript', 'Tailwind', 'TypeScript'].map((skill) => (
                  <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 p-6 shadow-card">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(93,224,255,0.12), transparent 20%), radial-gradient(circle at 80% 30%, rgba(96,181,255,0.14), transparent 22%)' }} />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-[2.5rem] bg-slate-900/70 shadow-glow">
                  <span className="text-5xl font-bold text-cyan-200">A</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">Ayan Kumar</h3>
                  <p className="text-sm text-slate-400">Frontend Developer · UI Enthusiast · Internship Seeker</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-left text-sm text-slate-300">
                  <p>Focused on building interactive landing pages, portfolio systems, and app interfaces that feel modern and polished.</p>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="skills" className="space-y-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Skills</span>
                <h2 className="mt-3 text-3xl font-semibold text-white">Organized skill sets for frontend success.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">From UI development and motion to tooling and backend integration, these categories show my most confident technical areas.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill) => (
                <motion.div whileHover={{ y: -8 }} key={skill.title} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-card transition">
                  <h3 className="mb-4 text-xl font-semibold text-white">{skill.title}</h3>
                  <div className="space-y-3">
                    {skill.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/5">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="featured" className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200/80">Featured Project</span>
                <span className="text-sm text-slate-400">Premium launch-ready UI</span>
              </div>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="rounded-[2rem] bg-slate-900/70 p-1 shadow-glow">
                  <div className="h-72 w-full rounded-[1.8rem] bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-900 p-6">
                    <div className="h-full rounded-[1.5rem] bg-slate-950/90 p-6 shadow-inner">
                      <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/70">Live Experience</p>
                      <div className="mt-6 h-full rounded-3xl bg-slate-900/80 p-6 text-slate-300">Preview of a high-end portfolio interface with glass panels and animated highlights.</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <h3 className="text-3xl font-semibold text-white">{featuredProject.title}</h3>
                  <p className="text-base leading-8 text-slate-300">{featuredProject.description}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {featuredProject.features.map((feature) => (
                      <div key={feature} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                    {featuredProject.stack.map((item) => (
                      <span key={item} className="rounded-full bg-cyan-400/10 px-4 py-2">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href={featuredProject.demoUrl} className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                      Live Demo
                    </a>
                    <a href={featuredProject.githubUrl} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-cyan-300 hover:text-cyan-200">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">Why this project stands out</h3>
              <p className="mt-4 text-slate-300">This showcase blends bold visual hierarchy, premium glassmorphism, and motion-driven feedback to highlight your strengths as a frontend candidate.</p>
              <div className="mt-8 space-y-4">
                {['Impactful UI', 'Responsive across devices', 'Recruiter-friendly flow', 'Strong technical stack'].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-200">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Projects</span>
                <h2 className="mt-3 text-3xl font-semibold text-white">A curated selection of modern frontend work.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">Each project is designed to communicate attention to detail, motion quality, and frontend craftsmanship.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <motion.div whileHover={{ y: -10 }} key={project.title} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-card transition duration-300">
                  <div className="mb-5 h-44 rounded-[1.8rem] bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-5">
                    <div className="h-full rounded-[1.5rem] bg-slate-900/90 p-4 text-slate-400">Project preview</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={project.live} className="rounded-2xl bg-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-300">
                      Live
                    </a>
                    <a href={project.github} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-cyan-300 hover:text-cyan-200">
                      Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="journey" className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-md">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Learning Journey</span>
                <h2 className="mt-3 text-3xl font-semibold text-white">A timeline of growth from fundamentals to full-stack portfolio projects.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">Each milestone reflects a new layer of frontend maturity and real-world experience.</p>
            </div>
            <div className="relative before:absolute before:top-6 before:left-6 before:h-full before:w-px before:bg-white/10 md:before:left-10">
              <div className="space-y-8">
                {journey.map((item, index) => (
                  <motion.div key={item.year} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative md:pl-12">
                    <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-cyan-400 bg-slate-950 shadow-glow md:left-10" />
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">{item.year}</span>
                      <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-md">
              <span className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Contact</span>
              <h2 className="mt-3 text-3xl font-semibold text-white">Let’s turn your next frontend idea into a polished reality.</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">Reach out for internships, freelance work, or collaboration on interface-focused projects.</p>
              <div className="mt-8 space-y-4">
                <a href="mailto:hello@example.com" className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:border-cyan-300 hover:bg-cyan-400/10">
                  hello@example.com
                </a>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200">
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-md">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-slate-400">
                  <span className="text-white">Name</span>
                  <input type="text" placeholder="Your name" className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20" />
                </label>
                <label className="block text-sm text-slate-400">
                  <span className="text-white">Email</span>
                  <input type="email" placeholder="hello@example.com" className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20" />
                </label>
              </div>
              <label className="block text-sm text-slate-400">
                <span className="text-white">Message</span>
                <textarea rows={5} placeholder="Tell me about your project" className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20" />
              </label>
              <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Send Message
              </button>
            </motion.form>
          </section>
        </main>
      )}

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-cyan-400/90 p-4 text-black shadow-[0_0_40px_rgba(93,224,255,0.24)] transition hover:scale-105"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
