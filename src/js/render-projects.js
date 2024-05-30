'use strict';

const projects = [
  {
    images: {
      webp: {
        '1x': './img/projects/webp/power.webp',
        '2x': './img/projects/webp/power-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/power-min.jpg',
        '2x': './img/projects/jpg/power-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'power pulse webservice',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/mimino.webp',
        '2x': './img/projects/webp/mimino-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/mimino-min.jpg',
        '2x': './img/projects/jpg/mimino-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'mimino website',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/vyshyvanka.webp',
        '2x': './img/projects/webp/vyshyvanka-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/vyshyvanka-min.jpg',
        '2x': './img/projects/jpg/vyshyvanka-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'vyshyvanka vibes Landing Page',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/green.webp',
        '2x': './img/projects/webp/green-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/green-min.jpg',
        '2x': './img/projects/jpg/green-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'green harvest online store',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/wallet.webp',
        '2x': './img/projects/webp/wallet-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/wallet-min.jpg',
        '2x': './img/projects/jpg/wallet-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'wallet webservice',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/chego.webp',
        '2x': './img/projects/webp/chego-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/chego-min.jpg',
        '2x': './img/projects/jpg/chego-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'chego jewelry website',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/energy.webp',
        '2x': './img/projects/webp/energy-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/energy-min.jpg',
        '2x': './img/projects/jpg/energy-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'energy flow webservice',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/fruitbox.webp',
        '2x': './img/projects/webp/fruitbox-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/fruitbox-min.jpg',
        '2x': './img/projects/jpg/fruitbox-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'fruitbox online store',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/english.webp',
        '2x': './img/projects/webp/english-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/english-min.jpg',
        '2x': './img/projects/jpg/english-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'english excellence webservice',
  },
  {
    images: {
      webp: {
        '1x': './img/projects/webp/starlight.webp',
        '2x': './img/projects/webp/starlight-2x.webp',
      },
      jpg: {
        '1x': './img/projects/jpg/starlight-min.jpg',
        '2x': './img/projects/jpg/starlight-2x-min.jpg',
      },
    },
    skills: 'React, JavaScript, Node JS, Git',
    title: 'starlight studio landing page',
  },
];

const projectsList = document.querySelector('.projects-list');
const loadMoreBtn = document.querySelector('.projects-load-btn');

let startIndex = 0;

renderProjects(startIndex, 3);

loadMoreBtn.addEventListener('click', loadProjects);

function renderProjects(startIndex, numProjects) {
  const endIndex = startIndex + numProjects;
  const projectsToRender = projects.slice(startIndex, endIndex);

  const markup = projectsToRender
    .map(
      project => `
    <li class="projects-item">
      <picture class="projects-item-img">
        <source srcset="${project.images.webp['1x']} 1x, ${project.images.webp['2x']} 2x" type="image/webp">
        <source srcset="${project.images.jpg['1x']} 1x, ${project.images.jpg['2x']} 2x" type="image/jpeg">
        <img src="${project.images.jpg['1x']}" alt="">
      </picture>
      <p class="projects-item-skills">${project.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${project.title}</h3>
        <a href="https://github.com/Vikto0004/browser-battalion-2.0" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="./img/sprite.svg#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </li>
  `
    )
    .join('');

  projectsList.insertAdjacentHTML('beforeend', markup);

  projectsToRender.forEach((project, index) => {
    setTimeout(() => {
      const projectsItem = projectsList.querySelector(
        `li:nth-child(${startIndex + index + 1})`
      );
      projectsItem.classList.add('show');
    }, 100 * index);
  });
}

function loadProjects(event) {
  startIndex += 3;
  renderProjects(startIndex, 3);
  if (startIndex >= projects.length - 1) {
    loadMoreBtn.style.display = 'none';
  }
  setTimeout(() => {
    const lastProject = projectsList.lastElementChild;
    if (lastProject) {
      lastProject.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}
