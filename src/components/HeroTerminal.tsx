import { useEffect, useState } from 'react';
import { useLang } from '@/contexts/LangContext';

export default function HeroTerminal() {
  const { t } = useLang();
  const [phase, setPhase] = useState(0);
  const [cmdText, setCmdText] = useState('');
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const command = 'whoami';

  useEffect(() => {
    const delay = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        setCmdText(command.slice(0, i + 1));
        i++;
        if (i >= command.length) {
          clearInterval(timer);
          setTimeout(() => setPhase(1), 500);
        }
      }, 90);
      return () => clearInterval(timer);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    let line = 0;
    const timer = setInterval(() => {
      line++;
      setVisibleLines(line);
      if (line >= 6) {
        clearInterval(timer);
        setPhase(2);
      }
    }, 250);
    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    const timer = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(timer);
  }, []);

  const cursor = (
    <span className={`inline-block w-[8px] h-[18px] bg-accent ml-1 align-middle transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
  );

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-surface border border-elevated rounded-xl overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 px-4 py-3 bg-elevated/60 border-b border-elevated">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/70" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
            <span className="w-3 h-3 rounded-full bg-[#22C55E]/70" />
            <span className="ml-3 text-tx-secondary text-xs font-mono">wesley@portfolio:~</span>
          </div>

          <div className="p-5 md:p-6 font-mono text-sm md:text-base leading-relaxed">
            <div className="flex items-center">
              <span className="text-accent mr-2">$</span>
              <span className="text-tx-primary">{cmdText}</span>
              {phase === 0 && cursor}
            </div>

            {phase >= 1 && (
              <div className="mt-3 space-y-1">
                {visibleLines >= 1 && (
                  <p className="animate-fade-in-up text-lg md:text-xl font-display font-bold text-tx-primary">
                    <span className="text-accent-warm mr-2">→</span>{t('hero.name')}
                  </p>
                )}
                {visibleLines >= 2 && <div className="h-3" />}
                {visibleLines >= 2 && (
                  <div className="animate-fade-in-up flex items-center">
                    <span className="text-accent mr-2">$</span>
                    <span className="text-tx-secondary">{t('hero.command2')}</span>
                  </div>
                )}
                {visibleLines >= 3 && (
                  <p className="animate-fade-in-up text-tx-primary">
                    <span className="text-accent-warm mr-2">→</span>{t('hero.role')}
                  </p>
                )}
                {visibleLines >= 4 && <div className="h-3" />}
                {visibleLines >= 4 && (
                  <div className="animate-fade-in-up flex items-center">
                    <span className="text-accent mr-2">$</span>
                    <span className="text-tx-secondary">{t('hero.command3')}</span>
                  </div>
                )}
                {visibleLines >= 5 && (
                  <p className="animate-fade-in-up text-tx-primary">
                    <span className="text-accent-warm mr-2">→</span>{t('hero.location')}
                  </p>
                )}
                {visibleLines >= 6 && (
                  <div className="animate-fade-in-up flex items-center mt-3">
                    <span className="text-accent mr-2">$</span>
                    {cursor}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <div className="flex gap-3">
            <a href="/Wesley Paulo Ribeiro - En.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              CV (EN)
            </a>
            <a href="/Wesley Paulo Ribeiro - Pt.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-elevated text-tx-primary text-sm font-medium rounded-lg hover:bg-elevated/50 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              CV (PT)
            </a>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/wesleypribeiro" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 border border-elevated rounded-lg text-tx-secondary hover:text-tx-primary hover:bg-elevated/50 hover:border-accent/30 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com/in/wesleypribeiro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 border border-elevated rounded-lg text-tx-secondary hover:text-tx-primary hover:bg-elevated/50 hover:border-accent/30 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:wesley_paulo00@hotmail.com" aria-label="Email" className="p-2.5 border border-elevated rounded-lg text-tx-secondary hover:text-tx-primary hover:bg-elevated/50 hover:border-accent/30 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tx-secondary"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
}
