import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroTerminal from '@/components/HeroTerminal';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wesley Paulo Ribeiro — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specialized in MERN Stack (MongoDB, Express, React, Node.js) and AWS Cloud. Based in São José dos Campos, Brazil." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Wesley Paulo Ribeiro — Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specialized in MERN Stack and AWS Cloud. 4+ years building scalable web applications." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0A0E17" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Navbar />

      <main>
        <HeroTerminal />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
