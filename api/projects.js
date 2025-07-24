// api/projects.js

const projects = [
  {
    name: 'LifeSurf',
    thumb: 'src/img/projects/lifesurf.png',
    description: 'TESTE',
    github: 'https://github.com/ViniJesus/LifeSurf.git',
    deploy: 'https://life-surf.vercel.app/',
  },
  {
    name: 'Mindtechcare',
    thumb: 'src/img/projects/mindtechcare.png',
    description: 'TESTE',
    github: 'https://github.com/ViniJesus/MindTechCare',
    deploy: 'https://mindtechcare.onrender.com',
  },
  {
    name: 'Forest',
    thumb: 'src/img/projects/forest.png',
    description: 'TESTE',
    github: 'https://github.com/ViniJesus/Forest',
    deploy: 'https://forest-snowy-psi.vercel.app/',
  },
  {
    name: 'PatyDoces',
    thumb: 'src/img/projects/patydoces.png',
    description: 'TESTE',
    github: 'https://github.com/ViniJesus/paty-doces',
    deploy: 'https://paty-doces.vercel.app/',
  },
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // libera CORS para qualquer origem

  if (req.method === 'GET') {
    res.status(200).json(projects);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
