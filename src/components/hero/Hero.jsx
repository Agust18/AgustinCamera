import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Hero = () => {
  // const socialLinks = [
  //   { url: 'https://github.com/Agust18', icon: <FaGithub size={22} />, label: 'GitHub' },
  //   { url: 'https://www.linkedin.com/in/agustin-camera-a0258221a/', icon: <FaLinkedin size={22} />, label: 'LinkedIn' },
  //   { url: 'mailto:AgustinCamera16@hotmail.com', icon: <FaEnvelope size={22} />, label: 'Email' },
  // ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0a0a0f] pt-20 md:pt-0">

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            {/* <div className="relative">
           
              <div className="absolute -inset-4 rounded-full bg-[#1a1a2e] blur-xl opacity-10" />
              <div className="absolute -inset-8 rounded-full bg-[#0d1b2a] blur-2xl opacity-20" />

              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-[#1a1a2e]">                 <img
                src="/images/perfil.png"
                alt="Agustín Camera"
                className="w-full h-full object-cover"
              />
              </div>
            </div> */}
          </motion.div>

          <div className="flex-1 text-center md:text-left">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm bg-white/10 border border-white/10 text-blue-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              En búsqueda laboral
            </motion.div>

          
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-3"
            >
              Hola, soy{' '}
              <span className="text-blue-500">
                Agustín
              </span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-4"
            >
              Desarrollador <span className="font-semibold text-blue-400">Full Stack</span>
            </motion.p>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8"
            >
              Enfocado en crear sistemas eficientes y escalables. 
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <Link
                to="/proyectos"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105"
              >
                Ver proyectos
              </Link>
              <Link
                to="/contacto"
                className="px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 backdrop-blur-sm bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
              >
                Contáctame
              </Link>
            </motion.div>


            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3 justify-center md:justify-start"
            > */}
            {/* {socialLinks.map((social, index) => (
                // <a
                //   key={index}
                //   href={social.url}
                //   target="_blank"
                //   rel="noopener noreferrer"
                //   className="p-2.5 rounded-full transition-all hover:scale-110 backdrop-blur-sm bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-blue-400"
                //   aria-label={social.label}
                // >
                //   {social.icon}
                // </a>
              ))} */}
            {/* </motion.div> */}
          </div>
        </div>

        {/* Flecha abajo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <a
            href="#projects"
            className="text-gray-500 hover:text-blue-400 transition-colors animate-bounce block"
          >
            <FaArrowDown size={10} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;