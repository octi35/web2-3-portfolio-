import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative bg-black pt-28 md:pt-40 pb-12 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.04)_0%,_transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-8"
        >
          Contacto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-10"
        >
          Trabajemos{' '}
          <span
            className="italic text-white/60"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            juntos
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          ¿Tenés una idea que merece cobrar vida en 3D? Escribime y la hacemos
          realidad. Córdoba, Argentina — disponible para trabajo remoto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <motion.a
            href="mailto:octifaki@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-medium flex items-center gap-3"
          >
            <Mail size={18} />
            octifaki@gmail.com
            <ArrowRight size={18} />
          </motion.a>
          <div className="flex gap-4">
            <a
              href="https://github.com/octi35"
              target="_blank"
              rel="noreferrer"
              className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://ar.linkedin.com/in/octavio-fakiani-6662b5274"
              target="_blank"
              rel="noreferrer"
              className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <div className="w-full h-px bg-white/10 mb-8" />
        <p className="text-white/30 text-xs leading-relaxed">
          © 2026 Octavio Fakiani — Analista en Sistemas. Proyecto de portfolio
          desarrollado con React, TypeScript, Tailwind CSS y Framer Motion.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
