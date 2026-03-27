"use strict";
class GridIcon extends HTMLElement {
    static get observedAttributes() {
        return ['titleGrid', 'src', 'label'];
    }
    constructor() {
        super();
        this.titleGrid = "";
        this.src = "";
        this.label = "";
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }
    connectedCallback() {
        this.render();
        this.loadStyles();
    }
    loadStyles() {
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
