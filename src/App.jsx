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
  const handleAnimationComplete = () => {
    
  };

  return (
    <div className="app">
      <Navbar
        Proyects="Proyectos"
        /* Skills="Skills" */
        Contact="Contacto"
        disabled={false}
        speed={3}
        className="custom-class"
      />
      <div className="contenedorTitle">
        <TituloDeSeccion
          text="Acerca de mí"
          className="title"
          delay={120}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <Aboutme />
      <div className="contenedorTitle">
        <TituloDeSeccion
          text="Proyectos"
          className="title titleModificado"
          delay={120}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      
      <Proyects />
      {/* <div className="contenedorTitle">
        <TituloDeSeccion
          text="Skills"
          className="title titleModificado"
          delay={180}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
       
      </div> */}
      <div className="contenedorTitle">
        <TituloDeSeccion
          text="Conectemos!"
          className="title titleModificado"
          delay={120}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <Contact/>
    </div>
  );
}

export default App;
