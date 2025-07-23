const buttonDarkMode = document.getElementById('toggle-dark');
const imageDarkMode = document.querySelector('#toggle-dark img');
const imageMain = document.getElementById('pixelart');

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'ligth') {
  document.documentElement.classList.toggle('dark');
  buttonDarkMode.classList.toggle('active-dark');
  imageDarkMode.src = '/src/img/header/sol.svg';
  imageMain.src = '/src/img/main/PIXEL-LIGTH.png';
} else {
  // Escuro é o padrão
  document.documentElement.classList.toggle('dark');
  buttonDarkMode.classList.toggle('active-dark');
  imageDarkMode.src = '/src/img/header/lua.svg';
  imageMain.src = '/src/img/main/PIXEL 1.png';
}

// Alternar tema ao clicar no botão
buttonDarkMode.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');

  if (isDark) {
    // Modo claro
    document.documentElement.classList.toggle('dark');
    buttonDarkMode.classList.toggle('active-dark');
    imageDarkMode.src = '/src/img/header/sol.svg';
    imageMain.src = '/src/img/main/PIXEL-LIGTH.png';
    localStorage.setItem('tema', 'light');
  } else {
    // Modo escuro
    document.documentElement.classList.toggle('dark');
    buttonDarkMode.classList.toggle('active-dark');
    imageDarkMode.src = '/src/img/header/lua.svg';
    imageMain.src = '/src/img/main/PIXEL 1.png';
    localStorage.setItem('tema', 'dark');
  }
});
