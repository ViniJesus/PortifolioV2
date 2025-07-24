const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
const currentFlag = document.getElementById('current-flag');

// Caminhos das bandeiras
const languageMap = {
  en: '/src/img/header/usa.svg',
  es: '/src/img/header/espanha.svg',
  pt: '/src/img/header/brasil.svg',
};

// Recupera idioma salvo ou define como 'pt' por padrão
let currentLang = localStorage.getItem('lang') || 'pt';

// Função para aplicar tradução
async function setLanguage(lang) {
  try {
    const res = await fetch('/src/js/lang.json');
    const data = await res.json();
    const t = data[lang];

    if (!t) {
      console.warn(`Tradução para ${lang} não encontrada.`);
      return;
    }

    // Atualiza elementos com data-i18n
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

    // Define idioma na tag HTML
    document.documentElement.lang = lang;

    // Atualiza bandeira atual
    currentFlag.src = languageMap[lang];

    // Salva idioma no localStorage
    localStorage.setItem('lang', lang);
    currentLang = lang;
  } catch (error) {
    console.error('Erro ao carregar o JSON de idioma:', error);
  }
}

// Toggle do menu de idiomas
langToggle.addEventListener('click', () => {
  langMenu.classList.toggle('hidden');
});

// Clique em uma bandeira no menu
langMenu.querySelectorAll('button[data-lang]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const selectedLang = btn.getAttribute('data-lang');
    if (selectedLang === currentLang) return;
    await setLanguage(selectedLang);
    langMenu.classList.add('hidden');
  });
});

// Aplica o idioma salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
