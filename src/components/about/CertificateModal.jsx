// components/About/CertificateModal.jsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const CertificateModal = ({ image, title, isOpen, onClose }) => {
 useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === 'Escape') onClose();
  };

  if (isOpen) {
    document.addEventListener('keydown', handleEsc);
  }

  return () => {
    document.removeEventListener('keydown', handleEsc);
  };
}, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-[#0a0a0f]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl max-h-[90vh] overflow-hidden">

          
              <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

           
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={onClose}
                  className="p-2.5 text-white/80 hover:text-white transition-colors bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-sm border border-white/10 shadow-lg"
                  aria-label="Cerrar certificado"
                >
                  <FaTimes size={18} />
                </button>
              </div>

            
              <div className="relative z-10 p-6 overflow-hidden">

                <div className="flex justify-center">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    Haz click fuera para cerrar
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;