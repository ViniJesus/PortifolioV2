document.addEventListener('DOMContentLoaded', () => {
  const mobileButton = document.getElementById('mobile-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });

  const grid = document.getElementById('project-grid');
  const button = document.getElementById('load-more');
  let page = 0;
  const pageSize = 2;
  let allProjects = [];

  async function fetchProjects() {
    const res = await fetch('/api/projects');
    allProjects = await res.json();
    renderProjects();
  }

  function renderProjects() {
    const slice = allProjects.slice(page * pageSize, (page + 1) * pageSize);

    slice.forEach((project) => {
      const img = document.createElement('img');
      const a = document.createElement('a');
      img.src = project.thumb;
      img.alt = project.name;
      img.className = 'w-full max-w-xs min-h-52 rounded-md';
      a.href = project.deploy;
      a.setAttribute('target', '_blank');
      a.appendChild(img);
      grid.appendChild(a);
    });

    page++;
    if (page * pageSize >= allProjects.length) {
      button.style.display = 'none';
    }
  }

  button.addEventListener('click', renderProjects);
  fetchProjects();

  const downloadCv = document.getElementById('download-cv');

  downloadCv.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'src/archive/Curriculo_Vinicius_Jesus.pdf';
    link.download = 'vinicius-cv.pdf';
    link.click();
  });

  const form = document.getElementById('contato-form');
  const statusMessage = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // impede recarregamento

    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/manjppdk', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        statusMessage.textContent = 'Mensagem enviada com sucesso! 🎉';
        statusMessage.classList.remove('text-red-800', 'bg-red-200', 'hidden');
        statusMessage.classList.add('text-green-800', 'bg-green-200');
        form.reset();
      } else {
        statusMessage.textContent = 'Ocorreu um erro ao enviar. Tente novamente.';
        statusMessage.classList.remove('text-green-800', 'bg-green-200', 'hidden');
        statusMessage.classList.add('text-red-800', 'bg-red-200');
      }
    } catch (error) {
      statusMessage.textContent = 'Erro de rede. Verifique sua conexão.';
      statusMessage.classList.remove('text-green-800', 'bg-green-200', 'hidden');
      statusMessage.classList.add('text-red-800', 'bg-red-200');
    }

    // 🕒 Some com a mensagem após 4 segundos
    setTimeout(() => {
      statusMessage.textContent = '';
      statusMessage.classList.remove('text-green-800', 'bg-green-200', 'text-red-800', 'bg-red-200');
      statusMessage.classList.add('hidden');
    }, 4000);
  });
});
