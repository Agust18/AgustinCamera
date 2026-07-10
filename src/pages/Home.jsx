import Header from '../components/header';
import Footer from '../components/footer';
// import Projects from '../components/projects/Projects';
// import { useTheme } from '../context/ContextTheme';
import Hero from '../components/hero/Hero';

const Home = () => {
  // const { isDark } = useTheme();
  return (
    <div className={``}>
      <Header />
      <main className="">
        <Hero />
        {/* <section id="projects" className="py-12">
          <Projects />
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
