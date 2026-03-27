import '../molecules/Presentation.js';
import '../molecules/ContactLinks.js';
import './About.js';

class Header extends HTMLElement {
  connectedCallback() {
    this.render();
    this.loadStyles();
  }

  private loadStyles(): void {
    if (!document.getElementById('header-styles')) {
      const link = document.createElement('link');
      link.id = 'header-styles';
      link.rel = 'stylesheet';
      link.href = './styles/organisms/Header.css';
      document.head.appendChild(link);
    }
  }

  private render() {
    this.innerHTML = `
      <section id="container__header" class="header__container vw-100 vh-100 d-flex align-items-center" aria-label="Informações">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column justify-content-center">
              <presentation-component titulo="Anderson"></presentation-component>
              <contatos-component></contatos-component>
            </div>

            <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
              <about-component></about-component>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("header-component", Header);

