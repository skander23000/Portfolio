const header = {
  homepage: '',
  title: '',
}

const about = {
  name: 'Skander',
  role: 'Fullstack Enthusiast',
  description: 
    'Currently finishing my work-study program in the second year of my Master\'s in Computer Science at Grenoble Alpes University, I am seeking a full-time position.',
  resume: 'https://plum-leslie-9.tiiny.site/',
  social: {
    linkedin: 'https://www.linkedin.com/in/skander-chouiter-867245211/',
    github: 'https://github.com/skander23000',
  },
}

const projects = [
  {
    name: 'JobFinder',
    description:
      'Fullstack project that allows users to find jobs and apply for them. and also allows recruiters to post jobs and manage them.',
    stack: ['React', 'node', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/skander23000/JobFinder-Project',
    livePreview: 'https://jobfinder-skander.netlify.app/user-auth',
  },
  {
    name: 'Rawg.io clone',
    description:
      'A clone of the website Rawg.io using their API and React library like Zustand, React Query, React Router.',
    stack: ['TypeScript', 'React'],
    sourceCode: 'https://github.com/skander23000/games-skander',
    livePreview: 'https://game-react-project.vercel.app/',
  },
  {
    name: 'Pokedex',
    description:
      'A Pokedex application that allows users to search for pokemons, see their details and modify them. ',
    stack: ['TypeScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/skander23000/react-pokedex-app',
    livePreview: 'https://pokedex-react-app-8fc9b.web.app/',
  },
  {
    name: 'MstrTire',
    description: 'MstrTire is an e-commerce application specialized in tire sales.',
    stack: ['Angular', 'SpringBoot', 'PostgreSQL with Liquibase', 'Containerization'],
    sourceCode: 'https://github.com/skander23000/CyberVideo',
  },
  {
    name: 'NutriSport',
    description:
      'web application for generating a personalized diet and exercise program.',
    stack: ['JavaScript', 'Laravel', 'MySQL', 'Python'],
    sourceCode: 'https://github.com/skander23000/NutriSport',
  },
  {
    name: 'TechBox',
    description:
      'TechBox was my first fullstack web application for the sale of hardware products.',
    stack: ['PHP', 'MySQL'],
    sourceCode: 'https://github.com/skander23000/php_project',
  },
 
]

const skills = [
  'TypeScript',
  'React/Angular',
  'Node/Nest',
  'Java',
  'Spring Boot',
  'NoSQL',
  'MySQL',
  'Git',
  'Docker',
  'kubernetes',
  'DevOps',
  'Communication',
  'Teamwork',
  'Problem-solving',
  'Adaptability',
  'Creativity',
  'Time Management',
]

const contact = {
  email: 'skanderchouiter@gmail.com',
}

export { header, about, projects, skills, contact }
