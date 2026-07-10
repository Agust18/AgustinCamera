import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const AboutExperience = ({ personalInfo, experience }) => {
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full mt-10"
    >
     
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/20">
          <FaBriefcase size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Experiencia</h2>
          <p className="text-sm text-gray-400 mt-1 hidden sm:block">Mi trayectoria profesional</p>
        </div>
      </div>

     
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
     
   

     
        <motion.div
          variants={itemVariants}
          className="group relative overflow-hidden rounded-2xl p-6 md:p-7 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
           
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <FaBriefcase className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {experience[0]?.company || 'Experiencia Profesional'}
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 flex-shrink-0">
                <FaCalendarAlt size={12} />
                <span>{experience[0]?.period || 'Actualidad'}</span>
              </div>
            </div>

            {/* Rol */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {experience[0]?.role || 'Desarrollador Full Stack'}
              </span>
            </div>

           

            {/* Logros */}
            {experience[0]?.achievements && experience[0].achievements.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-400 font-medium">{experience[0].description}</p>
                <ul className="space-y-1.5">
                  {experience[0].achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-emerald-400 mt-1 flex-shrink-0">▸</span>
                      <span>{achievement || 'Sin detalles adicionales'}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </div>
        </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default AboutExperience;