import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SocialLinks from '../socialLinks/SocialLink';
import { btnPrimary, btnSecondary, container, display, ease } from '../../styles/ui';

const title = 'Software de gestión para negocios que hoy llevan todo a mano.';

const words = title.split(' ');

// Una sola entrada coreografiada: el titular sube palabra por palabra, el resto sigue
const wordVariant = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.7, ease } },
};

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="flex min-h-screen items-center pt-28 pb-20">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          <motion.h1
            id="hero-title"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            aria-label={title}
            className={`${display} text-4xl font-bold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl`}
          >
            {words.map((word, i) => (
              <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span variants={wordVariant} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p {...fadeUp(0.55)} className="mt-7 max-w-xl text-lg leading-relaxed text-gray-300">
            Soy Agustín Camera, desarrollador Full Stack. Armo sistemas de turnos,
            pedidos y paneles con roles, en PHP, Laravel y React. Hoy trabajo en
            equipo en UTN Soft Labs.
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="mt-9 flex flex-wrap gap-4">
            <Link to="/proyectos" className={btnPrimary}>
              Ver proyectos
              <FaArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
            <Link to="/contacto" className={btnSecondary}>
              Escribirme un mensaje
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.75)} className="mt-10">
            <SocialLinks iconOnly size={20} />
          </motion.div>
        </div>

        <motion.figure
          initial={{ clipPath: 'inset(0 0 100% 0 round 16px)', opacity: 0.4 }}
          animate={{ clipPath: 'inset(0 0 0% 0 round 16px)', opacity: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11121a] shadow-2xl shadow-black/50"
        >
          <img
            src="/images/sistema-clinica.png"
            alt="Pantalla del sistema de turnos para clínicas que desarrollé"
            width="960"
            height="600"
            className="aspect-[8/5] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default Hero;
