// Recupera o estado do dark mode do localStorage ao carregar a página
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
const icon = document.getElementById('icon');

// Aplica o estado inicial ao carregar a página
document.body.classList.toggle('dark-mode', isDarkModeEnabled);

// Atualiza o ícone com base no estado inicial
if (isDarkModeEnabled) {
    icon.src = 'imagens/sol.png';
} else {
    icon.src = 'imagens/lua.png';
}

// Função para alternar o dark mode
icon.onclick = function () {
    // Alterna a classe dark-mode no corpo do documento
    document.body.classList.toggle('dark-mode');

    // Atualiza o estado do dark mode no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        icon.src = 'imagens/sol.png';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        icon.src = 'imagens/lua.png';
    }
};

// Menu Mobile//


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

//Fim MenuMobile// 