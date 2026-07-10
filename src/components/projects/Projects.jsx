import { useState, useEffect, useMemo, useCallback } from 'react';
import { projects } from '../../data/Projects';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import ProjectSkeleton from './ProjectSkeleton';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter(p => p.technologies.includes(filter));
  }, [filter]);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  if (loading) return <ProjectSkeleton />;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
     
      <div className="absolute inset-0 bg-[#0a0a0f]/50 backdrop-blur-sm" />

    
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mis Proyectos
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              {filteredProjects.length} proyectos
            </p>
          </div>
        </div>

      
        <ProjectFilters
          projects={projects}
          currentFilter={filter}
          onFilterChange={handleFilterChange}
        />

     
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-400">No hay proyectos con este filtro</p>
            <button
              onClick={() => handleFilterChange('all')}
              className="mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Ver todos los proyectos
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;