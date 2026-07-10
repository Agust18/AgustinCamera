import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialLinks = ({ 
  iconOnly = false, 
  size = 20,
  color = 'text-gray-400 hover:text-blue-400'
}) => {
  
  const socialLinks = [
    { 
      url: 'https://github.com/Agust18', 
      icon: <FaGithub size={size} />, 
      label: 'GitHub' 
    },
    { 
      url: 'https://www.linkedin.com/in/agustin-camera-a0258221a/', 
      icon: <FaLinkedin size={size} />, 
      label: 'LinkedIn' 
    },
    { 
      url: 'mailto:AgustinCamera16@hotmail.com', 
      icon: <FaEnvelope size={size} />, 
      label: 'Email' 
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
        
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            transition-all hover:scale-110
            ${iconOnly 
              ? `p-2 rounded-full ${color}` 
              : `flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 ${color} hover:bg-white/10`
            }
          `}
          aria-label={social.label}
        >
          {social.icon}
          {!iconOnly && <span className="text-sm font-medium">{social.label}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;