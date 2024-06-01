const checkboxEl = document.querySelector('.theme-checkbox');
const bodyEl = document.querySelector('body');

let isDarkThemeActive = false;
const savedTheme = localStorage.getItem('dark-theme');

if (savedTheme == 'true') {
  isDarkThemeActive = true;
  document.body.classList.add('dark-theme');
}

if (isDarkThemeActive) {
  checkboxEl.checked = true;
  document.body.style.transition = 'all 0.3s ease';
}

checkboxEl.addEventListener('change', () => {
  bodyEl.classList.toggle('dark-theme');
  isDarkThemeActive = !isDarkThemeActive;
  localStorage.setItem('dark-theme', isDarkThemeActive);
});
