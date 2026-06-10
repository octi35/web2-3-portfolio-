import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Atom,
  FileCode2,
  Boxes,
  Braces,
  Sparkles,
  BarChart3,
  Workflow,
  GitBranch,
  Plug,
  Database,
  Bot,
  Palette,
} from 'lucide-react';

const tools = [
  { icon: Atom, name: 'React', detail: 'Aplicaciones web modernas con componentes reutilizables' },
  { icon: Braces, name: 'JavaScript / HTML / CSS', detail: 'La base de toda experiencia web sólida' },
  { icon: FileCode2, name: 'C# (.NET)', detail: 'Backends robustos y aplicaciones empresariales' },
  { icon: Bot, name: 'Python', detail: 'Automatización, análisis de datos e IA' },
  { icon: Database, name: 'SQL Server / MySQL', detail: 'Diseño y administración de bases de datos' },
  { icon: BarChart3, name: 'Power BI', detail: 'Dashboards interactivos para decisiones de negocio' },
  { icon: Workflow, name: 'n8n', detail: 'Automatización de flujos y notificaciones' },
  { icon: Plug, name: 'APIs REST', detail: 'Integración entre sistemas y servicios' },
  { icon: Boxes, name: 'Three.js / WebGL', detail: 'Efectos 3D e interacción directo en el navegador' },
  { icon: Sparkles, name: 'Framer Motion', detail: 'Animaciones fluidas y coreografiadas' },
  { icon: GitBranch, name: 'Git & GitHub', detail: 'Control de versiones y trabajo en equipo' },
  { icon: Palette, name: 'Tailwind CSS', detail: 'Estilos rápidos, consistentes y responsive' },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="herramientas"
      ref={ref}
      className="relative bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            Mis{' '}
            <span
              className="italic text-white/60"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              herramientas
            </span>
          </h2>
          <p className="hidden md:block text-white/40 text-sm">Stack tecnológico</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="liquid-glass rounded-2xl p-5 md:p-6"
            >
              <div className="liquid-glass rounded-full p-3 w-fit mb-4 text-white">
                <tool.icon size={20} />
              </div>
              <h3 className="text-white text-base md:text-lg mb-1 tracking-tight">
                {tool.name}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">{tool.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
