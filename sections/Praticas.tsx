import { useEffect, useRef, useState } from 'react';

const praticas = [
  {
    id: 'meditacao',
    title: 'Meditação Taoista',
    subtitle: 'Sentar na Calma (Jing Zuo)',
    description:
      'A meditação taoista, conhecida como "Sentar na Calma" (Jing Zuo), é uma prática milenar para cultivar a serenidade do coração e preservar a vitalidade. Através de posturas naturais e confortáveis, aprendemos a relaxar e alinhar o corpo, acalmar a mente e pacificar as emoções. O estado de centramento pode ser sentido também fora da sessão de meditação, nas atividades cotidianas.',
    benefits: [
      'Acalma a mente e pacifica as emoções',
      'Desenvolve concentração e clareza mental',
      'Reduz estresse e ansiedade',
      'Cultiva a serenidade do coração',
    ],
    image: '/meditation.jpg',
    imagePosition: 'right',
  },
  {
    id: 'qigong',
    title: 'Qigong',
    subtitle: 'O Cultivo da Energia Vital',
    description:
      'Qigong (氣功) é o treinamento da energia vital (Qi). Compreende a execução consciente de movimentos aliados à respiração que visam promover a harmonia e a saúde. Os movimentos são em sua maioria suaves e circulares, pois o ritmo energético da natureza flui em movimentos espirais. Práticas famosas incluem o Baduanjin (Oito Peças de Brocado) e a Postura da Árvore (Zhan Zhuang).',
    benefits: [
      'Fortalece o sistema imunológico',
      'Melhora a circulação de energia',
      'Aumenta a vitalidade e disposição',
      'Promove equilíbrio físico e mental',
    ],
    image: '/qigong.jpg',
    imagePosition: 'left',
  },
  {
    id: 'taichi',
    title: 'Tai Chi Chuan',
    subtitle: 'A Suprema Arte dos Punhos',
    description:
      'Tai Chi Chuan (太極拳) é a mais famosa arte marcial interna chinesa, praticada mundialmente como arte de longa vida. Seus movimentos lentos, suaves e circulares são uma meditação em movimento. A prática relaxa a mente e o corpo, melhora a flexibilidade, coordenação e equilíbrio, e é benéfica para o coração e a circulação.',
    benefits: [
      'Melhora equilíbrio e coordenação',
      'Fortalece ossos e articulações',
      'Reduz estresse e tensão',
      'Cultiva paz interior',
    ],
    image: '/taichi.jpg',
    imagePosition: 'right',
  },
];

const Praticas = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="praticas"
      ref={sectionRef}
      className="tao-section bg-[var(--tao-bg-light)]"
    >
      <div className="tao-container">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="tao-label mb-4">Cultivo</p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--tao-text)] mb-6">
            Práticas do <span className="italic text-[var(--tao-sage)]">Cultivo Taoista</span>
          </h2>
          <p className="text-[var(--tao-text-light)] leading-relaxed">
            Métodos ancestrais para cultivar saúde, longevidade e harmonia com o Tao.
          </p>
        </div>

        {/* Practices */}
        <div className="space-y-24">
          {praticas.map((pratica, index) => (
            <div
              key={pratica.id}
              className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Image */}
              <div
                className={`relative ${
                  pratica.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg">
                  <img
                    src={pratica.image}
                    alt={pratica.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--tao-dark)]/20 to-transparent" />
                </div>
                
                {/* Decorative */}
                <div
                  className={`absolute -z-10 w-full h-full bg-[var(--tao-sage)]/10 rounded-lg ${
                    pratica.imagePosition === 'right'
                      ? '-top-4 -right-4'
                      : '-top-4 -left-4'
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`${
                  pratica.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <p className="tao-label mb-3">{pratica.subtitle}</p>
                <h3 className="font-display text-3xl md:text-4xl text-[var(--tao-text)] mb-6">
                  {pratica.title}
                </h3>
                <p className="text-[var(--tao-text-light)] leading-relaxed mb-8">
                  {pratica.description}
                </p>

                {/* Benefits */}
                <div>
                  <p className="text-sm font-medium text-[var(--tao-text)] mb-4">
                    Benefícios:
                  </p>
                  <ul className="space-y-2">
                    {pratica.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-[var(--tao-text-light)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--tao-sage)] mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Praticas;
