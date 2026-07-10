import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
   
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <img 
            src={project.image || '/placeholder-project.jpg'} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
    
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <FaEye size={16} />
              Ver detalles
            </span>
          </button>
          
      
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-[#0a0a0f]/80 backdrop-blur-sm text-gray-300 border border-white/10">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#0a0a0f]/80 backdrop-blur-sm text-gray-400 border border-white/10">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-1.5 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
            {project.description}
          </p>

       
          <div className="flex items-center gap-4 pt-3 border-t border-white/5">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaGithub size={14} /> Código
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
              >
                <FaExternalLinkAlt size={12} /> Demo
              </a>
            )}
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-auto text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
            >
              <FaEye size={12} />
              Detalles
            </button>
          </div>
        </div>
      </div>

    
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProjectCard;