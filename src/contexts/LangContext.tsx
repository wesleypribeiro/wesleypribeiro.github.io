import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'pt';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.home': { en: 'Home', pt: 'Início' },
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.skills': { en: 'Skills', pt: 'Habilidades' },
  'nav.experience': { en: 'Experience', pt: 'Experiência' },
  'nav.projects': { en: 'Projects', pt: 'Projetos' },
  'nav.contact': { en: 'Contact', pt: 'Contato' },

  // Hero terminal
  'hero.command1': { en: 'whoami', pt: 'whoami' },
  'hero.name': { en: 'Wesley Paulo Ribeiro', pt: 'Wesley Paulo Ribeiro' },
  'hero.command2': { en: 'cat role.txt', pt: 'cat cargo.txt' },
  'hero.role': { en: 'Full Stack Engineer · MERN Stack & AWS', pt: 'Engenheiro Full Stack · MERN Stack & AWS' },
  'hero.command3': { en: 'echo $LOCATION', pt: 'echo $LOCALIZACAO' },
  'hero.location': { en: 'São José dos Campos, SP, Brazil', pt: 'São José dos Campos, SP, Brasil' },

  // About
  'about.label': { en: 'Get to know me', pt: 'Conheça-me' },
  'about.title': { en: 'About', pt: 'Sobre' },
  'about.bio1': {
    en: 'Experienced Full Stack Developer specialized in the JavaScript/TypeScript ecosystem. With a degree in Analysis and Systems Development, I\'ve spent the last 4+ years building scalable web applications at production level.',
    pt: 'Desenvolvedor Full Stack experiente, especializado no ecossistema JavaScript/TypeScript. Com formação em Análise e Desenvolvimento de Sistemas, passei os últimos 4+ anos construindo aplicações web escaláveis em nível de produção.',
  },
  'about.bio2': {
    en: 'My core expertise lies in the MERN stack (MongoDB, Express, React, Node.js), coupled with solid experience in AWS Cloud Computing (Lambda, SQS, SES, S3) and Linux environments. I\'m passionate about clean code, DevOps practices using Docker, and solving complex problems efficiently.',
    pt: 'Minha principal expertise está na stack MERN (MongoDB, Express, React, Node.js), aliada a sólida experiência em AWS Cloud Computing (Lambda, SQS, SES, S3) e ambientes Linux. Sou apaixonado por código limpo, práticas DevOps com Docker e resolver problemas complexos de forma eficiente.',
  },
  'about.bio3': {
    en: 'In 2021, I completed an intensive Full Stack Web Development course at Trybe (+1,500 hours), which was a crucial step in propelling my career.',
    pt: 'Em 2021, concluí um curso intensivo de Desenvolvimento Web Full Stack na Trybe (+1.500 horas), que foi um passo crucial para impulsionar minha carreira.',
  },
  'about.years': { en: 'Years Experience', pt: 'Anos de Experiência' },
  'about.stack': { en: 'Core Stack', pt: 'Stack Principal' },
  'about.cloud': { en: 'Cloud Platform', pt: 'Plataforma Cloud' },

  // Skills
  'skills.label': { en: 'What I work with', pt: 'Com o que trabalho' },
  'skills.title': { en: 'Skills', pt: 'Habilidades' },
  'skills.frontend': { en: 'Frontend', pt: 'Frontend' },
  'skills.testing': { en: 'Testing', pt: 'Testes' },
  'skills.build': { en: 'Build Tools', pt: 'Build Tools' },
  'skills.backend': { en: 'Backend', pt: 'Backend' },
  'skills.database': { en: 'Database', pt: 'Banco de Dados' },
  'skills.cloud': { en: 'Cloud & DevOps', pt: 'Cloud & DevOps' },
  'skills.other': { en: 'Other', pt: 'Outros' },

  // Experience
  'exp.label': { en: 'Where I\'ve worked', pt: 'Onde trabalhei' },
  'exp.title': { en: 'Experience', pt: 'Experiência' },
  'exp.role1': { en: 'Full Stack Developer', pt: 'Desenvolvedor Web Full Stack' },
  'exp.period1': { en: 'Sep 2021 – Jun 2026', pt: 'Set 2021 – Jun 2026' },
  'exp.1.0': {
    en: 'End-to-end development of web applications using the MERN Stack (MongoDB, Express, React, Node.js).',
    pt: 'Desenvolvimento completo (front-end e back-end) de aplicações web utilizando React.js e Node.js.',
  },
  'exp.1.1': {
    en: 'Architected and deployed scalable backend solutions with AWS Serverless Microservices (Lambda, SQS, SES).',
    pt: 'Projeto e manutenção de arquiteturas de microsserviços na AWS (Lambda, SQS, SES) focando em performance.',
  },
  'exp.1.2': {
    en: 'Built responsive and interactive UIs using React.js with Redux and TypeScript.',
    pt: 'Construção de interfaces responsivas e interativas usando React.js com Redux e TypeScript.',
  },
  'exp.1.3': {
    en: 'Managed MongoDB databases, handling complex data modeling and query optimization.',
    pt: 'Gerenciamento de banco de dados MongoDB e criação de queries otimizadas.',
  },
  'exp.1.4': {
    en: 'Implemented automated testing and CI/CD best practices with Docker.',
    pt: 'Implementação de testes automatizados e melhores práticas de CI/CD com Docker.',
  },
  'exp.role2': { en: 'IT Support Intern', pt: 'Manutenção e Suporte de Informática (Estágio)' },
  'exp.period2': { en: 'Jun 2017 – Jan 2018', pt: 'Jun 2017 – Jan 2018' },
  'exp.2.0': {
    en: 'Provided technical support and maintained company hardware/software infrastructure.',
    pt: 'Suporte técnico aos funcionários e manutenção de hardware/software.',
  },
  'exp.2.1': {
    en: 'Managed customer service and technical troubleshooting for external clients.',
    pt: 'Atendimento e suporte telefônico aos clientes da empresa.',
  },
  'exp.role3': { en: 'Software Developer (Freelance)', pt: 'Desenvolvedor de Sistemas (Freelance)' },
  'exp.period3': { en: 'Jan 2017 – Mar 2017', pt: 'Jan 2017 – Mar 2017' },
  'exp.3.0': {
    en: 'Designed and developed custom web systems based on client requirements.',
    pt: 'Projeto e desenvolvimento de sistemas web conforme requisitos do cliente.',
  },
  'exp.3.1': {
    en: 'Created websites and applications for third-party clients.',
    pt: 'Desenvolvimento de websites e aplicativos solicitados por terceiros.',
  },

  // Projects
  'projects.label': { en: 'Things I\'ve built', pt: 'O que construí' },
  'projects.title': { en: 'Projects', pt: 'Projetos' },
  'projects.live': { en: 'Live Demo', pt: 'Ver Online' },
  'projects.source': { en: 'Source Code', pt: 'Código Fonte' },

  // Contact
  'contact.label': { en: 'Get in touch', pt: 'Entre em contato' },
  'contact.title': { en: 'Contact', pt: 'Contato' },
  'contact.intro': {
    en: 'I\'m always open to discussing new projects, ideas, or opportunities. Drop me a message and I\'ll get back to you as soon as possible.',
    pt: 'Estou sempre aberto a discutir novos projetos, ideias ou oportunidades. Envie uma mensagem e retornarei o mais breve possível.',
  },
  'contact.name': { en: 'Name', pt: 'Nome' },
  'contact.name.placeholder': { en: 'Your name', pt: 'Seu nome' },
  'contact.email': { en: 'Email', pt: 'Email' },
  'contact.email.placeholder': { en: 'your@email.com', pt: 'seu@email.com' },
  'contact.subject': { en: 'Subject', pt: 'Assunto' },
  'contact.subject.placeholder': { en: 'What\'s this about?', pt: 'Sobre o que é?' },
  'contact.message': { en: 'Message', pt: 'Mensagem' },
  'contact.message.placeholder': { en: 'Your message...', pt: 'Sua mensagem...' },
  'contact.send': { en: 'Send Message', pt: 'Enviar Mensagem' },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'pt' : 'en'));

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
