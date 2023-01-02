const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll('section:not([id*="skills"]');

const liMobile = document.querySelectorAll(".links-mobile");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 70 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");

  liMobile.forEach((ltx) => ltx.classList.remove("active"));
  liMobile[len].classList.add("active");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function gfgMenu() {
  const GFG = document.querySelector(".links-menu");

  if (GFG.style.display === "none" || GFG.style.display === "") {
    GFG.style.display = "block";
    document.querySelector(".btn-toggle").style.display = "none";
    document.querySelector(".nav-wrapper").style.display = "none";
  } else {
    GFG.style.display = "none";
    document.querySelector(".btn-toggle").style.display = "block";
    document.querySelector(".nav-wrapper").style.display = "block";
  }
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Select the button
const btn = document.querySelector(".btn-toggle");

const currentTheme = localStorage.getItem("theme");

// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");
const icon = document.querySelector("#theme-icon");

if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  theme.href = "style/dark-theme.css";
  icon.className = "fa-solid fa-sun";
}

// Listen for a click on the button
btn.addEventListener("click", function () {
  let themeLS;
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "style/light-theme.css") {
    // ... then switch it to "dark-theme.css"
    themeLS = "dark";
    theme.href = "style/dark-theme.css";
    icon.className = "fa-solid fa-sun";
    // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    themeLS = "light";
    theme.href = "style/light-theme.css";
    icon.className = "fa-solid fa-moon";
  }
  localStorage.setItem("theme", themeLS);
});

// Language props
const navigatorLanguage = navigator.language || navigator.userLanguage;
let DEFAULT_LANG = navigatorLanguage.includes("pt")
  ? "pt-br"
  : navigatorLanguage.includes("es")
  ? "es"
  : "en";
let DATA_LANG_ELEMENTS = document.querySelectorAll("[data-lang-str]");

