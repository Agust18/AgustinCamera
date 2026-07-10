import { useEffect } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendar, FaUsers, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Cerrar con Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] rounded-2xl border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
        
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <FaTimes size={20} />
          </button>

    
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={project.image || '/placeholder-project.jpg'} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          </div>

          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-400 mt-1 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-2 text-sm"
                  >
                    <FaExternalLinkAlt size={14} /> Demo
                  </a>
                )}
              </div>
            </div>

            
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
              {project.year && (
                <span className="flex items-center gap-1.5">
                  <FaCalendar size={14} /> {project.year}
                </span>
              )}
              {project.role && (
                <span className="flex items-center gap-1.5">
                  <FaUsers size={14} /> {project.role}
                </span>
              )}
              {project.status && (
                <span className="flex items-center gap-1.5">
                  <FaClock size={14} /> {project.status}
                </span>
              )}
              {/* {project.status && (
                <span className="flex items-center gap-1.5">
                  <FaUsers size={14} /> estado :{project.status}
                </span>
              )} */}
            </div>

            {project.fullDescription && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Sobre el proyecto</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}


            <div className="mb-6">
              <h4 className="text-white font-semibold mb-2">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.challenges && (
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">Desafíos</h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-orange-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.solutions && (
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">Soluciones</h4>
                  <ul className="space-y-1.5">
                    {project.solutions.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {project.results && (
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-white font-semibold mb-2 text-sm">Resultados</h4>
                <ul className="space-y-1.5">
                  {project.results.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

        
            <button
              onClick={onClose}
              className="w-full mt-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;