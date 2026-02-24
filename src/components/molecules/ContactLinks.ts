import '../atoms/IconLink.js';

class ContactLinks extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  private render() {
    const icons = [
      { src: "./icons/github.png", href: "https://github.com/andersoncruzdev" },
      { src: "./icons/gmail.png", href: "mailto:andersong.pereiracruz@gmail.com" },
      { src: "./icons/linkedin.png", href: "https://www.linkedin.com/in/anderson-gpc" }
    ];

    this.innerHTML = '';

    icons.forEach((icon) => {
      const iconElement = document.createElement("icon-link");
      iconElement.setAttribute("src", icon.src);
      iconElement.setAttribute("href", icon.href);
      iconElement.setAttribute("aria-label", icon.href.replace("./icons", ""));
      this.appendChild(iconElement);
    });
  }
}

customElements.define("contatos-component", ContactLinks);