let TRANSLATIONS = {
  en: {
    "my-portfolio": "Wesley Paulo Ribeiro - My portfolio",
    experiences: "Experiences",
    projects: "Projects",
    contact: "Contact",
    "data-profile": "Full-stack Web Developer",
    "biography-title": "Biography",
    "biography-text1":
      'I am Wesley Paulo Ribeiro, I live at São José dos Campos, São Paulo - Brazil. I am currently a <strong data-lang-str="biography-current-job">Full-Stack Web Developer</strong> at GAP Sistemas, and I graduated in Systems Analysis and Development from Estácio College in the first semester of 2020. I also completed a Full Stack Development course at Trybe school in 2021.',
    "biography-text2":
      "I always loved programming, since when I was a teenager, when I thought I would become a hacker once I learned how to program! I started studying on my own with some internet blogs and books, and developed small applications in Python. In 2012, I took my first programming course, a Technical Course in Computer Science at Senac.",
    "biography-text3":
      "I am a committed, serious, and patient person. I am always seeking personal and professional development.",
    "biography-current-job": "Full-Stack Web Developer",
    "social-profile": "<a href='mailto:wesley_paulo00@hotmail.com' target='_blank'><i class='fa-solid fa-envelope'></i></a><a href='https://github.com/wesleypribeiro' target='_blank'><i class='fa-brands fa-github'></i></a><a href='https://www.linkedin.com/in/wesleypribeiro/?locale=en_US' target='_blank'><i class='fa-brands fa-linkedin'></i></a><a href='https://wesleypribeiro.github.io/WesleyPaulo_Resume_EN.pdf' target='_blank'><img src='img/cv3.png'></a>",
    "interests-title": "Interests",
    "interests-dev-back": "Back-end Development",
    "interests-dev-front": "Front-end Development",
    "education-title": "Education",
    "education-trybe":
      '<i class="fa-solid fa-graduation-cap"> </i>Full-Stack Development, 2021<div class="description">Trybe</div>',
    "education-estacio":
      '<i class="fa-solid fa-graduation-cap"> </i>Systems Analysis and Development, 2020<div class="description">Estácio School</div>',
    "education-senac":
      '<i class="fa-solid fa-graduation-cap"> </i>System Development, 2013<div class="description">Senac</div>',
    "skills-nodejs": "Axios, Express, API Integration",
    "skills-cloud-engineering": "Cloud Engineering",
    "skills-database-title": "Databases",
    "skills-database": "MySQL, Mongo, Relational, Non-Relational",
    "skills-styling-title": "Styling",
    "skills-html5": "Javascript, Semantic web, etc.",
    "experiences-gap-title": "Full-Stack Web Developer",
    "experiences-gap-date": "Jul 2021 - Now • Uberlandia - MG, Brazil",
    "experiences-gap-about":
      "Development of new features and maintenance of the company's systems code, working on the entire back, front, database, and main cloud services stack on AWS.",
    "experiences-sindcom-date":
      "Jun 2017 - Jan 2018 • São José dos Campos - SP, Brazil",
    "experiences-sindcom-title": "Information Technology Intern",
    "experiences-sindcom-attributions":
      "<li>Provide support to employees</li><li>Perform company's computer maintenance</li><li>Answer and provide phone support to the company's customers</li><li>Provide maintenance on the systems and computers of partner and customer companies</li>",
    "experiences-canionti-title": "System developer freelance",
    "experiences-canionti-date":
      "Jan 2017 - Mar 2017 • São José dos Campos - SP, Brazil",
    "experiences-canionti-about":
      "I designed and developed systems as requested by third parties to the company. In one of my best projects as a freelance, I developed a table reservation system for a restaurant in C#.",
    "projects-km-about":
      "A cooking app about recipes, foods and drinks where you can sign up and save your favorite recipes. Ps.: Sign in with an 8 characters email and password",
    "projects-tb-about":
      "An interactive and digital menu to place orders at a fictional burger. Inspired by a famous brazilian burger called Jeronimo.",
    "projects-gw-about":
      "An app for financial management with a value converter from one currency to another using an external API. Ps.: Sign in with an 8 characters email and password",
    "projects-todo-title": "My To-do list",
    "projects-todo-about": "A simple to-do list management and creator app",
  },
  "pt-br": {
    "my-portfolio": "Wesley Paulo Ribeiro - Meu portfólio",
    experiences: "Experiência",
    projects: "Projetos",
    contact: "Contato",
    "data-profile": "Desenvolvedor Web Full-Stack",
    "biography-title": "Biografia",
    "biography-text1":
      'Me chamo Wesley Paulo Ribeiro, residente de São José dos Campos, interior de SP. Atualmente sou <strong data-lang-str="biography-current-job">Desenvolvedor Web Full-Stack</strong> na GAP Sistemas, me formei em Análise e Desenvolvimento de Sistemas pela faculdade Estácio no primeiro semestre de 2020, e conclui um curso de Desenvolvimento Full Stack pela escola Trybe em 2021.',
    "biography-text2":
      "Amo a área de desenvolvimento de sistemas desde a minha adolescência quando pensava que me tornaria simplesmente um hacker quando aprendesse a programar! Comecei estudando por conta com alguns blogs na internet e alguns livros, desenvolvi pequenos aplicativos em Python. Em 2012 fiz meu primeiro curso na área, Curso técnico em Informática pelo Senac.",
    "biography-text3":
      "Sou uma pessoa comprometida, séria no que faz e paciente. Buscando sempre meu desenvolvimento pessoal e profissional.",
    "biography-current-job": "Desenvolvedor Web Full-Stack",
    "social-profile": "<a href='mailto:wesley_paulo00@hotmail.com' target='_blank'><i class='fa-solid fa-envelope'></i></a><a href='https://github.com/wesleypribeiro#pt' target='_blank'><i class='fa-brands fa-github'></i></a><a href='https://www.linkedin.com/in/wesleypribeiro' target='_blank'><i class='fa-brands fa-linkedin'></i></a><a href='https://wesleypribeiro.github.io/WesleyPaulo_Resume_PT.pdf' target='_blank'><img src='img/cv3.png'></a>",
    "interests-title": "Interesses",
    "interests-dev-back": "Desenvolvimento Back-end",
    "interests-dev-front": "Desenvolvimento Front-end",
    "education-title": "Formação",
    "education-trybe":
      '<i class="fa-solid fa-graduation-cap"> </i>Desenvolvimento Full-Stack, 2021<div class="description">Trybe</div>',
    "education-estacio":
      '<i class="fa-solid fa-graduation-cap"> </i>Análise e Desenv. de Sistemas, 2020<div class="description">Faculdade Estácio</div>',
    "education-senac":
      '<i class="fa-solid fa-graduation-cap"> </i>Desenvolvimento de Sistemas, 2013<div class="description">Senac</div>',
    "skills-nodejs": "Axios, Express, Integração de APIs",
    "skills-cloud-engineering": "Serviços na nuvem",
    "skills-database-title": "Banco de dados",
    "skills-database": "MySQL, Mongo, Relacionais, Não relacionais",
    "skills-styling-title": "Estilização de páginas",
    "skills-html5": "Javascript, Web semantica, etc.",
    "experiences-gap-title": "Desenvolvedor Web Full-Stack",
    "experiences-gap-date": "Jul 2021 - Presente • Uberlandia - MG",
    "experiences-gap-about":
      "Desenvolvimento de novas features e manutenção no código dos sistemas da empresa, atuando em todo o stack de back, front, banco de dados e principais serviços em nuvem da AWS.",
    "experiences-sindcom-date":
      "Jun 2017 - Jan 2018 • São José dos Campos - SP",
    "experiences-sindcom-title": "Estagiário de TI",
    "experiences-sindcom-attributions":
      "<li>Prestar suporte aos funcionários</li><li>Fazer manutenção nos computadores da empresa</li><li>Atender e prestar suporte por telefone aos clientes da empresa</li><li>Prestar manutenção nos sistemas e máquinas das empresas parceiras e clientes</li>",
    "experiences-canionti-title": "Desenvolvedor freelance",
    "experiences-canionti-date":
      "Jan 2017 - Mar 2017 • São José dos Campos - SP",
    "experiences-canionti-about":
      "Projetei e desenvolvi sistemas conforme pedido de terceiros a empresa. Em destaque, desenvolvi um sistema de reserva de mesas para restaurante em C#",
    "projects-km-about":
      "Um aplicativo de receitas de comidas e bebidas onde é possível, criar sua conta e armazenar as receitas favoritas e feitas. Ps.: Logar com email e senha ficticia de 8 caracteres",
    "projects-tb-about":
      "Uma comanda digital e interativa para fazer pedidos em uma hamburgueria fictícia. Inspirada pelo totem da Hamburgueria Jeronimo",
    "projects-gw-about":
      "Um sistema para gerenciamento de finanças com conversor de valor de uma moeda para outra se utlizando de uma API externa. Ps.: Logar com email e senha ficticia de 8 caracteres",
    "projects-todo-title": "Minha Lista de Tarefas",
    "projects-todo-about":
      "Um simples aplicativo gerenciador e de criação de lista de tarefas",
  },
  es: {
    "my-portfolio": "Wesley Paulo Ribeiro - Mi portafolio",
    experiences: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    "data-profile": "Desarrollador Web Full-Stack",
    "biography-title": "Biografía",
    "biography-text1":
      'Me llamo Wesley Paulo Ribeiro, residente de São José dos Campos, interior de SP. Actualmente soy <strong data-lang-str="biography-current-job">Desarrollador Web Full-Stack</strong> en GAP Sistemas, me gradué en Análisis y Desarrollo de Sistemas en la universidad Estácio en el primer semestre de 2020, y completé un curso de Desarrollo Full Stack en la escuela Trybe en 2021.',
    "biography-text2":
      "Me encanta el área de desarrollo de sistemas desde mi adolescencia, cuando pensaba que me convertiría simplemente en un hacker cuando aprendiera a programar. Empecé a estudiar por mi cuenta con algunos blogs en internet y algunos libros, desarrollé pequeñas aplicaciones en Python. En 2012 hice mi primer curso en el área, Curso técnico en Informática en el Senac.",
    "biography-text3":
      "Sou uma pessoa comprometida, séria no que faz e paciente. Buscando sempre meu desenvolvimento pessoal e profissional.",
    "biography-current-job": "Desarrollador Web Full-Stack",
    "social-profile": "<a href='mailto:wesley_paulo00@hotmail.com' target='_blank'><i class='fa-solid fa-envelope'></i></a><a href='https://github.com/wesleypribeiro#es' target='_blank'><i class='fa-brands fa-github'></i></a><a href='https://www.linkedin.com/in/wesleypribeiro/?locale=es_ES' target='_blank'><i class='fa-brands fa-linkedin'></i></a><a href='https://wesleypribeiro.github.io/WesleyPaulo_Resume_ES.pdf' target='_blank'><img src='img/cv3.png'></a>",
    "interests-title": "Intereses",
    "interests-dev-back": "Desarrollo Back-end",
    "interests-dev-front": "Desarrollo Front-end",
    "education-title": "Formación",
    "education-trybe":
      '<i class="fa-solid fa-graduation-cap"> </i>Desarrollo Full-Stack, 2021<div class="description">Trybe</div>',
    "education-estacio":
      '<i class="fa-solid fa-graduation-cap"> </i>Análisis y Desarrollo de Sistemas, 2020<div class="description">Universidad Estácio</div>',
    "education-senac":
      '<i class="fa-solid fa-graduation-cap"> </i>Desarrollo de Sistemas, 2013<div class="description">Senac</div>',
    "skills-nodejs": "Axios, Express, Integración de APIs",
    "skills-cloud-engineering": "Servicios en la nube",
    "skills-database-title": "Base de datos",
    "skills-database": "MySQL, Mongo, Relacionales, No relacionales",
    "skills-styling-title": "Estilización de páginas",
    "skills-html5": "Javascript, Web semántica, etc.",
    "experiences-gap-title": "Desarrollador Web Full-Stack",
    "experiences-gap-date": "Jul 2021 - Presente • Uberlandia - MG, Brasil",
    "experiences-gap-about":
      "Desarrollo de nuevas características y mantenimiento del código de los sistemas de la empresa, trabajando en todo el stack de back, front, base de datos y principales servicios en la nube de AWS.",
    "experiences-sindcom-date":
      "Jun 2017 - Ene 2018 • São José dos Campos - SP, Brasil",
    "experiences-sindcom-title": "Estagiario de TI",
    "experiences-sindcom-attributions":
      "<li>Prestar soporte a los empleados</li> <li>Hacer mantenimiento en las computadoras de la empresa</li> <li>Atender y prestar soporte por teléfono a los clientes de la empresa</li> <li>Prestar mantenimiento en los sistemas y máquinas de las empresas socias y clientes</li>",
    "experiences-canionti-title": "Desarrollador freelance",
    "experiences-canionti-date":
      "Ene 2017 - Mar 2017 • São José dos Campos - SP, Brasil",
    "experiences-canionti-about":
      "Proyecté y desarrollé sistemas según el pedido de terceros a la empresa. En particular, desarrollé un sistema de reserva de mesas para restaurante en C#.",
    "projects-km-about":
      "Una aplicación de recetas de comidas y bebidas donde es posible crear su cuenta y almacenar las recetas favoritas y hechas. Nota: Iniciar sesión con correo electrónico y contraseña ficticia de 8 caracteres.",
    "projects-tb-about":
      "Un menú digital e interactivo para hacer pedidos en una hamburguesería ficticia. Inspirado en el totem de una hamburguesería famosa en Brasil llamada Jeronimo.",
    "projects-gw-about":
      "Un sistema para la gestión de finanzas con un conversor de valor de una moneda a otra utilizando una API externa. Nota: Iniciar sesión con correo electrónico y contraseña ficticia de 8 caracteres.",
    "projects-todo-title": "Mi lista de tareas",
    "projects-todo-about":
      "Una simple aplicación de gestión y creación de lista de tareas.",
  },
};

