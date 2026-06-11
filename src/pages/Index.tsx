import { useEffect, useRef } from 'react';
import { Globe, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import AboutSection from '../components/AboutSection';
import FeaturedVideoSection from '../components/FeaturedVideoSection';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';
import ExperienceSection from '../components/ExperienceSection';
import ToolsSection from '../components/ToolsSection';
import StatsSection from '../components/StatsSection';
import ContactSection from '../components/ContactSection';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4';

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelAnimation = () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const animateOpacity = (from: number, to: number, duration: number) => {
      cancelAnimation();
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        video.style.opacity = String(from + (to - from) * progress);
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(step);
        } else {
          animationRef.current = null;
        }
      };
      animationRef.current = requestAnimationFrame(step);
    };

    let fadingOut = false;

    const handleCanPlay = () => {
      video.play();
      animateOpacity(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (!fadingOut && Number.isFinite(remaining) && remaining <= 0.55) {
        fadingOut = true;
        const current = parseFloat(video.style.opacity || '1');
        animateOpacity(current, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      window.setTimeout(() => {
        video.currentTime = 0;
        video.play();
        fadingOut = false;
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      cancelAnimation();
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="bg-black">
      {/* HERO */}
      <div className="min-h-screen overflow-hidden relative flex flex-col">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          src={HERO_VIDEO_URL}
          muted
          autoPlay
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
        />

        {/* Navbar */}
        <nav className="relative z-20 px-6 py-6">
          <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Globe size={24} className="text-white" />
                <span className="text-white font-semibold text-lg">Octavio Fakiani</span>
              </div>
              <div className="hidden md:flex items-center gap-8 ml-8">
                <a href="#sobre-mi" className="text-white/80 hover:text-white text-sm font-medium">
                  Sobre mí
                </a>
                <a href="#servicios" className="text-white/80 hover:text-white text-sm font-medium">
                  Qué hago
                </a>
                <a href="#experiencia" className="text-white/80 hover:text-white text-sm font-medium">
                  Experiencia
                </a>
                <a href="#herramientas" className="text-white/80 hover:text-white text-sm font-medium">
                  Herramientas
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#contacto" className="text-white text-sm font-medium">
                Contacto
              </a>
              <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
                Descargar CV
              </button>
            </div>
          </div>
        </nav>

        {/* Gradient overlay — darkens top so title stays readable over the video */}
        <div className="absolute inset-x-0 top-0 h-72 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
          <h1
            className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap mb-8"
            style={{
              fontFamily: "'Instrument Serif', serif",
              textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)',
            }}
          >
            Creando en <em className="italic">3D</em>.
          </h1>

          <div className="max-w-xl w-full mb-6">
            <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
              <input
                type="email"
                placeholder="Ingresá tu email"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm outline-none"
              />
              <button className="bg-white rounded-full p-3 text-black">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <p className="text-white text-sm leading-relaxed px-4 mb-8 max-w-xl">
            Soy Octavio Fakiani, Analista en Sistemas de Córdoba, Argentina. Desarrollo
            aplicaciones web modernas con efectos 3D, automatización e inteligencia
            artificial que transforman ideas en experiencias inmersivas.
          </p>

          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Ver mi trabajo
          </button>
        </div>

        {/* Social icons */}
        <div className="relative z-10 flex justify-center gap-4 pb-12">
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
          <a
            href="mailto:octifaki@gmail.com"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <AboutSection />
      <FeaturedVideoSection />
      <StatsSection />
      <PhilosophySection />
      <ServicesSection />
      <ExperienceSection />
      <ToolsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
