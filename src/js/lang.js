const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
const currentFlag = document.getElementById('current-flag');

const languageMap = {
  en: '/src/img/header/usa.svg',
  es: '/src/img/header/espanha.svg',
  pt: '/src/img/header/brasil.svg',
};

// Pega do localStorage ou usa "pt" como padrão
let currentLang = localStorage.getItem('lang') || 'pt';

// Aplica a tradução com base no JSON
async function setLanguage(lang) {
  const res = await fetch('/src/js/lang.json');
  const data = await res.json();
  const t = data[lang];

  // Atualiza todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.hasAttribute('data-html')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Atualiza o atributo lang da página
  document.documentElement.lang = lang;

  // Atualiza a bandeira principal
  currentFlag.src = languageMap[lang];

  // Salva no localStorage
  localStorage.setItem('lang', lang);

  currentLang = lang;
}

// Alterna menu de idiomas
langToggle.addEventListener('click', () => {
  langMenu.classList.toggle('hidden');
});

// Quando clicar em uma bandeira do menu
langMenu.querySelectorAll('button[data-lang]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const selectedLang = btn.getAttribute('data-lang');
    if (selectedLang === currentLang) return;

    await setLanguage(selectedLang);
    langMenu.classList.add('hidden');
  });
});

// ⚡ Aplica a linguagem salva no carregamento
window.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
