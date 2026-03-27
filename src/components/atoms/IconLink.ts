class IconLink extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['src', 'href'];
  }

  private src: string = '';
  private href: string = '#';

  constructor() {
    super();
  }

  connectedCallback(): void {
    this.render();
    this.loadStyles();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return;

    switch (name) {
      case 'src':
        this.src = newValue ?? '';
        break;
      case 'href':
        this.href = newValue ?? '#';
        break;
    }

    this.render();
  }

  private loadStyles(): void {
    if (!document.getElementById('icon-link-styles')) {
      const link = document.createElement('link');
      link.id = 'icon-link-styles';
      link.rel = 'stylesheet';
      link.href = './styles/atoms/IconLink.css';
      document.head.appendChild(link);
    }
  }

  private render(): void {
    this.innerHTML = `
      <a href="${this.href}" target="_blank" rel="noopener noreferrer"
        class="btn btn-outline-secondary rounded-circle d-inline-flex align-items-center justify-content-center p-2 icon-link"
      >
        <img src="${this.src}" alt="Ícone" />
      </a>
    `;
  }
}

customElements.define('icon-link', IconLink);

