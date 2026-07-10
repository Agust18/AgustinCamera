import { useMemo } from 'react';

const ProjectFilters = ({ projects, currentFilter, onFilterChange }) => {
  const techTags = useMemo(() => {
    const allTechs = projects.flatMap(p => p.technologies);
    return ['all', ...new Set(allTechs)];
  }, [projects]);

  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      {techTags.map(tag => (
        <button
          key={tag}
          onClick={() => onFilterChange(tag)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${currentFilter === tag 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
            }
          `}
        >
          {tag === 'all' ? 'Todos' : tag}
          {currentFilter === tag && (
            <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              {tag === 'all' ? projects.length : projects.filter(p => p.technologies.includes(tag)).length}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;