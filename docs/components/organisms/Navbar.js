"use strict";
class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        this.setup();
    }
    render() {
        this.shadowRoot.innerHTML = `
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link rel="stylesheet" href="./styles/organisms/Navbar.css" />
      <nav class="navbar">
        <img class="navbar__logo" src="./icons/logo.png" />
        <img class="navbar__open-btn navbar__options animate__animated" src="./icons/menu.png" />

        <section class="navbar__navigation animate__animated" aria-label="Opções de navegação">
          <img class="navbar__close-btn navbar__options animate__animated" src="./icons/close.png" />
  
          <ul class="navbar__list" aria-label="Lista de opção">
            <li class="active"><a href="#informacoes">Sobre</a><div class="underline"></div></li>
            <li><a href="#projetos">Projetos</a><div class="underline"></div></li>
            <li><a href="#experiencias">Experiências</a><div class="underline"></div></li>
            <li><a href="#conhecimentos">Conhecimentos</a><div class="underline"></div></li>
          </ul>
        </section>
      </nav>
    `;
    }
    setup() {
        const openBtn = this.shadowRoot.querySelector(".navbar__open-btn");
        const closeBtn = this.shadowRoot.querySelector(".navbar__close-btn");
        const menu = this.shadowRoot.querySelector(".navbar__navigation");
        const items = this.shadowRoot.querySelectorAll(".navbar__list li");
        items.forEach((item) => {
            item.addEventListener("click", () => {
                items.forEach((el) => el.classList.remove("active"));
                item.classList.add("active");
            });
        });
        // Abrir menu
        openBtn.addEventListener("click", () => {
            openBtn.classList.remove("animate__rotateIn");
            openBtn.classList.add("animate__rotateOut");
            openBtn.addEventListener("animationend", () => {
                menu.style.display = "flex";
                menu.classList.remove("animate__slideOutRight");
                menu.classList.add("animate__slideInRight");
            }, { once: true });
        });
        // Fechar menu
        closeBtn.addEventListener("click", () => {
            menu.classList.remove("animate__slideInRight");
            menu.classList.add("animate__slideOutRight");
            menu.addEventListener("animationend", () => {
                menu.style.display = "none";
                openBtn.classList.remove("animate__rotateOut");
                openBtn.classList.add("animate__rotateIn");
            }, { once: true });
        });
    }
}
customElements.define("navbar-component", Navbar);
