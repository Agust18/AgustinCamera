
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaRocket, FaUser, FaEnvelope } from 'react-icons/fa';

const HeaderNav = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio', icon: <FaHome size={18} /> },
    { path: '/proyectos', label: 'Proyectos', icon: <FaRocket size={18} /> },
    { path: '/sobre-mi', label: 'Sobre Mí', icon: <FaUser size={18} /> },
    { path: '/contacto', label: 'Contacto', icon: <FaEnvelope size={18} /> },
  ];

  return (
    <>
      {navLinks.map(link => (
        <Link
          key={link.path}
          to={link.path}
          className={`flex items-center gap-2 transition-all duration-200 ${
            location.pathname === link.path
              ? 'text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105'
          }`}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default HeaderNav;