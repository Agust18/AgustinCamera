
import { Link } from 'react-router-dom';
// import { useTheme } from '../context/ContextTheme';

const NotFound = () => {
  // const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center`}>
      <div className="text-center px-4">
     
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">
          404
        </h1>
        
       
        <h2 className="text-3xl font-semibold mt-4 text-gray-800 dark:text-white">
          ¡Página no encontrada!
        </h2>
        
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        
       
        <Link 
          to="/" 
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;