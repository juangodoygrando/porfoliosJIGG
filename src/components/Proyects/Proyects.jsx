import React from "react";
import CardProyect from "./CardProyect";

const Proyects = () => {
  return (
    <div className="containerProyects">
      <CardProyect
        title="CoderGym"
        image="https://i.postimg.cc/gjZcMtqS/coder-Gym-Image.png"
        description="CoderGym es una página web en desarrollo que ofrece una experiencia inmersiva para quienes buscan inscribirse en un gimnasio. Presenta información sobre instalaciones, clases y tarifas, mientras sirve como un proyecto para perfeccionar habilidades en desarrollo web."
        languages={["HTML", "CSS", "Sass", "Boostrap"]}
        liveDemo="https://codergym-juangodoygrandos-projects.vercel.app/html/tarifas.html"
        githubRepo="https://github.com/juangodoygrando/CODERGYM"
        spotlightColor="rgba(0, 229, 255, 0.3)"
      ></CardProyect>
      <CardProyect
        title="A&E Finance"
        image="https://i.postimg.cc/k4ZXvP8R/a-eImage.png"
        description="A&E Finance es una plataforma en desarrollo que permite calcular intereses según las cuotas de un préstamo, mostrar precios de criptomonedas en tiempo real y calcular la cantidad de cripto que se puede obtener por un valor específico."
        languages={["HTML", "CSS", "Boostrap", "Javascript"]}
        liveDemo="https://a-e-finance.vercel.app/"
        githubRepo="https://github.com/juangodoygrando/A-E-FINANCE"
        spotlightColor="rgba(147, 31, 151, 0.3)"
      ></CardProyect>
      <CardProyect
        title="Movix"
        image="https://i.postimg.cc/ydW8R8Jz/movix-Image.png"
        description="Movix es una plataforma de e-commerce desarrollada en React.js que permite explorar, buscar y comprar dispositivos móviles. Optimizada para ofrecer una experiencia de compra fluida tanto en móviles como en escritorio."
        languages={["HTML", "CSS", "Javascript", "React Js"]}
        liveDemo="https://movix-react-js-nu.vercel.app/"
        githubRepo="https://github.com/juangodoygrando/Movix"
        spotlightColor="rgba(255, 0, 0, 0.3)"
      ></CardProyect>
      <CardProyect
        title="Portfolio Personal"
        image="https://i.postimg.cc/901JvmSm/imagen-Portfolio-png.png"
        description="Página personal donde muestro mis proyectos como software developer. Creada con React.js, HTML y CSS, proporciona una experiencia fluida y accesible tanto en dispositivos móviles como de escritorio."
        languages={["HTML", "CSS", "Javascript", "React Js"]}
        
        githubRepo="https://github.com/juangodoygrando/porfoliosJIGG"
        spotlightColor="rgba(65, 41, 41, 0.51)"
      ></CardProyect>
      
    </div>
  );
};

export default Proyects;
