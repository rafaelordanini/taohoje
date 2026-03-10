import { useEffect, useRef, useState } from 'react';
import { ExternalLink, BookOpen, Globe, GraduationCap, Heart, Mountain } from 'lucide-react';

const recursos = [
  {
    title: 'Tao Te Ching Online',
    description: 'Texto completo do Tao Te Ching com múltiplas traduções e comentários.',
    link: 'https://www.with.org/tao_te_ching_en.pdf',
    icon: BookOpen,
    color: 'var(--tao-sage)',
  },
  {
    title: 'Taoismo.com.br',
    description: 'Portal brasileiro sobre taoísmo com cursos e artigos sobre filosofia e práticas.',
    link: 'https://www.taoismo.com.br',
    icon: GraduationCap,
    color: 'var(--tao-terracotta)',
  },
  {
    title: 'Britannica - Taoism',
    description: 'Artigo enciclopédico completo sobre a história e conceitos do taoísmo.',
    link: 'https://www.britannica.com/topic/Taoism',
    icon: Globe,
    color: 'var(--tao-blue)',
  },
  {
    title: 'Daoist Gate',
    description: 'Recursos sobre Qigong, meditação e alquimia interna taoista.',
    link: 'https://daoistgate.com',
    icon: Mountain,
    color: 'var(--tao-sage)',
  },
  {
    title: 'Qigong Taoista',
    description: 'Informações sobre práticas de Qigong e Tai Chi no Brasil.',
    link: 'https://qigongtaoista.com.br',
    icon: Heart,
    color: 'var(--tao-terracotta)',
  },
  {
    title: 'Wudang Internal Arts',
    description: 'Tradição de artes marciais internas e práticas taoistas de Wudang.',
    link: 'https://www.wudangwushu.com',
    icon: Mountain,
    color: 'var(--tao-blue)',
  },
];

const Recursos = () => {
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
      id="recursos"
      ref={sectionRef}
      className="tao-section bg-[var(--tao-dark)] text-[var(--tao-bg)]"
    >
      <div className="tao-container">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[var(--tao-gold)] text-sm tracking-[0.15em] uppercase mb-4">
            Aprofundamento
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--tao-bg)] mb-6">
            Recursos para <span className="italic text-[var(--tao-sage)]">Estudo</span>
          </h2>
          <p className="text-[var(--tao-text-light)] leading-relaxed">
            Sites e fontes confiáveis sobre taoísmo selecionados dos principais portais do mundo.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((recurso, index) => {
            const Icon = recurso.icon;
            return (
              <a
                key={recurso.title}
                href={recurso.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 bg-[var(--tao-text)]/10 border border-[var(--tao-text)]/20 rounded-lg hover:bg-[var(--tao-text)]/20 hover:border-[var(--tao-text)]/30 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${recurso.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: recurso.color }} />
                  </div>
                  <ExternalLink className="w-5 h-5 text-[var(--tao-text-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-display text-xl text-[var(--tao-bg)] mb-2 group-hover:text-[var(--tao-sage)] transition-colors duration-300">
                  {recurso.title}
                </h3>
                <p className="text-sm text-[var(--tao-text-light)] leading-relaxed">
                  {recurso.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Note */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-[var(--tao-text-light)]">
            Estes recursos são atualizados regularmente.{' '}
            <span className="text-[var(--tao-sage)]">Última atualização: {new Date().toLocaleDateString('pt-BR')}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recursos;
