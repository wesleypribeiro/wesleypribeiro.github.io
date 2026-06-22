import SectionHeading from './SectionHeading';
import { useInView } from '@/hooks/useInView';
import { useLang } from '@/contexts/LangContext';
import projects from '@/data/projects';
import Link from 'next/link';

export default function ProjectsSection() {
  const { ref, isInView } = useInView();
  const { lang, t } = useLang();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label={t('projects.label')} title={t('projects.title')} />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {projects.map(project => (
            <article
              key={project.slug}
              className="group relative bg-surface border border-elevated rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 flex flex-col"
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">{lang === 'en' ? `View details for ${project.title}` : `Ver detalhes de ${project.title}`}</span>
              </Link>

              <div className="relative overflow-hidden aspect-video bg-elevated">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/40 transition-colors duration-300 z-10 pointer-events-none flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-white font-medium bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 shadow-lg border border-white/10">
                    {lang === 'en' ? 'View Case Study' : 'Ver Detalhes'}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-display font-semibold text-lg text-tx-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-tx-secondary text-sm leading-relaxed mb-4">
                  {project.description[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-deep border border-elevated rounded-md text-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto relative z-20">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-tx-secondary hover:text-accent transition-colors px-2 py-1 -ml-2 rounded hover:bg-elevated">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    {t('projects.live')}
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-tx-secondary hover:text-accent transition-colors px-2 py-1 rounded hover:bg-elevated">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    {t('projects.source')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
