import Header from '../components/header';
import Footer from '../components/footer';
import { AboutSkills } from '../components/about';
import {AboutCertificates} from "../components/about";
import { personalInfo } from '../data/About';
import { experience } from '../data/Experience';
import {AboutExperience} from '../components/about';
import { skills } from '../data/Skills';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="pt-20 max-w-5xl mx-auto">
          
          <nav className="text-sm mb-8">
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Inicio
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Sobre Mí</span>
          </nav>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-6 md:p-8 space-y-8">    
              <div className="border-t border-white/10" />
              <AboutExperience personalInfo={personalInfo} experience={experience} />
              <AboutCertificates certificates={personalInfo.certificates} />       
              <div className="border-t border-white/10" />          
              <AboutSkills skills={skills} />            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/contacto"
                  className="group inline-flex items-center gap-2 bg-blue-800  text-white px-6 py-3 rounded-lg font-medium hover:shadow-md hover:scale-102 transition-all duration-300"
                >
                  Contactame
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;