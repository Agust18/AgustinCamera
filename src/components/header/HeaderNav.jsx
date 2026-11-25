import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ease, focusRing } from '../../styles/ui';

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/sobre-mi', label: 'Sobre Mí' },
  { path: '/contacto', label: 'Contacto' },
];

const HeaderNav = () => {
  const location = useLocation();

  return (
    <>
      {navLinks.map((link) => {
        const active = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            aria-current={active ? 'page' : undefined}
            className={`relative py-1 transition-colors duration-200 ${focusRing} ${
              active ? 'font-semibold text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {link.label}
            {active && (
              <motion.span
                layoutId="nav-indicator"
                transition={{ duration: 0.4, ease }}
                className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-blue-400"
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default HeaderNav;
