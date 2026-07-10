
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <Link 
  to="/" 
  className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
>
  Agustin Camera
</Link>
  );
};

export default HeaderLogo;