import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '+4', label: 'Años de experiencia en tecnología' },
  { value: '2', label: 'Productos propios lanzados: JoinMe & Opero' },
  { value: '3', label: 'Idiomas: español, inglés y portugués' },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-black pb-10 md:pb-14 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="liquid-glass rounded-3xl p-8 md:p-10 text-center"
          >
            <p
              className="text-5xl md:text-6xl text-white mb-3"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {stat.value}
            </p>
            <p className="text-white/50 text-sm tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
