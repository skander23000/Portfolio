const header = {
  homepage: '',
  title: '',
}

const about = {
  name: 'Skander',
  role: 'Fullstack Enthusiast',
  description: 
    'Currently finishing my work-study program in the second year of my Master\'s in Computer Science at Grenoble Alpes University, I am seeking a full-time position.',
  resume: 'https://skander-chouiter-cv.tiiny.site',
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
    name: 'MstrTire',
    description: 'Real-time product reservation with transactional logic / e-commerce platform.',
    stack: ['Angular', 'SpringBoot', 'PostgreSQL with Liquibase', 'Containerization'],
    sourceCode: 'https://github.com/skander23000/rslmdevops',
  },
  {
    name: 'Medical Portal - BookDoc',
    description: 'edical portal web app with separate interfaces for patients and doctors.',
    stack: ['Next.js', 'Strapi', 'PostgreSQL'],
    sourceCode: 'https://github.com/skander23000/BookDoc',
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
    name: 'NutriSport',
    description:
      'web application for generating a personalized diet and exercise program.',
    stack: ['JavaScript', 'Laravel', 'MySQL', 'Python'],
    sourceCode: 'https://github.com/skander23000/NutriSport',
  },
  {
    name: 'DevOps Project',
    description:
      'A complete CI/CD pipeline project that automates the deployment of a Java application.',
    stack: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'GitHub Actions','Maven', 'JUnit'],
    sourceCode: 'https://github.com/skander23000/rslmdevops',
  },
  {
    name: 'CyberVideo',
    description:
      'CyberVideo is a project designed to provide advanced management' +
      ' functionalities to deepen understanding of advanced object-oriented'+ 
      ' by applying various design patterns within a concrete use case.',
    stack: ['Java', 'Swing','SQL'],
    sourceCode: 'https://github.com/skander23000/CyberVideo',
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

const experiences = [
  {
    company: 'DELOITTE',
    role: 'Web & Cloud Native Development – Apprenticeship',
    duration: '09/2024 - 09/2025',
    type: 'Apprenticeship',
    description: [
      'Full-stack development of a web app to analyze the environmental and social impact of ad campaigns (Angular, Spring Boot, PostgreSQL)',
      'Built a full-stack data portal (Angular, NestJS, PostgreSQL) with strong DevOps focus (AWS, Docker, CI/CD)',
      'Developed an interactive digital platform for youth education (Angular, NestJS, PostgreSQL)'
    ]
  },
  {
    company: 'NEOXIA',
    role: 'Web & Cloud Native Development – Internship',
    duration: '05/2023 - 08/2024',
    type: 'Internship',
    description: [
      'Set up the complete cloud infrastructure on AWS (ECS, ECR, S3, RDS...)',
      'Frontend development using React; backend with Node.js and Strapi',
      'Developed a Progressive Web App (PWA)',
      'Implemented a notification system with email dispatch'
    ]
  },
  {
    company: 'ORSIMA',
    role: 'Web Development Intern',
    duration: '07/2022 – 08/2022',
    type: 'Internship',
    description: [
      'Contributed to a web application for generating deployment source code for firewalls',
      'Built a secure authentication system using JavaScript, PHP, and SQL',
      'Connected and manipulated relational databases'
    ]
  }
]

export { header, about, projects, skills, contact, experiences }
