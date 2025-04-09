import "./css/style.css";
import "./css/navbar.css";
import "./css/aboutme.css";
import "./css/contact.css";
import "./css/skill&Formacion.css";

import Navbar from "./components/NavBar&Title/Navbar";
import TituloDeSeccion from "./components/NavBar&Title/TituloDeSeccion";
import Aboutme from "./components/Aboutme";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact";
import Skills from "./components/Skills/Skills";
import TimelinePortfolio from "./components/Formacion/TimelinePortfolio";

function App() {
  const AnimatedSectionTitle = ({ text, className, delay, onComplete }) => {
    return (
      <div className="contenedorTitle">
        <TituloDeSeccion
          text={text}
          className={className}
          delay={delay}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={onComplete}
        />
      </div>
    );
  };
  return (
    <div className="app">
      <Navbar
        Proyects="Proyectos"
        Contact="Contacto"
        Skills = "Skills & Formacion"
        disabled={false}
        speed={3}
        className="custom-class"
      />
      <AnimatedSectionTitle text="Acerca de mí" className="title" delay={120} />
      <Aboutme />
      <div id="proyects">
      <AnimatedSectionTitle
        text="Proyectos"
        className="title titleModificado"
        delay={120}
        
      />
      <div >
        <Proyects />
      </div>

      </div>
      <div className="skills-formacion-container" id="skills">
        <div className="skills-formacion-box">
          <AnimatedSectionTitle
            text="Skills"
            className="title titleModificado"
            delay={120}
          />
          <Skills />
        </div>

        <div className="skills-formacion-box">
          <AnimatedSectionTitle
            text="Formación"
            className="title titleModificado"
            delay={120}
          />
          <TimelinePortfolio />
        </div>
      </div>

      <div id="contact">
        <AnimatedSectionTitle
          text="Conectemos!"
          className="title titleModificado"
          delay={120}
        />
        <Contact />
      </div>
    </div>
  );
}

export default App;
