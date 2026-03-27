import '../atoms/GridIcon.js';
class SkillsSection extends HTMLElement {
    connectedCallback() {
        this.render();
        this.loadStyles();
        this.skills();
    }
    loadStyles() {
        if (!document.getElementById('skills-section-styles')) {
            const link = document.createElement('link');
            link.id = 'skills-section-styles';
            link.rel = 'stylesheet';
            link.href = './styles/organisms/SkillsSection.css';
            document.head.appendChild(link);
        }
    }
    skills() {
        const containerSkills = this.querySelector('#container__skills');
        if (!containerSkills)
            return;
        containerSkills.innerHTML = '';
        const iconsSkills = {
            Linguagens: [
                { label: 'JavaScript', src: './icons/javascript.png' },
                { label: 'TypeScript', src: './icons/typescript.png' },
                { label: 'Java', src: './icons/java.png' }
            ],
            'Front-end': [
                { label: 'HTML', src: './icons/html.png' },
                { label: 'CSS', src: './icons/css.png' },
                { label: 'Sass', src: './icons/sass.png' },
                { label: 'React', src: './icons/react.png' },
                { label: 'Next.js', src: './icons/nextjs.png' },
                { label: 'Vue', src: './icons/vue.png' },
                { label: 'Tailwind CSS', src: './icons/tail.png' },
                { label: 'Bootstrap', src: './icons/boot.png' }
            ],
            'Back-end': [
                { label: 'Node.js', src: './icons/node.png' },
                { label: 'Express', src: './icons/express.png' },
                { label: 'Spring Boot', src: './icons/springboot.png' }
            ],
            Dados: [
                { label: 'MySQL', src: './icons/mysql.png' },
                { label: 'PostgreSQL', src: './icons/postgresql.png' },
                { label: 'MongoDB', src: './icons/mongodb.png' }
            ],
            Ferramentas: [
                { label: 'Git', src: './icons/git.png' },
                { label: 'Docker', src: './icons/docker.png' },
                { label: 'AWS', src: './icons/aws.png' }
            ]
        };
        Object.entries(iconsSkills).forEach(([category, icons]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skills-section__category');
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category;
            categoryDiv.appendChild(categoryTitle);
            icons.forEach(({ label, src }) => {
                const gridIcon = document.createElement('grid-icons');
                gridIcon.setAttribute('titleGrid', category);
                gridIcon.setAttribute('src', src);
                gridIcon.setAttribute('label', label);
                categoryDiv.appendChild(gridIcon);
            });
            containerSkills.appendChild(categoryDiv);
        });
    }
    render() {
        this.innerHTML = `
      <section id="container__skills" class="skills-section__container"></section>
    `;
    }
}
customElements.define('skills-component', SkillsSection);
