import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#principios', label: 'Princípios' },
    { href: '#praticas', label: 'Práticas' },
    { href: '#tao-te-ching', label: 'Tao Te Ching' },
    { href: '#recursos', label: 'Recursos' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--tao-bg)]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="tao-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-3 group"
          >
            <YinYangIcon className="w-8 h-8 text-[var(--tao-text)] transition-transform duration-500 group-hover:rotate-180" />
            <span className="font-display text-xl font-medium text-[var(--tao-text)]">
              Portal do Tao
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="tao-link text-sm font-medium tracking-[0.1em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--tao-text)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[var(--tao-bg)]/98 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="tao-container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="tao-link text-sm font-medium tracking-[0.1em] uppercase py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
