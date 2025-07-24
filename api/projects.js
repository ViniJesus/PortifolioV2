const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use(express.static("."));

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

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// app.listen(PORT, () => {
//   console.log(`API rodando em http://localhost:${PORT}`);
// });

module.exports = app;
