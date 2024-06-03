import lightFavicon from '/public/light-favicon.svg';
import darkFavicon from '/public/dark-favicon.svg';

const checkboxEl = document.querySelector('.theme-checkbox');
const bodyEl = document.querySelector('body');
const faviconEl = document.querySelector('link[rel="icon"]');

let isDarkThemeActive = false;
const savedTheme = localStorage.getItem('dark-theme');

if (savedTheme) {
  isDarkThemeActive = true;
  document.body.classList.add('dark-theme');
  faviconEl.href = darkFavicon;
  checkboxEl.checked = true;
}

checkboxEl.addEventListener('change', () => {
  bodyEl.classList.toggle('dark-theme');
  isDarkThemeActive = !isDarkThemeActive;

  if (isDarkThemeActive) {
    localStorage.setItem('dark-theme', isDarkThemeActive);
    faviconEl.href = darkFavicon;
  } else {
    faviconEl.href = lightFavicon;
    localStorage.removeItem('dark-theme');
  }
});
