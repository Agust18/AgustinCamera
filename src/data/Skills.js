
import { 
  FaReact, FaBootstrap, FaCss3Alt, FaHtml5, FaGitAlt, 
  FaDocker, FaGithub, FaWordpress, FaServer, FaDatabase,
  FaCode, FaTools, FaProjectDiagram
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiAstro, SiPhp, SiCodeigniter, 
  SiVite, SiJavascript, SiMysql, SiPostman, SiTrello
} from 'react-icons/si';


export const iconMap = {
  'React': { icon: FaReact, color: 'text-blue-400' },
  'Bootstrap': { icon: FaBootstrap, color: 'text-purple-400' },
  'Tailwind': { icon: SiTailwindcss, color: 'text-cyan-400' },
  'Astro': { icon: SiAstro, color: 'text-purple-500' },
  'HTML': { icon: FaHtml5, color: 'text-orange-400' },
  'CSS': { icon: FaCss3Alt, color: 'text-blue-400' },
  'JavaScript': { icon: SiJavascript, color: 'text-yellow-400' },
  'PHP': { icon: SiPhp, color: 'text-indigo-400' },
  'CodeIgniter 4': { icon: SiCodeigniter, color: 'text-red-400' },
  'MySQL': { icon: SiMysql, color: 'text-blue-500' },
  'Git': { icon: FaGitAlt, color: 'text-red-400' },
  'GitHub': { icon: FaGithub, color: 'text-gray-400' },
  'VSCode': { icon: FaCode, color: 'text-blue-400' },
  'Trello': { icon: SiTrello, color: 'text-blue-400' },
  'Postman': { icon: SiPostman, color: 'text-orange-400' },
  'Vite': { icon: SiVite, color: 'text-yellow-400' },
  'Docker': { icon: FaDocker, color: 'text-blue-400' },
  'WordPress': { icon: FaWordpress, color: 'text-blue-400' }
};



export const categoriesConfig = {
  Tecnologias: {
    label: 'Tecnologías',
    icon: FaCode,
    iconColor: 'text-blue-400',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/20'
  },
  Herramientas: {
    label: 'Herramientas',
    icon: FaTools,
    iconColor: 'text-purple-400',
    color: 'from-purple-500 to-violet-600',
    borderColor: 'border-purple-500/20'
  }
};


export const skills = {
  Tecnologias: [
    "React", "Bootstrap", "Tailwind", "Astro", "HTML", "CSS", "JavaScript",
    "PHP", "CodeIgniter 4", "MySQL"
  ],
  Herramientas: [
    "Git", "GitHub", "VSCode", "Trello", "Postman", "Vite", "Docker", "WordPress"
  ]
};