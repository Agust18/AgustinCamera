import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaCheck, FaEye } from 'react-icons/fa';
import CertificateModal from './CertificateModal';

const AboutCertificates = ({ certificates }) => {
  const [selectedCert, setSelectedCert] = useState(null);

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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10 w-full"
      >

        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-white">Certificados</h2>
        </div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >

              <div className="relative rounded-lg overflow-hidden border border-white/5 mb-3 h-32">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20">
                    <FaEye size={14} />
                    Ver certificado
                  </span>
                </div>
              </div>


              <div>
                <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                  {cert.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <CertificateModal
        image={selectedCert?.image}
        title={selectedCert?.name}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
};

export default AboutCertificates;