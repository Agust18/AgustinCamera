import { useEffect, useRef } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendar, FaUsers, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const dialogRef = useRef(null);

  // Escape cierra, Tab queda dentro del diálogo y el foco vuelve al disparador
  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    const dialog = dialogRef.current;
    const focusable = () =>
      dialog
        ? dialog.querySelectorAll('a[href], button:not([disabled])')
        : [];
    focusable()[0]?.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'unset';
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          exit={{ scale: 0.98, opacity: 0, y: 8, transition: { duration: 0.18, ease: 'easeIn' } }}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] rounded-2xl border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >

          <button
            onClick={onClose}
            aria-label="Cerrar detalles"
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/60 text-gray-200 hover:text-white hover:bg-black/80 transition-colors"
          >
            <FaTimes size={20} />
          </button>

    
          {project.image && (
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={`Captura de ${project.title}`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            </div>
          )}

          
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
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;