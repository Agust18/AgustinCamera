import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
  
      const form = e.currentTarget;  
      const data = new FormData(form);


      data.append('form-name', 'contact');

    
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      });

       if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
       
        toast.success('¡Mensaje enviado correctamente! Te responderé pronto.', {
          duration: 5000,
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid rgba(34, 197, 94, 0.3)',
          },
        });
      } else {
        throw new Error('Error en la respuesta');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el mensaje. Intenta de nuevo.', {
        duration: 5000,
        style: {
          background: '#1a1a2e',
          color: '#fff',
          border: '1px solid rgba(239, 68, 68, 0.3)',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
     
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      
      <input type="hidden" name="form-name" value="contact" />

      
      <div className="group">
        <label className="block text-gray-300 font-medium mb-2 flex items-center gap-2">
          <FaUser size={16} className="text-blue-400" />
          Nombre
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-5 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20"
          placeholder="Tu nombre"
        />
      </div>

      {/* Email */}
      <div className="group">
        <label className="block text-gray-300 font-medium mb-2 flex items-center gap-2">
          <FaEnvelope size={16} className="text-blue-400" />
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-5 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20"
          placeholder="tu@email.com"
        />
      </div>

      {/* Mensaje */}
      <div className="group">
        <label className="block text-gray-300 font-medium mb-2 flex items-center gap-2">
          <FaPaperPlane size={16} className="text-blue-400" />
          Mensaje
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-5 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-blue-500/50 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 resize-none"
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </div>

      {/* Botón */}
      <motion.button
        type="submit"
        disabled={isLoading || isSubmitted}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          w-full py-4 rounded-xl font-medium text-white transition-all duration-300
          ${isLoading || isSubmitted
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-blue-600 hover:shadow-xl hover:shadow-blue-600/20 hover:scale-[1.02]'
          }
        `}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </span>
        ) : isSubmitted ? (
          '¡Enviado!'
        ) : (
          <span className="flex items-center justify-center gap-2">
            <FaPaperPlane size={18} />
            Enviar mensaje
          </span>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;