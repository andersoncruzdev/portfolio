class GridIcon extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['titleGrid', 'src', 'label'];
  }

  private titleGrid: string = "";
  private src: string = "";
  private label: string = "";

  constructor() {
    super();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      (this as any)[name] = newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.render();
    this.loadStyles();
  }

  private loadStyles(): void {
    if (!document.getElementById('grid-icon-styles')) {
      const link = document.createElement('link');
      link.id = 'grid-icon-styles';
      link.rel = 'stylesheet';
      link.href = './styles/atoms/GridIcon.css';
      document.head.appendChild(link);
    }
  }

  render() {
    this.innerHTML = `
      <div class="grid-icon">
        <img src="${this.src}" alt="${this.label}" class="grid-icon__image" />
        <p class="grid-icon__label">${this.label}</p>
      </div>
    `;
  }
}

customElements.define("grid-icons", GridIcon);

