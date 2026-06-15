import SectionHeading from './SectionHeading';
import { useInView } from '@/hooks/useInView';
import { useLang } from '@/contexts/LangContext';

export default function ContactSection() {
  const { ref, isInView } = useInView();
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading label={t('contact.label')} title={t('contact.title')} />

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-tx-secondary text-lg mb-10 max-w-xl">
            {t('contact.intro')}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a href="mailto:wesley_paulo00@hotmail.com" className="flex items-center gap-4 bg-surface border border-elevated rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-xs text-tx-secondary">Email</p>
                <p className="text-sm text-tx-primary font-medium group-hover:text-accent transition-colors">wesley_paulo00@hotmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/wesleypribeiro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-surface border border-elevated rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <p className="text-xs text-tx-secondary">LinkedIn</p>
                <p className="text-sm text-tx-primary font-medium group-hover:text-accent transition-colors">linkedin.com/in/wesleypribeiro</p>
              </div>
            </a>
          </div>

          <form action="https://formspree.io/f/mzbwlkqj" method="POST" className="space-y-5" id="contactForm">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-tx-secondary mb-1.5">
                  {t('contact.name')} <span className="text-accent-warm">*</span>
                </label>
                <input type="text" name="name" id="contact-name" required className="w-full bg-surface border border-elevated rounded-lg px-4 py-3 text-sm text-tx-primary placeholder-tx-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all duration-200" placeholder={t('contact.name.placeholder')} />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-tx-secondary mb-1.5">
                  {t('contact.email')} <span className="text-accent-warm">*</span>
                </label>
                <input type="email" name="email" id="contact-email" required className="w-full bg-surface border border-elevated rounded-lg px-4 py-3 text-sm text-tx-primary placeholder-tx-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all duration-200" placeholder={t('contact.email.placeholder')} />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-sm text-tx-secondary mb-1.5">
                {t('contact.subject')} <span className="text-accent-warm">*</span>
              </label>
              <input type="text" name="subject" id="contact-subject" required className="w-full bg-surface border border-elevated rounded-lg px-4 py-3 text-sm text-tx-primary placeholder-tx-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all duration-200" placeholder={t('contact.subject.placeholder')} />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm text-tx-secondary mb-1.5">
                {t('contact.message')} <span className="text-accent-warm">*</span>
              </label>
              <textarea name="message" id="contact-message" required rows={5} className="w-full bg-surface border border-elevated rounded-lg px-4 py-3 text-sm text-tx-primary placeholder-tx-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent/30 focus:outline-none transition-all duration-200 resize-none" placeholder={t('contact.message.placeholder')} />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
