import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const jobs = [
  {
    company: 'Fortek Solutions',
    role: 'Analista de Software',
    period: '2024 — Presente · Córdoba, Argentina (Remoto)',
    description:
      'Diseño e implementación de soluciones con automatización e inteligencia artificial para PyMEs. Desarrollo de aplicaciones web con React, C# (.NET) y SQL Server integradas con APIs REST, y construcción de dashboards interactivos para la toma de decisiones.',
  },
  {
    company: 'JoinMe & Opero',
    role: 'Desarrollador Web Freelance',
    period: 'Ene 2023 — Ene 2024 · Córdoba, Argentina',
    description:
      'JoinMe: plataforma web para gestión de invitaciones digitales y organización de eventos. Opero: sistema web para gestión de PyMEs con paneles administrativos, módulos de ventas y automatizaciones con n8n. Desarrollo fullstack con foco en experiencia de usuario.',
  },
  {
    company: 'NeuTech',
    role: 'Técnico de TI',
    period: 'Ene 2022 — Oct 2022 · Córdoba, Argentina',
    description:
      'Gestión de hardware, soporte técnico y atención a usuarios finales. Administración básica de bases de datos y asistencia en proyectos internos de IT.',
  },
];

const education = [
  {
    icon: GraduationCap,
    title: 'Analista de Sistemas y Desarrollo de Software',
    place: 'Colegio Universitario IES · 2024 — 2026 (en curso)',
  },
  {
    icon: GraduationCap,
    title: 'Técnico en Programación, enfoque en bases de datos',
    place: 'Teclab Instituto Técnico Superior · 2022 — 2024',
  },
  {
    icon: Award,
    title: 'Certificado profesional Back-End Developer',
    place: 'Microsoft · 2025',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experiencia"
      ref={ref}
      className="relative bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            Mi{' '}
            <span
              className="italic text-white/60"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              recorrido
            </span>
          </h2>
          <p className="hidden md:block text-white/40 text-sm">Experiencia & Educación</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Experiencia laboral */}
          <div className="lg:col-span-2 space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="liquid-glass rounded-3xl p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-white text-xl md:text-2xl tracking-tight">
                      {job.company}
                    </h3>
                    <p className="text-white/60 text-sm font-medium mt-1">{job.role}</p>
                  </div>
                  <div className="liquid-glass rounded-full p-3 text-white shrink-0">
                    <Briefcase size={18} />
                  </div>
                </div>
                <p className="text-white/40 text-xs tracking-wide uppercase mb-4">
                  {job.period}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Educación y certificaciones */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="liquid-glass rounded-3xl p-6 md:p-8 h-fit"
          >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-6">
              Educación
            </p>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={item.title}>
                  <div className="flex items-start gap-3">
                    <div className="liquid-glass rounded-full p-2 text-white shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h4 className="text-white text-sm md:text-base tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-white/40 text-xs mt-1">{item.place}</p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="w-full h-px bg-white/10 mt-6" />
                  )}
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-white/10 my-6" />

            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Idiomas</p>
            <div className="space-y-2 text-sm">
              <p className="text-white/60">
                Español <span className="text-white/30">· Nativo</span>
              </p>
              <p className="text-white/60">
                Inglés <span className="text-white/30">· Muy competente</span>
              </p>
              <p className="text-white/60">
                Portugués <span className="text-white/30">· Nivel A2</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
