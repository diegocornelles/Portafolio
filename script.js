// Traducciones, inits anteriores...

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initThemeToggle();
  initSmoothScroll();
  initMatrixAvatar();
  initProjectFilter();

  // Aquí el formulario terminal:
  const form = document.getElementById('terminal-cmd-form');
  const input = document.getElementById('terminal-cmd-input');
  if(form && input){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const cmd = input.value.trim().toLowerCase();
      if(cmd === "cv" || cmd === "open cv" || cmd === "cv.html"){
        window.location.href = "cv.html";
      } else {
        input.value = "";
        input.placeholder = "Comando no válido";
        setTimeout(() => input.placeholder = "Escribe un comando...", 1200);
      }
    });
  }

  changeLanguage('es');
});

// Función initProjectFilter que habilita los filtros de proyectos
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tech = btn.dataset.tech;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
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
