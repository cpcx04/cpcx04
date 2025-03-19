/**
 * Script para alternar el idioma del README entre inglés y español
 */

// Contenido en español
const spanishContent = {
  aboutMe: "Sobre mí",
  role: "Full-Stack Developer",
  location: "Sevilla, España",
  technologies: "technologies: {\n    frontend: [\"React\", \"Next.js\", \"Angular\", \"jQuery\"],\n    mobile: [\"React Native\", \"Flutter\", \"Android\"],\n    backend: [\"Node.js\", \"Express\", \"Spring Boot\", \"Hibernate\"],\n    databases: [\"MySQL\", \"MongoDB\", \"PostgreSQL\"],\n    devOps: [\"Docker\", \"Git\", \"CI/CD\"],\n    other: [\"Google Maps API\", \"RESTful APIs\", \"Responsive Design\"]\n  }",
  currentFocus: "Desarrollando landing pages de alta conversión",
  funFact: "Creo que un café bien preparado es la base de un código limpio",
  experience: "Experiencia Profesional",
  developer: "Desarrollador de Aplicaciones Para uso Médico",
  developerDesc: "Desarrollando soluciones tecnológicas para el sector sanitario, mejorando la eficiencia de procesos y la experiencia del paciente y el clínico.",
  collaborator: "Colaborador en Proyectos Digitales",
  collaboratorDesc: "Trabajo en colaboración para el desarrollo de soluciones empresariales innovadoras y proyectos de transformación digital.",
  projects: "Proyectos Destacados",
  viewProject: "Ver Proyecto",
  ecommerceDesc: "E-commerce completo desarrollado con las últimas tecnologías del mercado para ofrecer una experiencia de compra optimizada.",
  platformDesc: "Plataforma diseñada para el crecimiento empresarial con interfaces modernas y experiencia de usuario optimizada.",
  techStack: "Tech Stack",
  philosophy: "Mi Filosofía de Desarrollo",
  think: "Pensar",
  thinkDesc: "Analizo cada proyecto para crear soluciones escalables que resuelvan problemas reales.",
  create: "Crear",
  createDesc: "Implemento código limpio y eficiente siguiendo las mejores prácticas de la industria.",
  evolve: "Evolucionar",
  evolveDesc: "Mantengo un aprendizaje continuo para incorporar nuevas tecnologías y metodologías.",
  contact: "Contáctame",
  toggleLanguage: "Cambiar a Español"
};

// Contenido en inglés
const englishContent = {
  aboutMe: "About me",
  role: "Full-Stack Developer",
  location: "Seville, Spain",
  technologies: "technologies: {\n    frontend: [\"React\", \"Next.js\", \"Angular\", \"jQuery\"],\n    mobile: [\"React Native\", \"Flutter\", \"Android\"],\n    backend: [\"Node.js\", \"Express\", \"Spring Boot\", \"Hibernate\"],\n    databases: [\"MySQL\", \"MongoDB\", \"PostgreSQL\"],\n    devOps: [\"Docker\", \"Git\", \"CI/CD\"],\n    other: [\"Google Maps API\", \"RESTful APIs\", \"Responsive Design\"]\n  }",
  currentFocus: "Developing high-conversion landing pages",
  funFact: "I believe a well-made coffee is the foundation of clean code",
  experience: "Professional Experience",
  developer: "Medical Application Developer",
  developerDesc: "Developing technological solutions for the healthcare sector, improving process efficiency and the patient and clinical experience.",
  collaborator: "Digital Projects Collaborator",
  collaboratorDesc: "Working in collaboration for the development of innovative business solutions and digital transformation projects.",
  projects: "Featured Projects",
  viewProject: "View Project",
  ecommerceDesc: "Complete e-commerce developed with the latest market technologies to offer an optimized shopping experience.",
  platformDesc: "Platform designed for business growth with modern interfaces and optimized user experience.",
  techStack: "Tech Stack",
  philosophy: "My Development Philosophy",
  think: "Think",
  thinkDesc: "I analyze each project to create scalable solutions that solve real problems.",
  create: "Create",
  createDesc: "I implement clean and efficient code following industry best practices.",
  evolve: "Evolve",
  evolveDesc: "I maintain continuous learning to incorporate new technologies and methodologies.",
  contact: "Contact Me",
  toggleLanguage: "Cambiar a Español"
};

// Iniciar con inglés por defecto
let currentLanguage = 'en';

// Función para aplicar un idioma específico
function applyLanguage(language) {
  const content = language === 'es' ? spanishContent : englishContent;
  
  // Actualizar elementos en el DOM
  document.getElementById('about-me').innerText = content.aboutMe;
  document.getElementById('role').innerText = content.role;
  document.getElementById('location').innerText = content.location;
  document.getElementById('technologies').innerHTML = content.technologies;
  document.getElementById('current-focus').innerText = content.currentFocus;
  document.getElementById('fun-fact').innerText = content.funFact;
  document.getElementById('experience').innerText = content.experience;
  document.getElementById('developer-title').innerText = content.developer;
  document.getElementById('developer-desc').innerText = content.developerDesc;
  document.getElementById('collaborator-title').innerText = content.collaborator;
  document.getElementById('collaborator-desc').innerText = content.collaboratorDesc;
  document.getElementById('projects').innerText = content.projects;
  document.querySelectorAll('.view-project').forEach(el => el.innerText = content.viewProject);
  document.getElementById('ecommerce-desc').innerText = content.ecommerceDesc;
  document.getElementById('platform-desc').innerText = content.platformDesc;
  document.getElementById('tech-stack').innerText = content.techStack;
  document.getElementById('philosophy').innerText = content.philosophy;
  document.getElementById('think').innerText = content.think;
  document.getElementById('think-desc').innerText = content.thinkDesc;
  document.getElementById('create').innerText = content.create;
  document.getElementById('create-desc').innerText = content.createDesc;
  document.getElementById('evolve').innerText = content.evolve;
  document.getElementById('evolve-desc').innerText = content.evolveDesc;
  document.getElementById('contact').innerText = content.contact;
  document.getElementById('toggle-language').innerText = content.toggleLanguage;
}

