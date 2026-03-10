import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
        heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const element = document.querySelector('#introducao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--tao-bg)]/40 via-[var(--tao-bg)]/60 to-[var(--tao-bg)]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center items-start tao-container"
      >
        <div className="max-w-2xl">
          <p className="tao-label mb-6 opacity-0 animate-fade-in-up animate-delay-200">
            Sabedoria Milenar
          </p>
          
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-[var(--tao-text)] mb-6 opacity-0 animate-fade-in-up animate-delay-300">
            O Caminho
            <br />
            <span className="italic text-[var(--tao-sage)]">do Tao</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--tao-text-light)] leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-in-up animate-delay-400">
            Descubra a sabedoria milenar do taoísmo e encontre harmonia com o fluxo natural da vida.
          </p>
          
          <div className="opacity-0 animate-fade-in-up animate-delay-500">
            <a
              href="#principios"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#principios');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="tao-btn"
            >
              Explorar os Princípios
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[var(--tao-text-light)] hover:text-[var(--tao-text)] transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Descer</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
