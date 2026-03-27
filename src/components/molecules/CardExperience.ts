class CardExperience extends HTMLElement {
  connectedCallback() {
    this.render();
    this.loadStyles();
  }

  private loadStyles(): void {
    if (!document.getElementById('card-experience-styles')) {
      const link = document.createElement('link');
      link.id = 'card-experience-styles';
      link.rel = 'stylesheet';
      link.href = './styles/molecules/CardExperience.css';
      document.head.appendChild(link);
    }
  }

  private render() {
    const localName = this.getAttribute("localName") || "";
    const localLink = this.getAttribute("localLink") || "";
    const localCargo = this.getAttribute("localCargo") || "";
    const localAcoes = this.getAttribute("localAcoes") || "";
    const date = this.getAttribute("date") || "";

    this.innerHTML = `
      <section class="card-experience" aria-label="Projeto desenvolvido em ${localName}">
        <div class="card-experience__header">
          <a href="${localLink}" target="_blank" rel="noopener">@${localName}</a>
          <p>${date}</p>
        </div>
        <div class="card-experience__body">
          <h2 class="card-experience__title">${localCargo}</h2>
          <div class="card-experience__actions">
            ${localAcoes}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("card-experience", CardExperience);

