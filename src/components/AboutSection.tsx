import SectionHeading from './SectionHeading';
import { useInView } from '@/hooks/useInView';
import { useLang } from '@/contexts/LangContext';

export default function AboutSection() {
  const { ref, isInView } = useInView();
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label={t('about.label')} title={t('about.title')} />

        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="shrink-0">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-elevated ring-2 ring-accent/20 ring-offset-4 ring-offset-deep">
                <img src="/profile_pic.jpeg" alt="Wesley Paulo Ribeiro" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-deep" />
            </div>
          </div>

          <div className="flex-1 space-y-5">
            <p className="text-tx-secondary text-base md:text-lg leading-relaxed"
               dangerouslySetInnerHTML={{ __html: t('about.bio1').replace('4+', '<span class="text-accent font-medium">4+</span>').replace('Web Developer', '<span class="text-tx-primary font-medium">Web Developer</span>').replace('Desenvolvedor Web', '<span class="text-tx-primary font-medium">Desenvolvedor Web</span>') }}
            />
            <p className="text-tx-secondary text-base md:text-lg leading-relaxed"
               dangerouslySetInnerHTML={{ __html: t('about.bio2').replace('MERN stack', '<span class="text-accent-warm font-medium">MERN stack</span>').replace('stack MERN', '<span class="text-accent-warm font-medium">stack MERN</span>').replace('AWS Cloud Computing', '<span class="text-tx-primary font-medium">AWS Cloud Computing</span>') }}
            />
            <p className="text-tx-secondary text-base md:text-lg leading-relaxed"
               dangerouslySetInnerHTML={{ __html: t('about.bio3').replace('Trybe', '<span class="text-tx-primary font-medium">Trybe</span>') }}
            />

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { value: '4+', label: t('about.years') },
                { value: 'MERN', label: t('about.stack') },
                { value: 'AWS', label: t('about.cloud') },
              ].map(item => (
                <div key={item.label} className="bg-surface border border-elevated rounded-lg px-5 py-3 text-center">
                  <div className="text-xl font-display font-bold text-accent">{item.value}</div>
                  <div className="text-xs text-tx-secondary mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
