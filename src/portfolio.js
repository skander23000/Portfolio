const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/Portfolio',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Skander',
  role: 'Fullstack Enthusiast',
  description:
    'First-year Master’s student in Computer Science at Grenoble Alpes University, looking for a web development internship starting from May 2024, ideally with the possibility of continuing as a work-study for my Master’s 2.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/skander-chouiter-867245211/w',
    github: 'https://github.com/skander23000',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'JobFinder',
    description:
      'Fullstack project that allows users to find jobs and apply for them. and also allows recruiters to post jobs and manage them.',
    stack: ['React', 'node', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/skander23000/JobFinder-Projects',
    livePreview: 'https://jobfinder-skander.netlify.app/user-auth',
  },
  {
    name: 'Rawg.io clone',
    description:
      'A clone of the website Rawg.io using their API and React library like Zustand, React Query, React Router.',
    stack: ['TypeScript', 'React'],
    sourceCode: 'https://github.com/skander23000/games-skander',
    livePreview: 'game-react-project.vercel.app',
  },
  {
    name: 'Pokedex',
    description:
      'A Pokedex application that allows users to search for pokemons, see their details and modify them. ',
    stack: ['TypeScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/skander23000/react-pokedex-app',
    livePreview: 'pokedex-react-app-8fc9b.web.app/',
  },

  {
    name: 'NutriSport',
    description:
      'web application for generating a personalized diet and exercise program.',
    stack: ['JavaScript', 'Laravel', 'MySQL', 'Python'],
    sourceCode: 'https://github.com/skander23000/NutriSport',
  },
  {
    name: 'E-commerce ',
    description:
      'E-commerce web application for the sale of hardware products.',
    stack: ['PHP', 'MySQL'],
    sourceCode: 'https://github.com/skander23000/php_project',
  },
  {
    name: 'CyberVideo',
    description: 'Desktop application for managing a video club.',
    stack: ['Java', 'Swing', 'SQL'],
    sourceCode: 'https://github.com/skander23000/CyberVideo',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'PHP',
  'Laravel',
  'MySQL',
  'Java',
  'Python',
  'Git',
  'Communication',
  'Teamwork',
  'Problem-solving',
  'Adaptability',
  'Creativity',
  'Time Management',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Skander.Chouiter@etu.univ-grenoble-alpes.fr',
}

export { header, about, projects, skills, contact }
