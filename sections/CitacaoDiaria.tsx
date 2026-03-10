import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';

const citacoes = [
  {
    texto: 'Aquele que sabe não fala. Aquele que fala não sabe.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 56',
  },
  {
    texto: 'A virtude superior não é virtuosa, por isso tem virtude. A virtude inferior não perde a virtude, por isso não tem virtude.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 38',
  },
  {
    texto: 'Agir sem agir, trabalhar sem trabalhar, saborear sem saborear.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 63',
  },
  {
    texto: 'Aquele que supera os outros é forte. Aquele que supera a si mesmo é poderoso.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 33',
  },
  {
    texto: 'Contentamento é a maior riqueza.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 44',
  },
  {
    texto: 'A suavidade vence a dureza. A fraqueza vence a força.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 36',
  },
  {
    texto: 'Quem deseja tomar o mundo e agir sobre ele, eu vejo que não terá sucesso.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 29',
  },
  {
    texto: 'Sem sair de casa, você pode conhecer o mundo. Sem olhar pela janela, você pode ver o caminho do céu.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 47',
  },
  {
    texto: 'O sábio não acumula. Quanto mais ele ajuda aos outros, mais ele beneficia a si mesmo.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 81',
  },
  {
    texto: 'Um grande árvore cresce de um pequeno broto. Uma torre de nove andares começa com um monte de terra.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 64',
  },
  {
    texto: 'Retornar é o movimento do Tao. Suavizar é o funcionamento do Tao.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 40',
  },
  {
    texto: 'O Tao nunca age, mas através dele tudo é feito.',
    autor: 'Lao Tzu',
    capitulo: 'Capítulo 37',
  },
];

const CitacaoDiaria = () => {
  const [citacao, setCitacao] = useState(citacoes[0]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Get daily quote based on date
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    const index = dayOfYear % citacoes.length;
    setCitacao(citacoes[index]);
  }, []);

  const refreshQuote = () => {
    setIsRefreshing(true);
    const randomIndex = Math.floor(Math.random() * citacoes.length);
    setTimeout(() => {
      setCitacao(citacoes[randomIndex]);
      setIsRefreshing(false);
    }, 300);
  };

  return (
    <section className="py-16 bg-[var(--tao-sage)]/5 border-y border-[var(--tao-border)]">
      <div className="tao-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <p className="tao-label">Reflexão do Dia</p>
            <button
              onClick={refreshQuote}
              className="p-2 rounded-full hover:bg-[var(--tao-sage)]/10 transition-colors duration-300"
              aria-label="Nova citação"
            >
              <RefreshCw
                className={`w-4 h-4 text-[var(--tao-sage)] ${
                  isRefreshing ? 'animate-spin' : ''
                }`}
              />
            </button>
          </div>

          <blockquote className="mb-4">
            <p className="font-display text-2xl md:text-3xl text-[var(--tao-text)] italic leading-relaxed">
              "{citacao.texto}"
            </p>
          </blockquote>

          <footer className="text-sm text-[var(--tao-text-light)]">
            <span className="text-[var(--tao-sage)]">{citacao.autor}</span>
            <span className="mx-2">·</span>
            <span>{citacao.capitulo}</span>
          </footer>

          <p className="mt-6 text-xs text-[var(--tao-text-light)]/70">
            Atualizada automaticamente todos os dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default CitacaoDiaria;
