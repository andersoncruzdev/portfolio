import './ProjectCard.js';

class ProjectsSection extends HTMLElement {
  connectedCallback() {
    this.render();
    this.projects();
    this.loadStyles();
  }

  private loadStyles(): void {
    if (!document.getElementById('projects-section-styles')) {
      const link = document.createElement('link');
      link.id = 'projects-section-styles';
      link.rel = 'stylesheet';
      link.href = './styles/organisms/ProjectsSection.css';
      document.head.appendChild(link);
    }
  }

  private projects() {
    const containerProjects = document.querySelector("#container__projetos");
    const projects = [
      {
        title: "Dashboard Github",
        src: "./images/dashboard.png",
        description:
          "Desenvolvi um website para gerenciamento da conta do usuário no GitHub, permitindo verificar seguidores mútuos, não seguidores e issues abertas. Fui responsável pelo projeto completo, implementando o back-end com NextJS, autenticação via NextAuth/OAuth com GitHub, integração com PostgreSQL usando Prisma ORM, e ações de servidor para criar e deletar tokens de acesso e cadastrar usuários no banco de dados. Também conectei a aplicação ao Octokit para autenticação direta com GitHub. No front-end, usei React com ANTD, criando componentes reutilizáveis e seguindo o Design Atômico, garantindo código organizado e escalável. O resultado foi uma aplicação funcional e intuitiva para gerenciar conexões e issues no GitHub de forma segura.",
        technologies: "TypeScript,NextJS,React",
        platform: "Web",
        linkVideo: "https://youtu.be/5xWeEqobQ3I",
        deploy: "https://dashboard-github-three.vercel.app/dashboard",
      },
      {
        title: "SigPonto",
        src: "./images/sigponto.jpg",
        description:
          "Desenvolvi um aplicativo Android e uma versão web responsiva para controle de ponto eletrônico de servidores, com autenticação via SIGAA e validação por geolocalização. O projeto foi desenvolvido como parte da disciplina de Programação Orientada a Objetos, utilizando Flutter para a interface do usuário e Django no back-end, garantindo integração eficiente entre front-end e back-end e uma experiência de uso prática e confiável.",
        technologies: "Flutter,Django",
        platform: "Web, Android",
        linkVideo:
          "https://www.youtube.com/watch?v=uCP7hKKq_N8&list=PLGEU2ZlFybrZTMmiWrodrSSVjEzLtUwPO",
        deploy: "",
      },
    ];
    projects.forEach((project, index) => {
      const projectEl = document.createElement("project-card");
      if (index % 2 !== 0) projectEl.setAttribute("reverse", "");
      projectEl.setAttribute("image", project.src);
      projectEl.setAttribute("title", project.title);
      projectEl.setAttribute("platform", project.platform);
      projectEl.setAttribute("description", project.description);
      projectEl.setAttribute("technologies", project.technologies);
      projectEl.setAttribute("linkVideo", project.linkVideo);
      projectEl.setAttribute("deploy", project.deploy);
      containerProjects?.appendChild(projectEl);
    });
  }

  private render() {
    this.innerHTML = `
      <section id="container__projetos" class="projects-section__container container-fluid" aria-label="Container de Projetos"></section>
    `;
  }
}

customElements.define("projects-component", ProjectsSection);

