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
  slug: string;
  title: string;
  technologies: string[];
  description: { en: string; pt: string };
  overview: { en: string; pt: string };
  role: { en: string; pt: string };
  year: string;
  features: { en: string[]; pt: string[] };
  challenges?: { en: string; pt: string };
  image: string;
  gallery: string[];
  live: string;
  repo: string;
}

const projects: Project[] = [
  {
    slug: 'leadflow-ai',
    title: 'LeadFlow AI',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Groq AI'],
    description: {
      en: 'An AI-powered lead qualification and management platform with a real-time dashboard and webhook integrations.',
      pt: 'Uma plataforma de qualificação e gestão de leads baseada em IA com dashboard em tempo real e integrações via webhooks.',
    },
    overview: {
      en: 'LeadFlow AI is a complete platform to capture, automatically qualify, and manage leads. Using LLMs, it analyzes lead inputs and scores them from 0 to 100, providing actionable insights for sales teams. The system includes a modern dashboard for real-time tracking, along with webhook integrations for advanced automation workflows.',
      pt: 'O LeadFlow AI é uma plataforma completa para capturar, qualificar automaticamente e gerenciar leads. Utilizando LLMs, ele analisa as informações dos leads e os pontua de 0 a 100, fornecendo insights acionáveis para as equipes de vendas. O sistema inclui um dashboard moderno para acompanhamento em tempo real, além de integrações via webhooks para automações.'
    },
    role: {
      en: 'Full Stack Developer',
      pt: 'Desenvolvedor Full Stack'
    },
    year: '2026',
    features: {
      en: ['AI-powered lead qualification', 'Real-time metrics dashboard', 'Custom webhooks integrations', 'PostgreSQL database with Prisma ORM'],
      pt: ['Qualificação de leads com Inteligência Artificial', 'Dashboard de métricas em tempo real', 'Integrações customizadas via webhooks', 'Banco de dados PostgreSQL com Prisma ORM']
    },
    challenges: {
      en: 'One of the main challenges was integrating the AI analysis in real-time without blocking the user interface. We solved this by implementing asynchronous job queues in the backend, allowing the frontend to instantly receive the lead capture confirmation while the LLM processed the qualification score in the background.',
      pt: 'Um dos principais desafios foi integrar a análise de IA em tempo real sem bloquear a interface do usuário. Resolvemos isso implementando filas de processamento assíncrono no backend, permitindo que o frontend recebesse instantaneamente a confirmação de captura do lead enquanto o LLM processava a pontuação de qualificação em segundo plano.'
    },
    image: '/projects/leadflow-ai/LeadflowAI.png',
    gallery: [
      '/projects/leadflow-ai/LeadflowAI.png',
      '/projects/leadflow-ai/LeadflowAI_view2.png',
      '/projects/leadflow-ai/LeadflowAI_mobile.png',
      '/projects/leadflow-ai/LeadflowAI_mobile_view2.png',
    ],
    live: 'https://leadflow-ai-eight-tawny.vercel.app/',
    repo: 'https://github.com/wesleypribeiro/leadflow-ai',
  },
  {
    slug: 'kitchen-memories',
    title: 'Kitchen Memories',
    technologies: ['React', 'REST API', 'Node.js'],
    description: {
      en: 'A recipe search and discovery app powered by a third-party food API.',
      pt: 'Um app de busca e descoberta de receitas usando uma API de alimentos.',
    },
    overview: {
      en: 'Kitchen Memories is a modern recipe application that allows users to search, discover, and save their favorite dishes. Built with React and integrated with an extensive food API, it provides a seamless culinary exploration experience.',
      pt: 'O Kitchen Memories é um aplicativo moderno de receitas que permite aos usuários buscar, descobrir e salvar seus pratos favoritos. Construído com React e integrado a uma extensa API de alimentos, oferece uma experiência fluida de exploração culinária.'
    },
    role: {
      en: 'Frontend Developer',
      pt: 'Desenvolvedor Frontend'
    },
    year: '2020',
    features: {
      en: ['Advanced recipe search and filtering', 'Interactive UI with fast loading times', 'Responsive design for all devices', 'Third-party API integration'],
      pt: ['Busca e filtragem avançada de receitas', 'Interface interativa com carregamento rápido', 'Design responsivo para todos os dispositivos', 'Integração com API de terceiros']
    },
    challenges: {
      en: 'Handling rate limits and large data payloads from the third-party recipe API required careful state management and caching strategies to ensure a smooth user experience without unnecessary network requests.',
      pt: 'Lidar com limites de taxa (rate limits) e grandes pacotes de dados da API de receitas de terceiros exigiu um gerenciamento cuidadoso de estado e estratégias de cache para garantir uma experiência fluida ao usuário sem requisições de rede desnecessárias.'
    },
    image: '/projects/kitchen-memories/KitchenMemories_desktop.png',
    gallery: [
      '/projects/kitchen-memories/KitchenMemories_mobile.png',
      '/projects/kitchen-memories/KitchenMemories_desktop.png',
      '/projects/kitchen-memories/KitchenMemories_desktop_view2.png',
      '/projects/kitchen-memories/KitchenMemories_desktop_view3.png',
    ],
    live: 'https://wesleypribeiro.github.io/KitchenMemories/',
    repo: 'https://github.com/wesleypribeiro/KitchenMemories',
  },
  {
    slug: 'the-burger',
    title: 'The Burger',
    technologies: ['Vanilla JS', 'HTML', 'CSS'],
    description: {
      en: 'An interactive digital totem-style menu for placing burger orders, inspired by a famous Brazilian burger chain.',
      pt: 'Um menu digital interativo estilo totem para pedidos de hambúrguer, inspirado em uma famosa rede brasileira.',
    },
    overview: {
      en: 'The Burger is a responsive web application designed to simulate a fast-food ordering totem. It focuses on delivering a smooth and intuitive user interface without the use of complex frameworks, relying entirely on Vanilla JavaScript, HTML, and CSS.',
      pt: 'The Burger é uma aplicação web responsiva projetada para simular um totem de pedidos de fast-food. O foco foi entregar uma interface de usuário fluida e intuitiva sem o uso de frameworks complexos, utilizando apenas Vanilla JavaScript, HTML e CSS.'
    },
    role: {
      en: 'Frontend Developer',
      pt: 'Desenvolvedor Frontend'
    },
    year: '2020',
    features: {
      en: ['Interactive cart and checkout flow', 'Dynamic rendering with Vanilla JS', 'CSS Grid and Flexbox layouts', 'No-framework fast performance'],
      pt: ['Fluxo de carrinho e checkout interativo', 'Renderização dinâmica com Vanilla JS', 'Layouts usando CSS Grid e Flexbox', 'Alta performance sem frameworks']
    },
    challenges: {
      en: 'Managing complex application state (cart items, variations, total price) using only Vanilla JavaScript was challenging. We structured the code with a modular approach, separating data manipulation from DOM updates to maintain readability and performance.',
      pt: 'Gerenciar o estado complexo da aplicação (itens do carrinho, variações, preço total) usando apenas Vanilla JavaScript foi um desafio. Estruturamos o código com uma abordagem modular, separando a manipulação de dados das atualizações do DOM para manter a legibilidade e a performance.'
    },
    image: '/projects/the-burger/TheBurger_desktop.png',
    gallery: [
      '/projects/the-burger/TheBurger_desktop.png',
      '/projects/the-burger/TheBurger_desktop_view3.png',
      '/projects/the-burger/TheBurger_desktop_cart.png',
      '/projects/the-burger/TheBurger_mobile.png',
      '/projects/the-burger/TheBurger_desktop_added.png',
    ],
    live: 'https://wesleypribeiro.github.io/TheBurger/',
    repo: 'https://github.com/wesleypribeiro/TheBurger',
  },
  {
    slug: 'gigawallet',
    title: 'Gigawallet',
    technologies: ['React', 'JavaScript', 'REST API'],
    description: {
      en: 'A financial management app with a real-time currency converter using an external exchange rate API.',
      pt: 'Um app de gestão financeira com conversor de moedas em tempo real usando API de câmbio.',
    },
    overview: {
      en: 'Gigawallet is a financial tool designed to help users manage their money and convert currencies in real-time. By integrating a live exchange rate API, it ensures accurate and up-to-date conversions across multiple global currencies.',
      pt: 'O Gigawallet é uma ferramenta financeira projetada para ajudar os usuários a gerenciar seu dinheiro e converter moedas em tempo real. Integrando uma API de taxas de câmbio, ele garante conversões precisas e atualizadas entre várias moedas globais.'
    },
    role: {
      en: 'Frontend Developer',
      pt: 'Desenvolvedor Frontend'
    },
    year: '2020',
    features: {
      en: ['Real-time currency conversion', 'Financial tracking dashboard', 'External API integration', 'State management in React'],
      pt: ['Conversão de moedas em tempo real', 'Dashboard de acompanhamento financeiro', 'Integração de API externa', 'Gerenciamento de estado no React']
    },
    challenges: {
      en: 'Ensuring real-time accuracy while avoiding API overuse. We implemented debouncing on the currency input fields and locally cached exchange rates for short durations to provide instant feedback while respecting the API usage limits.',
      pt: 'Garantir precisão em tempo real evitando o uso excessivo da API. Implementamos um debounce nos campos de entrada de moeda e fizemos um cache local das taxas de câmbio por curtos períodos, para fornecer feedback instantâneo respeitando os limites da API.'
    },
    image: '/projects/gigawallet/Gigawallet_desktop.png',
    gallery: [
      '/projects/gigawallet/Gigawallet_desktop_converted.png',
      '/projects/gigawallet/Gigawallet_desktop_filled.png',
      '/projects/gigawallet/Gigawallet_mobile.png',
      '/projects/gigawallet/Gigawallet_desktop.png',
    ],
    live: 'https://wesleypribeiro.github.io/GigaWallet/',
    repo: 'https://github.com/wesleypribeiro/GigaWallet',
  },
  {
    slug: 'todo-list',
    title: 'My To-do List',
    technologies: ['React', 'JavaScript', 'CSS'],
    description: {
      en: 'A clean task management app with create, edit, and delete functionality.',
      pt: 'Um app simples de gerenciamento de tarefas com funcionalidade de criar, editar e excluir.',
    },
    overview: {
      en: 'A straightforward and elegant task management application. Built to practice React state management, component architecture, and clean UI design, it covers all fundamental CRUD operations in a smooth interface.',
      pt: 'Um aplicativo de gerenciamento de tarefas direto e elegante. Construído para praticar o gerenciamento de estado do React, arquitetura de componentes e design de interface limpo, cobrindo todas as operações CRUD fundamentais.'
    },
    role: {
      en: 'Frontend Developer',
      pt: 'Desenvolvedor Frontend'
    },
    year: '2020',
    features: {
      en: ['Create, Read, Update, Delete tasks', 'Local storage persistence', 'Minimalist and clean design', 'React Hooks utilization'],
      pt: ['Criar, Ler, Atualizar, Excluir tarefas', 'Persistência no local storage', 'Design minimalista e limpo', 'Utilização de React Hooks']
    },
    challenges: {
      en: 'Designing an interface that feels lightweight while offering robust features like inline editing. We achieved this by using subtle hover states and managing component-level focus efficiently within React.',
      pt: 'Projetar uma interface que pareça leve e ao mesmo tempo ofereça recursos robustos, como edição inline. Alcançamos isso usando estados sutis de hover e gerenciando eficientemente o foco em nível de componente dentro do React.'
    },
    image: '/projects/todo-list/TodoList_desktop.png',
    gallery: [
      '/projects/todo-list/TodoList_desktop_full.png',
      '/projects/todo-list/TodoList_desktop_active.png',
      '/projects/todo-list/TodoList_mobile.png',
      '/projects/todo-list/TodoList_desktop.png',
    ],
    live: 'https://wesleypribeiro.github.io/todo-list/',
    repo: 'https://github.com/wesleypribeiro/todo-list',
  }
];

export default projects;
