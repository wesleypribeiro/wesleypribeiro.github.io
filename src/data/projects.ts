/**
 * ============================================================
 * PROJECT DATA
 * ============================================================
 * To add a new project, simply add a new object to the array
 * below following this structure:
 *
 * {
 *   title: 'Project Name',
 *   technologies: ['Tech1', 'Tech2', 'Tech3'],
 *   description: {
 *     en: 'English description of the project.',
 *     pt: 'Descrição do projeto em português.',
 *   },
 *   image: '/projects/your-image.png',  // Place image in /public/projects/
 *   live: 'https://your-live-url.com',  // Live demo URL
 *   repo: 'https://github.com/your-repo', // GitHub repo URL
 * }
 *
 * Tips:
 * - Place project images in /public/projects/
 * - Recommended image size: 800x450px (16:9 aspect ratio)
 * - Keep descriptions concise (1-2 sentences)
 * ============================================================
 */

export interface Project {
  title: string;
  technologies: string[];
  description: { en: string; pt: string };
  image: string;
  live: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: 'LeadFlow AI',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Groq AI'],
    description: {
      en: 'An AI-powered lead qualification and management platform with a real-time dashboard and webhook integrations.',
      pt: 'Uma plataforma de qualificação e gestão de leads baseada em IA com dashboard em tempo real e integrações via webhooks.',
    },
    image: '/projects/LeadflowAI.png',
    live: 'https://leadflow-ai-eight-tawny.vercel.app/',
    repo: 'https://github.com/wesleypribeiro/leadflow-ai',
  },
  {
    title: 'Kitchen Memories',
    technologies: ['React', 'REST API', 'Node.js'],
    description: {
      en: 'A recipe search and discovery app powered by a third-party food API.',
      pt: 'Um app de busca e descoberta de receitas usando uma API de alimentos.',
    },
    image: '/projects/KitchenMemories.png',
    live: 'https://wesleypribeiro.github.io/KitchenMemories/',
    repo: 'https://github.com/wesleypribeiro/KitchenMemories',
  },
  {
    title: 'The Burger',
    technologies: ['Vanilla JS', 'HTML', 'CSS'],
    description: {
      en: 'An interactive digital totem-style menu for placing burger orders, inspired by a famous Brazilian burger chain.',
      pt: 'Um menu digital interativo estilo totem para pedidos de hambúrguer, inspirado em uma famosa rede brasileira.',
    },
    image: '/projects/TheBurger.png',
    live: 'https://wesleypribeiro.github.io/TheBurger/',
    repo: 'https://github.com/wesleypribeiro/TheBurger',
  },
  {
    title: 'Gigawallet',
    technologies: ['React', 'JavaScript', 'REST API'],
    description: {
      en: 'A financial management app with a real-time currency converter using an external exchange rate API.',
      pt: 'Um app de gestão financeira com conversor de moedas em tempo real usando API de câmbio.',
    },
    image: '/projects/Gigawallet.png',
    live: 'https://wesleypribeiro.github.io/GigaWallet/',
    repo: 'https://github.com/wesleypribeiro/GigaWallet',
  },
  {
    title: 'My To-do List',
    technologies: ['React', 'JavaScript', 'CSS'],
    description: {
      en: 'A clean task management app with create, edit, and delete functionality.',
      pt: 'Um app simples de gerenciamento de tarefas com funcionalidade de criar, editar e excluir.',
    },
    image: '/projects/TodoList.png',
    live: 'https://wesleypribeiro.github.io/todo-list/',
    repo: 'https://github.com/wesleypribeiro/todo-list',
  },
];

export default projects;
