import { useEffect, useRef, useState } from 'react';

const Introducao = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="introducao"
      ref={sectionRef}
      className="tao-section bg-[var(--tao-bg-light)]"
    >
      <div className="tao-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="tao-label mb-4">Filosofia Taoísta</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--tao-text)] mb-8">
              O Que é o <span className="italic text-[var(--tao-sage)]">Tao</span>?
            </h2>
            
            <div className="space-y-6 text-[var(--tao-text-light)] leading-relaxed">
              <p
                className={`transition-all duration-700 delay-150 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                O <strong className="text-[var(--tao-text)]">Tao</strong> (道), que significa 'O Caminho', 
                é o princípio fundamental da realidade segundo o taoísmo. É a fonte inefável de todas as coisas, 
                o fluxo natural do universo que transcende palavras e conceitos.
              </p>
              
              <div
                className={`tao-quote text-lg text-[var(--tao-text)] py-2 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                "O Tao que pode ser expresso não é o Tao eterno. O nome que pode ser nomeado não é o nome eterno."
                <span className="block mt-2 text-sm not-italic text-[var(--tao-text-light)]">
                  — Lao Tzu, Tao Te Ching
                </span>
              </div>
              
              <p
                className={`transition-all duration-700 delay-450 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                O taoísmo nos convida a viver em harmonia com este fluxo natural, abandonando a resistência 
                e encontrando paz na aceitação do que é. É uma filosofia de vida que valoriza a 
                <strong className="text-[var(--tao-text)]"> simplicidade</strong>, a 
                <strong className="text-[var(--tao-text)]"> humildade</strong> e a conexão profunda com a natureza.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--tao-sage)]/20 to-[var(--tao-terracotta)]/20" />
              <img
                src="/yin-yang.jpg"
                alt="Símbolo Yin-Yang representando o equilíbrio taoísta"
                className="relative z-10 w-full h-full object-contain p-8"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[var(--tao-sage)]/30 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-[var(--tao-terracotta)]/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introducao;
