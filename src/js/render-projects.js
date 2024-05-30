'use strict';
import projects from './projects-api';
import spriteUrl from '/img/sprite.svg';

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
      <picture>
        <source class="projects-item-img" srcset="${project.images.webp['1x']} 1x, ${project.images.webp['2x']} 2x" type="image/webp">
        <source class="projects-item-img" srcset="${project.images.jpg['1x']} 1x, ${project.images.jpg['2x']} 2x" type="image/jpeg">
        <img class="projects-item-img" src="${project.images.jpg['1x']}" alt="${project.title}">
      </picture>
      <p class="projects-item-skills">${project.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${project.title}</h3>
        <a href="https://github.com/Vikto0004/browser-battalion-2.0" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="${spriteUrl}#icon-arrow-visit"></use>
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
    window.scrollBy({
      top: 500,
      behavior: 'smooth',
    });
  }, 100);
}