const translate = (lang = null) => {
  const contactName = document.getElementById("contact-name");
  const contactEmail = document.getElementById("contact-email");
  const contactMessage = document.getElementById("contact-message");
  const contactSend = document.getElementById("contact-send");
  let btnTranslate = document.querySelectorAll("[name=btn-translate]");

  if (lang === null) {
    lang = DEFAULT_LANG;
  }

  let DEFAULT_LANG_LENGTH = Object.keys(TRANSLATIONS[DEFAULT_LANG]).length;
  if (TRANSLATIONS[lang]) {
    DATA_LANG_ELEMENTS.forEach((el) => {
      let STR = el.getAttribute("data-lang-str");
      if (TRANSLATIONS[lang][STR]) {
        el.innerHTML = TRANSLATIONS[lang][STR];
      }
    });

    if (lang === "en") {
      let btnCode = document.querySelectorAll(".btn-links a");

      contactName.placeholder = "Name";
      contactEmail.placeholder = "Email";
      contactMessage.placeholder = "Message";
      contactSend.innerText = "Send";

      btnTranslate[0].className = "active-language";
      btnTranslate[1].className = "";
      btnTranslate[2].className = "";

      btnCode.forEach((t) => {
        t.innerHTML = '<i class="fa-brands fa-github"></i> Code</a>';
      });
    }

    if (lang === "pt-br") {
      let btnCode = document.querySelectorAll(".btn-links a");

      contactName.placeholder = "Nome";
      contactEmail.placeholder = "E-mail";
      contactMessage.placeholder = "Mensagem";
      contactSend.innerText = "Enviar";

      btnTranslate[0].className = "";
      btnTranslate[1].className = "active-language";
      btnTranslate[2].className = "";

      btnCode.forEach((t) => {
        t.innerHTML = '<i class="fa-brands fa-github"></i> Código</a>';
      });
    }

    if (lang === "es") {
      let btnCode = document.querySelectorAll(".btn-links a");

      contactName.placeholder = "Nombre";
      contactEmail.placeholder = "Correo electrónico";
      contactMessage.placeholder = "Mensaje";
      contactSend.innerText = "Enviar";

      btnTranslate[0].className = "";
      btnTranslate[1].className = "";
      btnTranslate[2].className = "active-language";

      btnCode.forEach((t) => {
        t.innerHTML = '<i class="fa-brands fa-github"></i> Código</a>';
      });
    }

    const activeLanguage = document.querySelector(".active-language");
    const selectedLanguage = document.getElementById("selected-language");
    selectedLanguage.innerText = activeLanguage.innerText;
  }
};

let BTNS_TRANSLATE = document.querySelectorAll("[name=btn-translate]");
BTNS_TRANSLATE.forEach((btn) => {
  btn.addEventListener("click", () => {
    translate(btn.getAttribute("data-lang"));
  });
});

translate();
