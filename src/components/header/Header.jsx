import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import SocialLinks from '../socialLinks/SocialLink';

// import HeaderThemeToggle from './HeaderThemeToggle';
import HeaderMobileMenu from './HeaderMobileMenu';
// import SocialLinks from '../socialLinks/SocialLink';

const Header = () => {
  const location = useLocation();
  // El menú queda abierto solo en la ruta donde se abrió: al navegar se cierra sin usar un efecto
  const [menuOpenAt, setMenuOpenAt] = useState(null);
  const isMenuOpen = menuOpenAt === location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/30 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
       
        <HeaderLogo />

        <div className="hidden md:flex items-center gap-8">
          <HeaderNav />
          <SocialLinks iconOnly size={18} /> 

        </div>

  
        <div className="flex items-center gap-3 md:hidden">

          
          <button
            onClick={() => setMenuOpenAt(isMenuOpen ? null : location.pathname)}
            className="p-3 rounded-lg hover:bg-white/10 transition"
            aria-label="Menú"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-gray-200" />
            ) : (
              <FaBars size={24} className="text-gray-200" />
            )}
          </button>
        </div>
      </nav>


      <HeaderMobileMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;