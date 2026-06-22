import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LangContext';
import Link from 'next/link';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const NAV_ITEMS = [
    { label: t('nav.home'), href: '/#home' },
    { label: t('nav.about'), href: '/#about' },
    { label: t('nav.skills'), href: '/#skills' },
    { label: t('nav.experience'), href: '/#experience' },
    { label: t('nav.projects'), href: '/#projects' },
    { label: t('nav.contact'), href: '/#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep/80 backdrop-blur-xl border-b border-elevated/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#home" className="font-display font-bold text-xl text-tx-primary tracking-tight">
          W<span className="text-accent">R</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === item.href.slice(2)
                      ? 'text-accent bg-accent/10'
                      : 'text-tx-secondary hover:text-tx-primary hover:bg-elevated/50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="ml-3 px-3 py-1.5 text-xs font-mono font-medium border border-elevated rounded-lg text-tx-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
            aria-label={`Switch to ${lang === 'en' ? 'Portuguese' : 'English'}`}
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 text-xs font-mono font-medium border border-elevated rounded-lg text-tx-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
            aria-label={`Switch to ${lang === 'en' ? 'Portuguese' : 'English'}`}
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            className="flex flex-col gap-[5px] w-7 h-7 justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={`block w-5 h-[2px] bg-tx-primary rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-tx-primary rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-tx-primary rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-deep/95 backdrop-blur-xl border-b border-elevated/50 ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={handleClick}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === item.href.slice(2)
                    ? 'text-accent bg-accent/10'
                    : 'text-tx-secondary hover:text-tx-primary hover:bg-elevated/50'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
