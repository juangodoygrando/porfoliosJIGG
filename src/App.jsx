import "./css/style.css";
import "./css/navbar.css";
import "./css/aboutme.css";
import "./css/contact.css";

import Navbar from "./components/Navbar";
import TituloDeSeccion from "./components/TituloDeSeccion";
import Aboutme from "./components/Aboutme";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";

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
        disabled={false}
        speed={3}
        className="custom-class"
      />
      <AnimatedSectionTitle text="Acerca de mí" className="title" delay={120} />
      <Aboutme />
      <AnimatedSectionTitle
        text="Proyectos"
        className="title titleModificado"
        delay={120}
      />
      <div id="proyects">
        <Proyects />
      </div>
      <AnimatedSectionTitle
        text="Conectemos!"
        className="title titleModificado"
        delay={120}
      />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
