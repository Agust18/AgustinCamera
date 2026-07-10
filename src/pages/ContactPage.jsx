import Header from '../components/header';
import Footer from '../components/footer';
import { ContactForm } from '../components/contact';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center">
        <div className="w-full max-w-2xl mx-auto">
      
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm mb-8"
          >
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Inicio
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Contacto</span>
          </motion.nav>


          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                  Hablemos
                </h1>
                <p className="text-gray-400 max-w-md mx-auto">
                  ¿Tienes un proyecto o consulta? Contactame.
                </p>
              </div>

             
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />

     
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '16px 24px',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
};

export default ContactPage;