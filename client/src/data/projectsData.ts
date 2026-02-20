export type Project = {
  image: string;
  name: string;
  description: string;
  techStack: string[];
  website?: string;
};

export const projects: Project[] = [
  {
    image: '/assets/das.png',
    name: 'Digital Arts Society',
    description:
      'The official website of the Digital Arts Society, BVCOE — a creative hub featuring the society’s flagship events, vibrant team structure, event archives. Explore detailed sections on past and upcoming events, meet the dynamic team behind the scenes.',
    techStack: ['React.js', 'Typescript','tailwind'],
    website: 'https://dasbvp.onrender.com/',
  },
  {
    image: '/assets/codeexplorer.png',
    name: 'CodeExplorer',
    description:
      'A repository-grounded codebase intelligence tool that analyzes public GitHub repositories to generate architecture-level insights using AST-based static analysis, dependency graphs, and interactive visualizations.',
    techStack: [
      'FastAPI',
      'Python',
      'React',
      'TypeScript',
      'D3.js',
      'Tailwind CSS'
    ],
    website: 'https://code-explorer-rouge.vercel.app/',
  },

  
  {
    image: '/assets/chat app.png',
    name: 'Spidey Chat',
    description:
      'A themed real-time messaging platform featuring WebSocket communication with Socket.IO, JWT-based authentication, Firebase-hosted media sharing, and a fully responsive SCSS-powered UI.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'SCSS', 'Redux', 'Firebase'],
    website: 'https://spidey-chat.onrender.com/',
  },
  {
    image: '/assets/swiggy.png',
    name: 'Swizzy',
    description:
      'A production-ready, full-stack food delivery application inspired by Swiggy. Implements user authentication, dynamic menu rendering, cart management, real-time order tracking, and Razorpay-based secure payments.',
    techStack: ['React.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Razorpay'],
    website: 'https://swiggy-x98p.onrender.com/',
  },
  {
    image: '/assets/weather app.png',
    name: 'Weather App',
    description:
      'A modern weather forecasting application built with Next.js and TypeScript. Integrates the OpenWeather API and features a sleek, responsive interface styled with Tailwind CSS.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
    website: 'https://weatherapp-52n0.onrender.com/',
  },
  {
    image: '/assets/cultural amalgam.png',
    name: 'Cultural Amalgam',
    description:
      'An official event website designed for a college fest, offering real-time announcements, schedules, and mobile-first design optimized for accessibility and performance.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    website: 'https://culturalamalgam.in/',
  },
  {
    image: '/assets/acm id.png',
    name: 'ACM ID Card Generator',
    description:
      'A utility tool for generating downloadable digital ID cards for ACM society members, featuring a form-based UI and state persistence via Redux.',
    techStack: ['React', 'Redux'],
    website: 'https://acm-idcard.onrender.com/',
  },
  {
    image: '/assets/tictactoe.png',
    name: 'Tic Tac Toe',
    description:
      'A minimalist, browser-based implementation of Tic Tac Toe using React and Redux. Offers real-time game state updates, instant win detection, and a reset option.',
    techStack: ['React', 'Redux'],
    website: 'https://tic-tac-toe-ufuk.onrender.com/',
  },
  {
    image: '/assets/todo.png',
    name: 'ToDo List',
    description:
      'A full-featured MERN stack application for task management. Enables authenticated users to create, update, and delete tasks, with secure JWT-based login and persistent storage.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'JWT'],
    website: 'https://todolist-y9qu.onrender.com/',
  },
  {
    image: '/assets/expense.png',
    name: 'Expense Tracker',
    description:
      'A comprehensive personal finance tracker built with the MERN stack. Supports JWT-secured user sessions, categorized expense logging, and seamless state handling via Redux Toolkit.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux Toolkit', 'JWT'],
    website: 'https://expense-tracker-8mdc.onrender.com/',
  },
];
