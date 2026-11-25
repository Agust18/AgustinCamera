import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import { card, focusRing, linkDraw } from '../../styles/ui';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className={`${card} group flex flex-col overflow-hidden`}>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label={`Ver detalles de ${project.title}`}
          className={`relative block h-48 w-full cursor-pointer overflow-hidden bg-[#161824] text-left ${focusRing}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt=""
              width="640"
              height="384"
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center px-6 text-center font-['Space_Grotesk'] text-xl font-semibold text-gray-400">
              {project.title}
            </span>
          )}
        </button>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            {project.status && (
              <span className="shrink-0 rounded-full border border-white/15 px-2.5 py-0.5 text-xs capitalize text-gray-300">
                {project.status}
              </span>
            )}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-400 line-clamp-3">
            {project.description}
          </p>

          <ul className="my-4 flex flex-wrap gap-1.5" aria-label="Tecnologías">
            {project.technologies.slice(0, 4).map((tech) => (
              <li key={tech} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                {tech}
              </li>
            ))}
            {project.technologies.length > 4 && (
              <li className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-400">
                +{project.technologies.length - 4}
              </li>
            )}
          </ul>

          <div className="mt-auto flex items-center gap-5 border-t border-white/10 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center gap-1.5 text-sm text-gray-300 hover:text-white ${focusRing}`}
            >
              <FaGithub size={14} aria-hidden="true" /> Código
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-11 items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 ${focusRing}`}
              >
                <FaExternalLinkAlt size={12} aria-hidden="true" /> Demo
              </a>
            )}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className={`ml-auto min-h-11 cursor-pointer text-sm text-gray-300 hover:text-white ${linkDraw}`}
            >
              Detalles
            </button>
          </div>
        </div>
      </article>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
