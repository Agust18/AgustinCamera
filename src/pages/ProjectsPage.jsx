import Header from '../components/header';
import Footer from '../components/footer';  
import Projects from '../components/projects';
// import { useTheme } from '../context/ContextTheme';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  // const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="pt-20">
          <nav className="text-sm mb-8">
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Inicio
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-600 dark:text-gray-400">Proyectos</span>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Todos mis proyectos
          </h1>
          
          <Projects />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;