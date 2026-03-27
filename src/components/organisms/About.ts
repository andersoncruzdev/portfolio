class About extends HTMLElement {
  connectedCallback() {
    this.render();
    this.loadStyles();
  }

  private loadStyles(): void {
    if (!document.getElementById('about-styles')) {
      const link = document.createElement('link');
      link.id = 'about-styles';
      link.rel = 'stylesheet';
      link.href = './styles/organisms/About.css';
      document.head.appendChild(link);
    }
  }

  private render() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anosExperiencia = anoAtual - 2023;

    this.innerHTML = `
      <section class="container py-5" aria-label="Sobre">
        <div class="row justify-content-start text-start">
          <div class="col-lg-8">
            <div class="mb-4">
              <span class="about__link"><strong>Sobre</strong></span>
              <h2 class="display-5 fw-bold text-white">Desenvolvedor Full Stack</h2>
            </div>
            <p class="lead text-light">
              Possuo <strong>${anosExperiencia}</strong> ano${anosExperiencia > 1 ? 's' : ''} de experiência em desenvolvimento web, atuando tanto no backend quanto no frontend. Crio soluções modernas e responsivas utilizando TypeScript, React, Next.js, Nest.js e Node.js.
            </p>
            <a href="#projetos" class="about__link fw-bold">
              Ver meus trabalhos
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("about-component", About);

