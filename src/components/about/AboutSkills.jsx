
import { motion } from 'framer-motion';
import { iconMap, categoriesConfig, skills } from '../../data/Skills';
import { FaCode } from 'react-icons/fa';

const AboutSkills = () => {

  
  const activeCategories = Object.entries(skills).filter(
    ([, items]) => Object.values(items).some(arr => arr.length > 0)
  );

  
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 w-full"
    >
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/20">
          <FaCode size={24} className="text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Stack y Herramientas
        </h2>
      </div>

     
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10 w-full"
      >
        {activeCategories.map(([category, items]) => {
          const allItems = Object.values(items).flat();
          const config = categoriesConfig[category] || {
            label: category,
            icon: FaCode,
            iconColor: 'text-gray-400',
            color: 'from-gray-500 to-gray-600',
            borderColor: 'border-gray-500/20',
          };

          const CategoryIcon = config.icon;

          return (
            <motion.div
              key={category}
              variants={itemVariants}
              className="relative w-full"
            >
             
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <CategoryIcon className={config.iconColor} size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {config.label}
                </h3>
                <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                  {allItems.length}
                </span>
              </div>

           
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 w-full"
              >
                {allItems.map((skill) => {
                  const iconData = iconMap[skill];
                  const SkillIcon = iconData?.icon;

                  return (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -4,
                        transition: { duration: 0.2 },
                      }}
                      className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 w-full"
                    >
                    
                      <div className="relative z-10">
                        {SkillIcon ? (
                          <SkillIcon
                            size={32}
                            className={`${iconData.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        ) : (
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs md:text-sm font-bold">
                            {skill.charAt(0)}
                          </div>
                        )}
                      </div>

                     
                      <span className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-300 text-center font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default AboutSkills;