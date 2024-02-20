
const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkScheme) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

const toggleTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('preferredTheme', theme);
};

const darkThemeBtn = document.getElementById('darkThemeBtn');
darkThemeBtn.addEventListener('click', () => toggleTheme('dark'));

const lightThemeBtn = document.getElementById('lightThemeBtn');
lightThemeBtn.addEventListener('click', () => toggleTheme('light'));

document.addEventListener('DOMContentLoaded', () => {
  const storedTheme = localStorage.getItem('preferredTheme');
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  }
});
