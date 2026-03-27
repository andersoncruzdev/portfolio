class ProjectCard extends HTMLElement {
  connectedCallback(): void {
    this.render();
    this.loadStyles();
    this.setupEventListeners();
  }

  private loadStyles(): void {
    if (!document.getElementById('project-card-styles')) {
      const link = document.createElement('link');
      link.id = 'project-card-styles';
      link.rel = 'stylesheet';
      link.href = './styles/organisms/ProjectCard.css';
      document.head.appendChild(link);
    }
  }

  private render(): void {
    const image = this.getAttribute('image') || '';
    const title = this.getAttribute('title') || '';
    const platform = this.getAttribute('platform') || '';
    const description = this.getAttribute('description') || '';
    const tech = this.getAttribute('technologies') || '';
    const linkVideo = this.getAttribute('linkVideo');
    const deploy = this.getAttribute('deploy');
    const isReversed = this.hasAttribute('reverse');

    const hasVideo = !!linkVideo;
    const hasDeploy = !!deploy;

    this.innerHTML = `
      <div class="project-card__wrapper">
        <div class="project-card__content ${isReversed ? 'reverse' : ''}">
          <div class="project-card__image-box">
            <img src="${image}" alt="App preview" />
          </div>
          <div class="project-card__description-box">
            <div class="project-card__platform">${platform} platform</div>
            <div class="project-card__title">${title}</div>
            <div class="text">${description}</div>
            <div class="project-card__tech-list">
              ${tech.split(',').map(t => `<span>${t.trim()}</span>`).join('')}
            </div>
            <div class="project-card__buttons">
              ${hasVideo ? `<button class="btn-video">Ver projeto em vídeo</button>` : ''}
              ${hasDeploy ? `<a href="${deploy}" target="_blank"><button class="btn-deploy">Visualizar Projeto</button></a>` : ''}
            </div>
          </div>
        </div>
      </div>

      <div class="project-card__video-modal" id="video-modal">
        <button class="close-btn" id="close-video">&times;</button>
        <iframe id="video-frame" allowfullscreen></iframe>
      </div>
    `;
  }

  private setupEventListeners(): void {
    const modal = this.querySelector<HTMLDivElement>('#video-modal');
    const iframe = this.querySelector<HTMLIFrameElement>('#video-frame');
    const btnVideo = this.querySelector<HTMLButtonElement>('.btn-video');
    const btnClose = this.querySelector<HTMLButtonElement>('#close-video');
    const linkVideo = this.getAttribute('linkVideo');

    if (btnVideo && modal && iframe && linkVideo) {
      btnVideo.addEventListener('click', () => {
        iframe.src = this.convertToEmbed(linkVideo);
        modal.classList.add('active');
      });
    }

    if (btnClose && modal && iframe) {
      btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
        iframe.src = '';
      });
    }
  }

  private convertToEmbed(link: string): string {
    try {
      const url = new URL(link);
      const isYoutube = url.hostname.includes('youtube.com');
      const isShort = url.hostname === 'youtu.be';

      if (isYoutube && url.searchParams.has('v')) {
        const videoId = url.searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
      }

      if (isShort) {
        const videoId = url.pathname.replace('/', '');
        return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
      }

      return link;
    } catch {
      return link;
    }
  }
}

customElements.define('project-card', ProjectCard);

