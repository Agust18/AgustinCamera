import { Link } from 'react-router-dom';
// import { useTheme } from '../../context/ContextTheme';
import SocialLinks from '../socialLinks/SocialLink';

const Footer = () => {
  // const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/sobre-mi', label: 'Sobre Mí' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <footer className="bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 mt-auto">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300"
            >
              Agustín Camera
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desarrollador Full Stack.
            
              
              Experiencias digitales modernas y funcionales con React y PHP
            </p>
          </div>

   
          <div>
            <h3 className="font-semibold text-white mb-4">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm hover:pl-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h3 className="font-semibold text-white mb-4">
              Mis contactos
            </h3>
            <div className="flex flex-wrap gap-3">
              <SocialLinks size={22} />
          
            </div>
          </div>
        </div>

   
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} • Todos los derechos reservados.
            <span className="mx-2">•</span>
            Hecho por{' '}
            <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
              Agustín Camera
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;