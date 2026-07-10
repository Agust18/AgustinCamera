import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './context/ContextTheme';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>  
  );
}

export default App;