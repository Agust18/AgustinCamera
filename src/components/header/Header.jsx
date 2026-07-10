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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <FaBars size={24} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>


      <HeaderMobileMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;