import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaRocket, 
  FaUser, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope as FaEnvelopeIcon 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderMobileMenu = ({ isOpen }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio', icon: <FaHome size={18} /> },
    { path: '/proyectos', label: 'Proyectos', icon: <FaRocket size={18} /> },
    { path: '/sobre-mi', label: 'Sobre Mí', icon: <FaUser size={18} /> },
    { path: '/contacto', label: 'Contacto', icon: <FaEnvelope size={18} /> },
  ];

  const socialLinks = [
    { url: 'https://github.com/Agust18', icon: <FaGithub size={20} />, label: 'GitHub' },
    { url: 'https://www.linkedin.com/in/agustin-camera-a0258221a/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
    { url: 'mailto:AgustinCamera16@hotmail.com', icon: <FaEnvelopeIcon size={20} />, label: 'Email' },
  ];

 
  
  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/10 dark:border-gray-800 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6">
            
           
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`
                      flex items-center gap-4 py-3.5 px-5 rounded-xl 
                      transition-all duration-300
                      ${location.pathname === link.path
                        ? 'bg-gradient-to-r from-blue-600 to-blue-600 text-white shadow-lg shadow-blue-600/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400'
                      }
                    `}
                  >
                    <span className={`
                      ${location.pathname === link.path 
                        ? 'text-white' 
                        : 'text-gray-500 dark:text-gray-400'
                      }
                    `}>
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                    
                   
                  
                  </Link>
                </motion.div>
              ))}
            </nav>

           
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="border-t border-white/10 dark:border-gray-800 my-4"
            />

           

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileMenu;