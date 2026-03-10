import { useEffect, useRef, useState } from 'react';
import { BookOpen } from 'lucide-react';

const capitulosFamosos = [
  { num: 1, nome: 'O Tao Inefável' },
  { num: 8, nome: 'A Virtude Superior' },
  { num: 11, nome: 'O Vazio' },
  { num: 16, nome: 'Retornar à Raiz' },
  { num: 25, nome: 'Os Quatro Grandes' },
  { num: 44, nome: 'Contentamento' },
  { num: 56, nome: 'Aquele que Sabe' },
  { num: 67, nome: 'Os Três Tesouros' },
];

const TaoTeChing = () => {
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
      id="tao-te-ching"
      ref={sectionRef}
      className="tao-section bg-[var(--tao-dark)] text-[var(--tao-bg)]"
    >
      <div className="tao-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--tao-sage)]/20 mb-6">
              <BookOpen className="w-8 h-8 text-[var(--tao-sage)]" />
            </div>
            <p className="text-[var(--tao-gold)] text-sm tracking-[0.15em] uppercase mb-4">
              O Livro Sagrado
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[var(--tao-bg)] mb-4">
              Tao Te <span className="italic text-[var(--tao-sage)]">Ching</span>
            </h2>
            <p className="text-[var(--tao-text-light)] text-lg">
              O Livro do Caminho e da Virtude
            </p>
          </div>

          {/* Main Quote */}
          <div
            className={`relative mb-16 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute -top-4 -left-4 text-8xl text-[var(--tao-sage)]/20 font-display">
              "
            </div>
            <blockquote className="relative z-10 text-center px-8">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-[var(--tao-bg)] leading-relaxed mb-6 italic">
                O Tao que pode ser expresso não é o Tao eterno.
                <br />
                O nome que pode ser nomeado não é o nome eterno.
                <br />
                O sem nome é o princípio do céu e da terra.
                <br />
                O com nome é a mãe das dez mil coisas.
              </p>
              <footer className="text-[var(--tao-gold)] text-sm tracking-wider">
                — LAO TZU, CAPÍTULO 1
              </footer>
            </blockquote>
          </div>

          {/* Introduction */}
          <div
            className={`mb-16 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[var(--tao-text-light)] leading-relaxed text-center max-w-2xl mx-auto">
              O <strong className="text-[var(--tao-bg)]">Tao Te Ching</strong>, atribuído ao sábio 
              <strong className="text-[var(--tao-bg)]"> Lao Tzu</strong> do século VI a.C., é o texto 
              fundamental do taoísmo. Com seus 81 capítulos curtos e poéticos, oferece ensinamentos 
              profundos sobre como viver em harmonia com o Tao.
            </p>
          </div>

          {/* Famous Chapters */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-center text-[var(--tao-gold)] text-sm tracking-[0.15em] uppercase mb-8">
              Capítulos Fundamentais
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {capitulosFamosos.map((cap, index) => (
                <div
                  key={cap.num}
                  className="group p-4 border border-[var(--tao-text)]/20 rounded-lg text-center hover:border-[var(--tao-sage)]/50 hover:bg-[var(--tao-sage)]/5 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="block text-2xl font-display text-[var(--tao-sage)] mb-1">
                    {cap.num}
                  </span>
                  <span className="text-sm text-[var(--tao-text-light)] group-hover:text-[var(--tao-bg)] transition-colors">
                    {cap.nome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`mt-12 text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://www.with.org/tao_te_ching_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--tao-sage)] hover:text-[var(--tao-bg)] transition-colors duration-300"
            >
              <span className="text-sm tracking-wider uppercase">Ler o texto completo</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaoTeChing;
