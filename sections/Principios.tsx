import { useEffect, useRef, useState } from 'react';
import { Waves, Circle, Gem } from 'lucide-react';

const principios = [
  {
    icon: Waves,
    title: 'Wu Wei',
    subtitle: 'A Arte da Não-Ação',
    description:
      'Wu Wei não significa inatividade, mas sim agir em harmonia com o fluxo natural das coisas. É como nadar com a correnteza em vez de contra ela. Através da não-ação forçada, todas as coisas se realizam naturalmente.',
    color: 'var(--tao-blue)',
  },
  {
    icon: Circle,
    title: 'Yin e Yang',
    subtitle: 'A Dança das Polaridades',
    description:
      'Yin e Yang representam as forças complementares que permeiam todo o universo. Escuridão e luz, passividade e atividade, feminino e masculino - todos são aspectos interdependentes de um todo maior. O equilíbrio dinâmico entre essas forças é a essência da saúde e harmonia.',
    color: 'var(--tao-sage)',
  },
  {
    icon: Gem,
    title: 'Os Três Tesouros',
    subtitle: 'Compaixão, Simplicidade e Humildade',
    description:
      'Lao Tzu ensinou três tesouros a serem cultivados: Ci (compaixão), Jian (simplicidade/frugalidade) e Gan (humildade). Com compaixão, somos corajosos. Com simplicidade, somos generosos. Com humildade, podemos liderar com verdadeira sabedoria.',
    color: 'var(--tao-terracotta)',
  },
];

const Principios = () => {
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
      id="principios"
      ref={sectionRef}
      className="tao-section bg-[var(--tao-bg)]"
    >
      <div className="tao-container">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="tao-label mb-4">Fundamentos</p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--tao-text)] mb-6">
            Três Pilares do <span className="italic text-[var(--tao-sage)]">Tao</span>
          </h2>
          <p className="text-[var(--tao-text-light)] leading-relaxed">
            Os princípios fundamentais que guiam o cultivador taoista em sua jornada 
            de retorno à natureza original.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {principios.map((principio, index) => {
            const Icon = principio.icon;
            return (
              <div
                key={principio.title}
                className={`tao-card group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${principio.color}15` }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: principio.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-[var(--tao-text)] mb-2">
                  {principio.title}
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: principio.color }}
                >
                  {principio.subtitle}
                </p>
                <p className="text-[var(--tao-text-light)] leading-relaxed text-sm">
                  {principio.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="tao-quote inline-block text-center border-l-0 border-t-2 pt-6 max-w-2xl">
            <p className="text-xl md:text-2xl text-[var(--tao-text)] mb-4">
              "O homem segue a Terra, a Terra segue o Céu, o Céu segue o Tao, 
              e o Tao segue sua própria natureza."
            </p>
            <span className="text-sm text-[var(--tao-text-light)] not-italic">
              — Lao Tzu, Tao Te Ching, Capítulo 25
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principios;
