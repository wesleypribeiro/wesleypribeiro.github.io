import SectionHeading from './SectionHeading';
import { useInView } from '@/hooks/useInView';
import { useLang } from '@/contexts/LangContext';

export default function ExperienceSection() {
  const { ref, isInView } = useInView();
  const { t } = useLang();

  const EXPERIENCES = [
    {
      role: t('exp.role1'),
      company: 'GAP Sistemas',
      period: t('exp.period1'),
      description: [t('exp.1.0'), t('exp.1.1'), t('exp.1.2'), t('exp.1.3'), t('exp.1.4')],
    },
    {
      role: t('exp.role2'),
      company: 'Sincomércio São José dos Campos',
      period: t('exp.period2'),
      description: [t('exp.2.0'), t('exp.2.1')],
    },
    {
      role: t('exp.role3'),
      company: 'CanionTI',
      period: t('exp.period3'),
      description: [t('exp.3.0'), t('exp.3.1')],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label={t('exp.label')} title={t('exp.title')} />

        <div
          ref={ref}
          className={`relative transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-elevated" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-14">
                <div className={`absolute left-[10px] md:left-[14px] top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                  index === 0
                    ? 'bg-accent border-accent shadow-[0_0_8px_rgba(59,130,246,0.4)]'
                    : 'bg-deep border-tx-secondary/40'
                }`} />

                <div className="bg-surface border border-elevated rounded-xl p-6 hover:border-accent/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-tx-primary">{exp.role}</h3>
                      <p className="text-accent text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-tx-secondary text-sm font-mono shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-tx-secondary text-sm leading-relaxed flex gap-2">
                        <span className="text-accent-warm mt-0.5 shrink-0">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
