/**
 * Script para alternar el idioma del README entre español e inglés
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
  toggleLanguage: "Switch to English"
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

let currentLanguage = 'es';

// Función para cambiar el idioma
function toggleLanguage() {
  const content = currentLanguage === 'es' ? englishContent : spanishContent;
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  
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

// Añadir botón de cambio de idioma al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('div[align="center"]');
  
  const languageButton = document.createElement('button');
  languageButton.id = 'toggle-language';
  languageButton.innerText = 'Switch to English';
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
  
  // Añadir IDs a los elementos que necesitamos modificar
  document.querySelector('h2:contains("Sobre mí")').id = 'about-me';
  document.querySelector('const cristian = {').nextElementSibling.id = 'role';
  document.querySelector('role:').nextElementSibling.id = 'location';
  document.querySelector('technologies:').parentElement.id = 'technologies';
  document.querySelector('currentFocus:').nextElementSibling.id = 'current-focus';
  document.querySelector('funFact:').nextElementSibling.id = 'fun-fact';
  document.querySelector('h2:contains("Experiencia Profesional")').id = 'experience';
  document.querySelector('h3:contains("Hospital Virgen del Rocío")').nextElementSibling.id = 'developer-title';
  document.querySelector('#developer-title').nextElementSibling.id = 'developer-desc';
  document.querySelector('h3:contains("Rise2Top")').nextElementSibling.id = 'collaborator-title';
  document.querySelector('#collaborator-title').nextElementSibling.id = 'collaborator-desc';
  document.querySelector('h2:contains("Proyectos Destacados")').id = 'projects';
  document.querySelectorAll('img[alt="Ver Proyecto"]').forEach(el => el.parentElement.classList.add('view-project'));
  document.querySelector('h3:contains("La Tienda by Quiosco Sarita")').parentElement.querySelector('p strong').id = 'ecommerce-desc';
  document.querySelector('h3:contains("Rise2Top")').parentElement.querySelector('p strong').id = 'platform-desc';
  document.querySelector('h2:contains("Tech Stack")').id = 'tech-stack';
  document.querySelector('h2:contains("Mi Filosofía de Desarrollo")').id = 'philosophy';
  document.querySelector('h3:contains("Pensar")').id = 'think';
  document.querySelector('#think').nextElementSibling.id = 'think-desc';
  document.querySelector('h3:contains("Crear")').id = 'create';
  document.querySelector('#create').nextElementSibling.id = 'create-desc';
  document.querySelector('h3:contains("Evolucionar")').id = 'evolve';
  document.querySelector('#evolve').nextElementSibling.id = 'evolve-desc';
  document.querySelector('h2:contains("Contáctame")').id = 'contact';
});
