const ProjectSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white/5 rounded-xl overflow-hidden animate-pulse border border-white/5">
          <div className="h-48 bg-white/10" />
          <div className="p-5 space-y-3">
            <div className="h-5 bg-white/10 rounded w-3/4" />
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-2/3" />
            <div className="flex gap-2 pt-2">
              <div className="h-6 bg-white/10 rounded w-16" />
              <div className="h-6 bg-white/10 rounded w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;