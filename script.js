// ============================================
// TRADUCCIONES
// ============================================
const translations = {
  es: {
    'hero.terminal.whoami': 'Diego Cornelles - Estudiante de Ciberseguridad',
    'hero.subtitle': 'Estudiante de Ciberseguridad | En Prácticas',
    'hero.description': 'Apasionado por la seguridad informática, el pentesting y la protección de sistemas. Explorando el mundo de la ciberseguridad con creatividad y profesionalismo.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.contact': 'Contactar',
    
    'about.title': 'Sobre Mí',
    'about.status': 'Disponible para oportunidades',
    'about.bio.p1': '¡Hola! Soy Diego, estudiante de segundo año de ASIX en el Instituto Tecnológico de Barcelona. Actualmente estoy realizando prácticas en Devoteam, donde aplico mis conocimientos en ciberseguridad y administración de sistemas.',
    'about.bio.p2': 'Mi recorrido empezó con el grado medio de SMR, donde descubrí mi pasión por la seguridad informática. Ahora me especializo en pentesting, hardening de sistemas y automatización con scripts.',
    'about.bio.p3': 'Me encanta resolver CTFs, explorar vulnerabilidades y aprender constantemente sobre nuevas técnicas de ataque y defensa. Mi objetivo es convertirme en un experto en ciberseguridad ofensiva.',
    'about.education': 'Formación',
    'about.current': 'Actualmente',
    'about.location': 'Ubicación',
    
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologías y herramientas que domino',
    'skills.category.pentest': 'Pentesting & Seguridad',
    'skills.category.network': 'Redes & Infraestructura',
    'skills.category.systems': 'Sistemas Operativos',
    'skills.category.programming': 'Programación & Scripting',
    'skills.certs.title': '📜 Certificaciones',
    'skills.certs.smr': 'Técnico en Sistemas Microinformáticos y Redes (SMR)',
    'skills.certs.asix': 'Técnico Superior en Administración de Sistemas (ASIX) - En curso',
    
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Contenido en desarrollo...',
    'contact.title': 'Contacto',
    'contact.subtitle': 'Contenido en desarrollo...'
  },
  en: {
    'hero.terminal.whoami': 'Diego Cornelles - Cybersecurity Student',
    'hero.subtitle': 'Cybersecurity Student | Internship',
    'hero.description': 'Passionate about information security, pentesting and system protection. Exploring the world of cybersecurity with creativity and professionalism.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact',
    
    'about.title': 'About Me',
    'about.status': 'Available for opportunities',
    'about.bio.p1': 'Hi! I\'m Diego, a second-year ASIX student at the Technological Institute of Barcelona. I\'m currently doing an internship at Devoteam, where I apply my knowledge in cybersecurity and systems administration.',
    'about.bio.p2': 'My journey started with the SMR vocational training, where I discovered my passion for information security. Now I specialize in pentesting, system hardening and automation with scripts.',
    'about.bio.p3': 'I love solving CTFs, exploring vulnerabilities and constantly learning about new attack and defense techniques. My goal is to become an expert in offensive cybersecurity.',
    'about.education': 'Education',
    'about.current': 'Currently',
    'about.location': 'Location',
    
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I master',
    'skills.category.pentest': 'Pentesting & Security',
    'skills.category.network': 'Networks & Infrastructure',
    'skills.category.systems': 'Operating Systems',
    'skills.category.programming': 'Programming & Scripting',
    'skills.certs.title': '📜 Certifications',
    'skills.certs.smr': 'Technician in Microcomputer Systems and Networks (SMR)',
    'skills.certs.asix': 'Senior Technician in Systems Administration (ASIX) - In progress',
    
    'projects.title': 'Projects',
    'projects.subtitle': 'Content in development...',
    'contact.title': 'Contact',
    'contact.subtitle': 'Content in development...'
  },
  ca: {
    'hero.terminal.whoami': 'Diego Cornelles - Estudiant de Ciberseguretat',
    'hero.subtitle': 'Estudiant de Ciberseguretat | En Pràctiques',
    'hero.description': 'Apassionat per la seguretat informàtica, el pentesting i la protecció de sistemes. Explorant el món de la ciberseguretat amb creativitat i professionalisme.',
    'hero.cta.projects': 'Veure Projectes',
    'hero.cta.contact': 'Contactar',
    
    'about.title': 'Sobre Mi',
    'about.status': 'Disponible per a oportunitats',
    'about.bio.p1': 'Hola! Sóc en Diego, estudiant de segon any d\'ASIX a l\'Institut Tecnològic de Barcelona. Actualment estic fent pràctiques a Devoteam, on aplico els meus coneixements en ciberseguretat i administració de sistemes.',
    'about.bio.p2': 'El meu recorregut va començar amb el grau mitjà d\'SMR, on vaig descobrir la meva passió per la seguretat informàtica. Ara m\'especialitzo en pentesting, hardening de sistemes i automatització amb scripts.',
    'about.bio.p3': 'M\'encanta resoldre CTFs, explorar vulnerabilitats i aprendre constantment sobre noves tècniques d\'atac i defensa. El meu objectiu és convertir-me en un expert en ciberseguretat ofensiva.',
    'about.education': 'Formació',
    'about.current': 'Actualment',
    'about.location': 'Ubicació',
    
    'skills.title': 'Habilitats Tècniques',
    'skills.subtitle': 'Tecnologies i eines que domino',
    'skills.category.pentest': 'Pentesting i Seguretat',
    'skills.category.network': 'Xarxes i Infraestructura',
    'skills.category.systems': 'Sistemes Operatius',
    'skills.category.programming': 'Programació i Scripting',
    'skills.certs.title': '📜 Certificacions',
    'skills.certs.smr': 'Tècnic en Sistemes Microinformàtics i Xarxes (SMR)',
    'skills.certs.asix': 'Tècnic Superior en Administració de Sistemes (ASIX) - En curs',
    
    'projects.title': 'Projectes',
    'projects.subtitle': 'Contingut en desenvolupament...',
    'contact.title': 'Contacte',
    'contact.subtitle': 'Contingut en desenvolupament...'
  }
};

