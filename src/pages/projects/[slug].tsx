import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import projects, { Project } from '@/data/projects';
import { useLang } from '@/contexts/LangContext';

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const { lang, t } = useLang();

  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} - Case Study | Wesley Paulo Ribeiro</title>
        <meta name="description" content={project.overview[lang]} />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-32 pb-24 px-4 bg-deep">
        <article className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Back link */}
          <Link href="/#projects" className="inline-flex items-center gap-2 text-tx-secondary hover:text-accent transition-colors mb-12 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            {lang === 'en' ? 'Back to Projects' : 'Voltar aos Projetos'}
          </Link>

          {/* Hero Header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-tx-primary mb-12 leading-tight tracking-tight">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-elevated/50">
              <div>
                <span className="block text-xs font-mono text-tx-secondary uppercase mb-3 tracking-wider">{lang === 'en' ? 'Role' : 'Papel'}</span>
                <span className="text-base text-tx-primary font-medium">{project.role[lang]}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-tx-secondary uppercase mb-3 tracking-wider">{lang === 'en' ? 'Year' : 'Ano'}</span>
                <span className="text-base text-tx-primary font-medium">{project.year}</span>
              </div>
              <div className="col-span-2 md:col-span-2">
                <span className="block text-xs font-mono text-tx-secondary uppercase mb-3 tracking-wider">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-sm font-mono px-3 py-1 bg-surface border border-elevated rounded text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-20 space-y-8">
              {project.gallery.map((imgUrl, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden bg-elevated border border-elevated/50 shadow-2xl">
                  <img src={imgUrl} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-display font-semibold text-tx-primary mb-6">{lang === 'en' ? 'Overview' : 'Visão Geral'}</h2>
                <p className="text-tx-secondary leading-relaxed text-lg">
                  {project.overview[lang]}
                </p>
              </section>

              {project.challenges && (
                <section>
                  <h2 className="text-2xl font-display font-semibold text-tx-primary mb-6">{lang === 'en' ? 'Challenges & Solutions' : 'Desafios & Soluções'}</h2>
                  <div className="bg-elevated/30 border border-elevated rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                    <p className="text-tx-secondary leading-relaxed text-lg relative z-10">
                      {project.challenges[lang]}
                    </p>
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-2xl font-display font-semibold text-tx-primary mb-6">{lang === 'en' ? 'Key Features' : 'Funcionalidades Principais'}</h2>
                <ul className="space-y-4">
                  {project.features[lang].map((feature, i) => (
                    <li key={i} className="flex gap-4 text-tx-secondary text-lg">
                      <span className="text-accent mt-1.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-6 sticky top-32 self-start">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-accent hover:bg-accent/90 text-white font-medium py-4 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20 group">
                <span>{lang === 'en' ? 'Live Demo' : 'Ver Projeto Online'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-surface border border-elevated hover:border-tx-secondary text-tx-primary font-medium py-4 px-6 rounded-xl transition-colors group">
                <span>{lang === 'en' ? 'Source Code' : 'Código Fonte'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};
