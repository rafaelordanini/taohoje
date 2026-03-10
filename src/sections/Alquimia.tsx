import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

const dantians = [
  {
    name: 'Dantian Inferior',
    location: 'Abaixo do umbigo',
    element: 'Jing (Essência)',
    color: 'var(--tao-terracotta)',
    description: 'Residência da essência física e energia vital primordial.',
  },
  {
    name: 'Dantian Médio',
    location: 'Centro do peito',
    element: 'Qi (Energia)',
    color: 'var(--tao-sage)',
    description: 'Residência da energia e das emoções. Centro do coração.',
  },
  {
    name: 'Dantian Superior',
    location: 'Entre as sobrancelhas',
    element: 'Shen (Espírito)',
    color: 'var(--tao-blue)',
    description: 'Residência do espírito e da consciência elevada.',
  },
];

const Alquimia = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="alquimia"
      ref={sectionRef}
      className="tao-section bg-[var(--tao-bg)]"
    >
      <div className="tao-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--tao-terracotta)]/10 mb-6">
              <Sparkles className="w-7 h-7 text-[var(--tao-terracotta)]" />
            </div>
            <p className="tao-label mb-4">Transformação Interior</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--tao-text)] mb-6">
              Alquimia <span className="italic text-[var(--tao-terracotta)]">Interna</span>
            </h2>
            <p className="text-[var(--tao-text-light)] leading-relaxed max-w-2xl mx-auto">
              Neidan (內丹) - O caminho taoista de transformação espiritual através do cultivo da energia.
            </p>
          </div>

          {/* Description */}
          <div
            className={`mb-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-[var(--tao-border)]">
              <p className="text-[var(--tao-text-light)] leading-relaxed mb-6">
                A <strong className="text-[var(--tao-text)]">Alquimia Interna</strong> é o caminho 
                taoista de transformação espiritual através do cultivo da energia. Diferente da 
                alquimia externa que buscava transformar metais em ouro, a alquimia interna trabalha 
                com as <strong className="text-[var(--tao-text)]">três substâncias vitais</strong>:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-[var(--tao-bg-light)] rounded-lg">
                  <span className="block text-lg font-display text-[var(--tao-terracotta)] mb-1">Jing</span>
                  <span className="text-sm text-[var(--tao-text-light)]">Essência</span>
                </div>
                <div className="text-center p-4 bg-[var(--tao-bg-light)] rounded-lg">
                  <span className="block text-lg font-display text-[var(--tao-sage)] mb-1">Qi</span>
                  <span className="text-sm text-[var(--tao-text-light)]">Energia</span>
                </div>
                <div className="text-center p-4 bg-[var(--tao-bg-light)] rounded-lg">
                  <span className="block text-lg font-display text-[var(--tao-blue)] mb-1">Shen</span>
                  <span className="text-sm text-[var(--tao-text-light)]">Espírito</span>
                </div>
              </div>

              <p className="text-[var(--tao-text-light)] leading-relaxed">
                O praticante aprende a transformar <strong className="text-[var(--tao-text)]">Jing em Qi</strong>, 
                <strong className="text-[var(--tao-text)]"> Qi em Shen</strong>, e 
                <strong className="text-[var(--tao-text)]"> Shen no Vazio</strong>, retornando assim à 
                unidade com o Tao. Este processo envolve a circulação da energia através dos meridianos, 
                conhecida como <strong className="text-[var(--tao-text)]">Órbita Microcósmica</strong> (Xiao Zhou Tian).
              </p>
            </div>
          </div>

          {/* Three Dantians */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-center tao-label mb-8">Os Três Centros de Energia</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {dantians.map((dantian, index) => (
                <div
                  key={dantian.name}
                  className="tao-card text-center"
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${dantian.color}15` }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: dantian.color }}
                    />
                  </div>
                  <h4 className="font-display text-xl text-[var(--tao-text)] mb-1">
                    {dantian.name}
                  </h4>
                  <p className="text-sm text-[var(--tao-text-light)] mb-3">
                    {dantian.location}
                  </p>
                  <p
                    className="text-sm font-medium mb-2"
                    style={{ color: dantian.color }}
                  >
                    {dantian.element}
                  </p>
                  <p className="text-sm text-[var(--tao-text-light)]">
                    {dantian.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div
            className={`mt-16 text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="tao-quote inline-block text-center border-l-0 border-t-2 pt-6 border-[var(--tao-terracotta)]/30 max-w-xl">
              <p className="text-xl text-[var(--tao-text)] mb-4 italic">
                "Transformar a essência em energia, a energia em espírito, 
                e o espírito no vazio - este é o caminho do retorno ao Tao."
              </p>
              <span className="text-sm text-[var(--tao-text-light)] not-italic">
                — Tradição Taoista
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alquimia;
