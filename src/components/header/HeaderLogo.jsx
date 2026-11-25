import { Link } from 'react-router-dom';
import { display, focusRing } from '../../styles/ui';

const HeaderLogo = () => {
  return (
    <Link
      to="/"
      className={`${display} text-xl font-bold text-white transition-colors duration-200 hover:text-blue-400 md:text-2xl ${focusRing}`}
    >
      Agustín Camera
    </Link>
  );
};

export default HeaderLogo;
