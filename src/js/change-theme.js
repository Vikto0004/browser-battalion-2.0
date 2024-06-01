import lightFavicon from '/public/light-favicon.svg';
import darkFavicon from '/public/dark-favicon.svg';

const checkboxEl = document.querySelector('.theme-checkbox');
const bodyEl = document.querySelector('body');
const faviconEl = document.querySelector('link[rel="icon"]');

let isDarkThemeActive = false;
const savedTheme = localStorage.getItem('dark-theme');

if (savedTheme == 'true') {
  isDarkThemeActive = true;
  document.body.classList.add('dark-theme');
  faviconEl.href = darkFavicon;
  checkboxEl.checked = true;
}

checkboxEl.addEventListener('change', () => {
  bodyEl.classList.toggle('dark-theme');
  if (isDarkThemeActive) faviconEl.href = lightFavicon;
  else faviconEl.href = darkFavicon;

  isDarkThemeActive = !isDarkThemeActive;
  localStorage.setItem('dark-theme', isDarkThemeActive);
});
