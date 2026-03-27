import '../molecules/ContactLinks.js';

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.loadStyles();
  }

  private loadStyles(): void {
    if (!document.getElementById('footer-styles')) {
      const link = document.createElement('link');
      link.id = 'footer-styles';
      link.rel = 'stylesheet';
      link.href = './styles/organisms/Footer.css';
      document.head.appendChild(link);
    }
  }

  private render() {
    this.innerHTML = `
      <footer class="footer__container container-fluid w-100 p-5 text-center d-flex flex-column gap-3">
        <p class="text-secondary footer__text text-white">Contato</p>
        <h2 class="footer__text text-white">Entre em contato</h2>
        <contatos-component></contatos-component>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);

