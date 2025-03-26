import React from "react";
import CardProyect from "./CardProyect";

const Proyects = () => {
  return (
    <div className="containerProyects">
      <CardProyect
        title="CoderGym"
        image="/coderGymImage.png"
        description="CoderGym es una página web en desarrollo que ofrece una experiencia inmersiva para quienes buscan inscribirse en un gimnasio. Presenta información sobre instalaciones, clases y tarifas, mientras sirve como un proyecto para perfeccionar habilidades en desarrollo web."
        languages={["HTML", "CSS", "Sass", "Boostrap"]}
        liveDemo="https://codergym-juangodoygrandos-projects.vercel.app/html/tarifas.html"
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.3)"
      ></CardProyect>
      <CardProyect
        title="A&E Finance"
        image="/a&eImage.png"
        description="A&E Finance es una plataforma en desarrollo que permite calcular intereses según las cuotas de un préstamo, mostrar precios de criptomonedas en tiempo real y calcular la cantidad de cripto que se puede obtener por un valor específico."
        languages={["HTML", "CSS", "Boostrap", "Javascript"]}
        liveDemo="https://a-e-finance.vercel.app/"
        className="custom-spotlight-card"
        spotlightColor="rgba(147, 31, 151, 0.3)"
      ></CardProyect>
      <CardProyect
        title="Movix"
        image="/movixImage.png"
        description="Movix es una plataforma de e-commerce desarrollada en React.js que permite explorar, buscar y comprar dispositivos móviles. Optimizada para ofrecer una experiencia de compra fluida tanto en móviles como en escritorio."
        languages={["HTML", "CSS","Javascript", "React Js"]}
        liveDemo="https://movix-react-js-nu.vercel.app/"
        className="custom-spotlight-card"
        spotlightColor="rgba(255, 0, 0, 0.3)"
      ></CardProyect>
    </div>
  );
};

export default Proyects;
