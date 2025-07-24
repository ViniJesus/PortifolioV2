const button = document.getElementById('button-home');

document.addEventListener('scroll', (event) => {
  const lastPosition = window.scrollY;

  if (lastPosition > 200) {
    button.classList.remove('-bottom-10');
    button.classList.add('bottom-5');
  } else {
    button.classList.add('-bottom-10');
    button.classList.remove('bottom-5');
  }
});