// Función para cambiar el idioma
function toggleLanguage() {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  applyLanguage(currentLanguage);
}

// Añadir botón de cambio de idioma al cargar la página y asignar IDs
document.addEventListener('DOMContentLoaded', function() {
  // Agregar el botón de idioma
  const header = document.querySelector('div[align="center"]:first-of-type');
  
  const languageButton = document.createElement('button');
  languageButton.id = 'toggle-language';
  languageButton.innerText = 'Cambiar a Español';
  languageButton.className = 'language-toggle-btn';
  languageButton.onclick = toggleLanguage;
  
  header.appendChild(languageButton);
  
  // Agregar estilos para el botón
  const style = document.createElement('style');
  style.textContent = `
    .language-toggle-btn {
      background: linear-gradient(135deg, #3498db, #8e44ad);
      color: white;
      border: none;
      border-radius: 20px;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
      transition: all 0.3s ease;
    }
    
    .language-toggle-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
  
  // Añadir IDs a los elementos
  const addIds = () => {
    // Encabezado "Sobre mí" / "About me"
    document.querySelector('h2').id = 'about-me';
    
    // Objeto JavaScript con la info personal
    const codeBlock = document.querySelector('pre code');
    if (codeBlock) {
      const lines = codeBlock.innerHTML.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('role:')) {
          lines[i] = lines[i].replace('role:', '<span id="role">role:</span>');
        } else if (lines[i].includes('location:')) {
          lines[i] = lines[i].replace('location:', '<span id="location">location:</span>');
        } else if (lines[i].includes('technologies:')) {
          lines[i] = lines[i].replace('technologies:', '<span id="technologies">technologies:</span>');
        } else if (lines[i].includes('currentFocus:')) {
          lines[i] = lines[i].replace('currentFocus:', '<span id="current-focus">currentFocus:</span>');
        } else if (lines[i].includes('funFact:')) {
          lines[i] = lines[i].replace('funFact:', '<span id="fun-fact">funFact:</span>');
        }
      }
      codeBlock.innerHTML = lines.join('\n');
    }
    
    // Secciones principales
    const headings = document.querySelectorAll('h2');
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].textContent.includes('Experiencia Profesional')) {
        headings[i].id = 'experience';
      } else if (headings[i].textContent.includes('Proyectos Destacados')) {
        headings[i].id = 'projects';
      } else if (headings[i].textContent.includes('Tech Stack')) {
        headings[i].id = 'tech-stack';
      } else if (headings[i].textContent.includes('Mi Filosofía')) {
        headings[i].id = 'philosophy';
      } else if (headings[i].textContent.includes('Contáctame')) {
        headings[i].id = 'contact';
      }
    }
    
    // Experiencia profesional
    const expTitles = document.querySelectorAll('h3');
    for (let i = 0; i < expTitles.length; i++) {
      if (expTitles[i].textContent.includes('Hospital Virgen del Rocío')) {
        expTitles[i].nextElementSibling.id = 'developer-title';
        expTitles[i].nextElementSibling.nextElementSibling.id = 'developer-desc';
      } else if (expTitles[i].textContent.includes('Rise2Top') && !expTitles[i].textContent.includes('La Tienda')) {
        expTitles[i].nextElementSibling.id = 'collaborator-title';
        expTitles[i].nextElementSibling.nextElementSibling.id = 'collaborator-desc';
      }
    }
    
    // Proyectos
    const projectLinks = document.querySelectorAll('img[alt="Ver Proyecto"]');
    for (let i = 0; i < projectLinks.length; i++) {
      projectLinks[i].classList.add('view-project');
    }
    
    const projectTitles = document.querySelectorAll('h3[align="center"]');
    for (let i = 0; i < projectTitles.length; i++) {
      if (projectTitles[i].textContent.includes('La Tienda')) {
        const desc = projectTitles[i].parentElement.querySelector('p strong');
        if (desc) desc.id = 'ecommerce-desc';
      } else if (projectTitles[i].textContent.includes('Rise2Top')) {
        const desc = projectTitles[i].parentElement.querySelector('p strong');
        if (desc) desc.id = 'platform-desc';
      }
    }
    
    // Filosofía
    const philoTitles = document.querySelectorAll('td h3');
    for (let i = 0; i < philoTitles.length; i++) {
      if (philoTitles[i].textContent.includes('Pensar')) {
        philoTitles[i].id = 'think';
        philoTitles[i].nextElementSibling.id = 'think-desc';
      } else if (philoTitles[i].textContent.includes('Crear')) {
        philoTitles[i].id = 'create';
        philoTitles[i].nextElementSibling.id = 'create-desc';
      } else if (philoTitles[i].textContent.includes('Evolucionar')) {
        philoTitles[i].id = 'evolve';
        philoTitles[i].nextElementSibling.id = 'evolve-desc';
      }
    }
  };
  
  // Asignar IDs y aplicar el inglés por defecto
  addIds();
  // Después de agregar los IDs, cambiamos al inglés
  applyLanguage('en');
});
