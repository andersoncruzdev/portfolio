import '../atoms/GridIcon.js';

class SkillsSection extends HTMLElement {
  connectedCallback() {
    this.render();
    this.loadStyles();
    this.skills();
  }

  private loadStyles(): void {
    if (!document.getElementById('skills-section-styles')) {
      const link = document.createElement('link');
      link.id = 'skills-section-styles';
      link.rel = 'stylesheet';
      link.href = '../../../docs/styles/organisms/SkillsSection.css';
      document.head.appendChild(link);
    }
  }

  private skills() {
    const containerSkills = this.querySelector("#container__skills");
    containerSkills!.innerHTML = '';

    const iconsSkills = {
      "Linguagens": [
        "JavaScript,./icons/javascript.png",
        "TypeScript,./icons/typescript.png",
        "HTML,./icons/html.png",
        "CSS,./icons/css.png",
        "Sass,./icons/sass.png",
      ],
      "Frameworks e Bibliotecas": [
        "React,./icons/react.png",
        "Next.js,./icons/nextjs.png",
        "Vue,./icons/vue.png",
        "Express,./icons/express.png",
        "Node.js,./icons/node.png",
        "Tailwind,./icons/tail.png",
        "Bootstrap,./icons/boot.png"
      ],
      "Bancos de Dados": [
        "MySQL,./icons/mysql.png"
      ],
      "Ferramentas e Outros": [
        "Git,./icons/git.png",
        "Docker,./icons/docker.png",
      ]
    };

    Object.entries(iconsSkills).forEach(([category, icons]) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('skills-section__category');

      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category;
      categoryDiv.appendChild(categoryTitle);

      icons.forEach(iconString => {
        const [label, src] = iconString.split(",");
        const gridIcon = document.createElement('grid-icons');
        gridIcon.setAttribute("titleGrid", category);
        gridIcon.setAttribute("src", src);
        gridIcon.setAttribute("label", label);
        categoryDiv.appendChild(gridIcon);
      });

      containerSkills!.appendChild(categoryDiv);
    });
  }

  private render() {
    this.innerHTML = `
      <section id="container__skills" class="skills-section__container"></section>
    `;
  }
}

customElements.define("skills-component", SkillsSection);

