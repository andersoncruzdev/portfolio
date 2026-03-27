import '../molecules/CardExperience.js';
class ExperienceSection extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
        this.loadStyles();
        this.experiences();
    }
    loadStyles() {
        if (!document.getElementById('experience-section-styles')) {
            const link = document.createElement('link');
            link.id = 'experience-section-styles';
            link.rel = 'stylesheet';
            link.href = './styles/organisms/ExperienceSection.css';
            document.head.appendChild(link);
        }
    }
    experiences() {
        const containerExperiences = this.querySelector("#container__experiences__cards");
        const myExperiences = [
            {
                localName: "BaoBah",
                localLink: "https://baobah.ceres.ufrn.br/",
                localCargo: "Desenvolvedor Front‑End",
                localAcoes: "Desenvolvo o website Banco de Objetos de Aprendizagem em História (BaoBah), uma plataforma que organiza e disponibiliza materiais digitais voltados ao ensino de História. Sou responsável pela interface do sistema utilizando Vue.js com Vite, empregando TypeScript para a lógica da aplicação, HTML5 para a estruturação das páginas e CSS3 para a estilização. Crio componentes reutilizáveis, funções utilitárias e estruturas de UI que tornam o sistema estável, escalável e fácil de usar. Aplico práticas modernas de desenvolvimento web e contribuo para melhorar o desempenho, a organização visual e a experiência do usuário. Participo também do fluxo de trabalho da equipe utilizando Kanban, garantindo alinhamento, priorização e entregas contínuas ao longo do desenvolvimento da plataforma.",
                date: "2025 – Presente"
            },
            {
                localName: "ByteSJR",
                localLink: "https://seridobyte.github.io/bytesjrpage/",
                localCargo: "Desenvolvedor de Software",
                localAcoes: "Atuei como desenvolvedor de software na empresa júnior Byte Seridó Jr., criando soluções tecnológicas para negócios locais e projetos acadêmicos. Contribuí no desenvolvimento de sistemas web focados em melhorar processos internos, ampliar a presença digital e automatizar tarefas, sempre priorizando usabilidade, confiabilidade e impacto para o cliente. No back-end, desenvolvi APIs e regras de negócio utilizando Python. No front-end, trabalhei com Vue.js e Vite para entregar interfaces rápidas e reativas, utilizando TypeScript, HTML5 e CSS3 como base para criar componentes reutilizáveis, layouts responsivos e funcionalidades interativas. Também apoiei o processo ágil das entregas, garantindo colaboração contínua e evolução dos projetos.",
                date: "2024 – 2025",
            }
        ];
        myExperiences.forEach(experience => {
            const cardExperience = document.createElement("card-experience");
            cardExperience.setAttribute("localName", experience.localName);
            cardExperience.setAttribute("localLink", experience.localLink);
            cardExperience.setAttribute("localCargo", experience.localCargo);
            cardExperience.setAttribute("localAcoes", experience.localAcoes);
            cardExperience.setAttribute("date", experience.date);
            containerExperiences.appendChild(cardExperience);
        });
    }
    render() {
        this.innerHTML = `
      <section id="container__experiences" class="experience-section__container">
        <div class="experience-section__title">
          <h2>Experiências</h2>
        </div>
        <div id="container__experiences__cards" class="experience-section__cards"></div>
      </section>
    `;
    }
}
customElements.define("experience-component", ExperienceSection);
