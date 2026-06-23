import SectionHeading from './SectionHeading';
import { useInView } from '@/hooks/useInView';
import { useLang } from '@/contexts/LangContext';

const SKILL_CATEGORIES = [
  {
    nameKey: 'skills.frontend',
    color: 'text-accent',
    skills: [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'Tailwind' },
      { name: 'Redux' },
      { name: 'HTML5', icon: '/skills/html.svg' },
      { name: 'CSS3', icon: '/skills/css.svg' },
      { name: 'Responsive Design' },
      { name: 'React Native', icon: '/skills/react-native.svg' },
    ],
  },
  {
    nameKey: 'skills.cloud',
    color: 'text-purple-400',
    skills: [
      { name: 'AWS', icon: '/skills/aws.svg' },
      { name: 'CloudWatch' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'GitHub' },
      { name: 'Git', icon: '/skills/git.svg' },
      { name: 'Linux', icon: '/skills/linux.svg' },
    ],
  },
  {
    nameKey: 'skills.backend',
    color: 'text-accent-warm',
    skills: [
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'Express' },
      { name: 'REST APIs', icon: '/skills/api.svg' },
      { name: 'Microservices' },
    ],
  },
  {
    nameKey: 'skills.database',
    color: 'text-emerald-400',
    skills: [
      { name: 'MongoDB', icon: '/skills/mongodb.svg' },
      { name: 'MySQL', icon: '/skills/mysql.svg' },
      { name: 'PostgreSQL' },
      { name: 'Prisma' },
    ],
  },
  {
    nameKey: 'skills.build',
    color: 'text-cyan-400',
    skills: [
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Next.js' },
      { name: 'Vercel' },
    ],
  },
  {
    nameKey: 'skills.testing',
    color: 'text-rose-400',
    skills: [
      { name: 'Testing Library' },
      { name: 'Jest', icon: '/skills/jest.svg' },
    ],
  },
  {
    nameKey: 'skills.other',
    color: 'text-tx-secondary',
    skills: [
      { name: 'i18n' },
      { name: 'Agile / Scrum' },
      { name: 'Claude Code' },
      { name: 'LangChain' },
      { name: 'LangGraph' },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isInView } = useInView();
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label={t('skills.label')} title={t('skills.title')} />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.nameKey}
              className="bg-surface border border-elevated rounded-xl p-6 hover:border-accent/20 transition-colors duration-300"
            >
              <h3 className={`font-display font-semibold text-lg mb-4 ${category.color}`}>
                {t(category.nameKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-deep border border-elevated rounded-lg px-3 py-2 text-sm text-tx-secondary hover:text-tx-primary hover:border-accent/30 transition-all duration-200 group"
                  >
                    {skill.icon && (
                      <img src={skill.icon} alt="" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
