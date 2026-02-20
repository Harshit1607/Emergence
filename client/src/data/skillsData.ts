// types
export type Skill = {
  name: string;
  img: string;
  code: string;
  category: "language" | "frontend" | "backend" | "tools" | "others";
};

// data
export const skills: Skill[] = [
  // Languages
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    code: "javascript",
    category: "language",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    code: "typescript",
    category: "language",
  },
  {
    name: "C++",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    code: "cpp",
    category: "language",
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    code: "python",
    category: "language",
  },

  // Frontend
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    code: "html",
    category: "frontend",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    code: "css",
    category: "frontend",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    code: "react",
    category: "frontend",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    code: "nextjs",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    code: "tailwind",
    category: "frontend",
  },
  {
    name: "SCSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    code: "scss",
    category: "frontend",
  },
  {
    name: "Redux",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    code: "redux",
    category: "frontend",
  },
  {
    name: "Redux Toolkit",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    code: "redux-toolkit",
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    code: "node",
    category: "backend",
  },
  {
    name: "Express.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    code: "express",
    category: "backend",
  },
  {
    name: "FastAPI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    code: "fastapi",
    category: "backend",
  },
  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    code: "mongodb",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    code: "postgresql",
    category: "backend",
  },
  {
    name: "Redis",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    code: "redis",
    category: "backend",
  },
  {
    name: "Firebase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    code: "firebase",
    category: "backend",
  },
//  {
//   name: "Supabase",
//   img: "https://raw.githubusercontent.com/supabase/supabase/master/packages/ui/public/supabase-logo.svg",
//   code: "supabase",
//   category: "backend",
// }
// ,

  {
    name: "Socket.IO",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    code: "socket-io",
    category: "backend",
  },
  {
    name: "Prisma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    code: "prisma",
    category: "backend",
  },

  // Tools
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    code: "git",
    category: "tools",
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    code: "github",
    category: "tools",
  },
  {
    name: "GitHub Actions",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    code: "github-actions",
    category: "tools",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    code: "figma",
    category: "tools",
  },
];
