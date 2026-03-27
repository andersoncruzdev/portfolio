class Presentation extends HTMLElement {
  connectedCallback() {
    this.render();
    this.loadStyles();
  }

  private loadStyles(): void {
    if (!document.getElementById('presentation-styles')) {
      const link = document.createElement('link');
      link.id = 'presentation-styles';
      link.rel = 'stylesheet';
      link.href = './styles/molecules/Presentation.css';
      document.head.appendChild(link);
    }
  }

  private render() {
    const title = this.getAttribute('titulo') || '';

    this.innerHTML = `
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <section class="container py-3" aria-label="Cumprimentação">
        <h2 class="display-1 d-block d-md-none text-white">Olá!</h2>
        <h2 class="display-4 d-none d-md-block text-white">Olá!</h2>

        <h2 class="display-1 d-block d-md-none text-white">Eu sou
          <strong>${title}.</strong>
        </h2>

        <h2 class="display-4 d-none d-md-block text-white">Eu sou
          <strong>${title}.</strong>
        </h2>

        <div class="presentation__underline"></div>
      </section>
    `;
  }
}

customElements.define("presentation-component", Presentation);

