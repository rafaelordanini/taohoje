const YinYangIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20" />
    <circle cx="12" cy="7" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="17" r="2.5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--tao-darker)] text-[var(--tao-text-light)] py-12">
      <div className="tao-container">
        {/* Top Divider */}
        <div className="w-full h-px bg-[var(--tao-text)]/10 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="inline-flex items-center gap-3 mb-4 group"
            >
              <YinYangIcon className="w-6 h-6 text-[var(--tao-sage)] transition-transform duration-500 group-hover:rotate-180" />
              <span className="font-display text-lg text-[var(--tao-bg)]">
                Portal do Tao
              </span>
            </a>
            <p className="text-sm text-[var(--tao-text-light)]/70">
              © {currentYear} Portal do Tao. Conteúdo compilado de fontes respeitadas.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { href: '#inicio', label: 'Início' },
              { href: '#principios', label: 'Princípios' },
              { href: '#praticas', label: 'Práticas' },
              { href: '#recursos', label: 'Recursos' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm text-[var(--tao-text-light)] hover:text-[var(--tao-bg)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Info */}
        <div className="mt-10 pt-6 border-t border-[var(--tao-text)]/10 text-center">
          <p className="text-xs text-[var(--tao-text-light)]/50">
            Atualizado em: <span className="text-[var(--tao-sage)]">{currentDate}</span>
            <span className="mx-2">·</span>
            <span>Conteúdo atualizado diariamente com as principais informações sobre taoísmo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
