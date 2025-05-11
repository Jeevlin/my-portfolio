import './App.css';
import HeroSection from './components/herocomponents';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
       <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
     
    </div>
  );
}

export default App;
