import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero/Hero';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/Projects';
import { skills, iconMap } from '../data/Skills';
import { btnPrimary, btnSecondary, card, container, focusRing, linkDraw, sectionTitle } from '../styles/ui';

const featured = [1, 3, 5]
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

const stack = ['PHP', 'CodeIgniter 4', 'React', 'JavaScript', 'MySQL', 'Tailwind', 'Git', 'Docker'].filter(
  (name) => skills.Tecnologias.includes(name) || skills.Herramientas.includes(name)
);

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <a
        href="#contenido"
        className={`sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-[#0a0a0f] ${focusRing}`}
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />

        <section id="projects" aria-labelledby="projects-title" className="py-24">
          <div className={container}>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 id="projects-title" className={sectionTitle}>Proyectos destacados</h2>
              <Link to="/proyectos" className={`text-blue-400 hover:text-blue-300 ${linkDraw}`}>
                Ver los {projects.length} proyectos
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="stack-title" className="border-t border-white/10 py-24">
          <div className={container}>
            <h2 id="stack-title" className={`${sectionTitle} mb-10`}>Tecnologías con las que trabajo</h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stack.map((name) => {
                const entry = iconMap[name];
                const Icon = entry?.icon;
                return (
                  <li key={name} className={`${card} group flex items-center gap-3 px-5 py-4 text-white`}>
                    {Icon && (
                      <Icon
                        size={24}
                        aria-hidden="true"
                        className={`${entry.color} transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none`}
                      />
                    )}
                    <span className="font-medium">{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section aria-labelledby="cta-title" className="border-t border-white/10 py-24">
          <div className={container}>
            <h2 id="cta-title" className={`${sectionTitle} max-w-2xl text-balance`}>
              ¿Tenés un sistema para armar? Contame qué necesitás.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contacto" className={btnPrimary}>Escribirme un mensaje</Link>
              <Link to="/sobre-mi" className={btnSecondary}>Ver mi experiencia</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