// ============================================
// ESTADO GLOBAL
// ============================================
let currentLang = 'es';
let currentTheme = 'dark';

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initThemeToggle();
  initSmoothScroll();
  initMatrixAvatar();
  
  // Cargar idioma inicial
  changeLanguage('es');
});

// ============================================
// SELECTOR DE IDIOMA
// ============================================
function initLanguageSelector() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      changeLanguage(lang);
      
      // Actualizar botones activos
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function changeLanguage(lang) {
  currentLang = lang;
  
  // Actualizar todos los elementos con data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Actualizar el atributo lang del HTML
  document.documentElement.lang = lang;
}

// ============================================
// THEME TOGGLE (Dark/Light)
// ============================================
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Cambiar tema
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      document.documentElement.removeAttribute('data-theme');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Solo para enlaces internos válidos
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const offsetTop = target.offsetTop - 80; // 80px para el navbar fijo
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// ============================================
// MATRIX CANVAS ANIMATION
// ============================================
function initMatrixAvatar() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Ajustar tamaño del canvas
  canvas.width = 300;
  canvas.height = 300;
  
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('');
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];
  
  // Inicializar drops
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(20, 24, 20, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary').trim();
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 50);
}

// ============================================
// UTILIDADES
// ============================================

// Función helper para añadir más traducciones fácilmente
function addTranslations(newTranslations) {
  Object.keys(newTranslations).forEach(lang => {
    if (translations[lang]) {
      translations[lang] = { ...translations[lang], ...newTranslations[lang] };
    }
  });
}

// Exportar para usar en otros archivos si es necesario
window.portfolioApp = {
  changeLanguage,
  addTranslations,
  currentLang: () => currentLang,
  currentTheme: () => currentTheme
};
// ============================================
// FILTRO DE PROYECTOS POR TECNOLOGÍA
// ============================================
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tech = btn.dataset.tech;
      // Actualizar botón activo
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Mostrar/ocultar proyectos según filtro
      projectCards.forEach(card => {
        if (tech === "all" || card.dataset.tech.includes(tech)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', initProjectFilter);
