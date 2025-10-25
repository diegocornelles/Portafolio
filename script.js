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
