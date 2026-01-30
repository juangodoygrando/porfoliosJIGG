import "./css/style.css";

import Navbar from "./components/NavBar&Title/Navbar";
import TituloDeSeccion from "./components/NavBar&Title/TituloDeSeccion";
import Aboutme from "./components/Aboutme";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

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

  const SectionWrapper = ({ children, title, id }) => (
    <section id={id} className="w-full flex flex-col justify-start items-center relative pt-16 md:pt-20 px-2 md:px-4 scroll-mt-24">
      {title && <AnimatedSectionTitle text={title} className="title" delay={120} />}
      <div className="w-[95%] md:w-[90%] max-w-[1600px] h-auto flex items-center justify-center mx-auto relative z-10 mt-4 md:mt-8 pb-8">
        {children}
      </div>
    </section>
  );

  return (
    <div className="app bg-brand-bg font-sans text-white">
      <Navbar
        Proyects="Proyectos"
        Contact="Contacto"
        Skills="Skills"
        disabled={false}
        speed={3}
        className="custom-class"
      />

      <main className="w-full">
        <section id="about" className="w-full flex flex-col justify-start items-center relative pt-32 md:pt-40 px-2 md:px-4 scroll-mt-24">
          <AnimatedSectionTitle text="Acerca de mí" className="title" delay={120} />
          <div className="w-[95%] md:w-[90%] max-w-[1600px] h-auto flex items-center justify-center mx-auto relative z-10 mt-4 md:mt-8 pb-8">
            <Aboutme />
          </div>
        </section>

        <SectionWrapper id="projects" title="Proyectos">
          <Proyects />
        </SectionWrapper>

        <SectionWrapper id="skills" title="Skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="education" title="Formación">
          <Education />
        </SectionWrapper>

        <SectionWrapper id="contact" title="Conectemos!">
          <Contact />
        </SectionWrapper>
      </main>
    </div>
  );
}

export default App;
