import React from "react";
import CardProyect from "./CardProyect";

const Proyects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-4 md:p-12 w-full max-w-7xl mx-auto pb-32 md:pb-12">
      <CardProyect
        title="CoderGym"
        image="/proyectImage/coderGym.png"
        description="CoderGym es una página web en desarrollo que ofrece una experiencia inmersiva para quienes buscan inscribirse en un gimnasio. Presenta información sobre instalaciones, clases y tarifas, mientras sirve como un proyecto para perfeccionar habilidades en desarrollo web."
        languages={["HTML", "CSS", "Sass", "Boostrap"]}
        liveDemo="https://codergym.vercel.app/"
        githubRepo="https://github.com/juangodoygrando/CODERGYM"
        spotlightColor="rgba(0, 229, 255, 0.3)"
      ></CardProyect>
      <CardProyect
        title="A&E Finance"
        image="/proyectImage/a&e.png"
        description="A&E Finance es una plataforma en desarrollo que permite calcular intereses según las cuotas de un préstamo, mostrar precios de criptomonedas en tiempo real y calcular la cantidad de cripto que se puede obtener por un valor específico."
        languages={["HTML", "CSS", "Boostrap", "Javascript"]}
        liveDemo="https://a-e-finance.vercel.app/"
        githubRepo="https://github.com/juangodoygrando/A-E-FINANCE"
        spotlightColor="rgba(147, 31, 151, 0.3)"
      ></CardProyect>
      <CardProyect
        title="Movix"
        image="/proyectImage/movix.png"
        description="Movix es una plataforma de e-commerce desarrollada en React.js que permite explorar, buscar y comprar dispositivos móviles. Optimizada para ofrecer una experiencia de compra fluida tanto en móviles como en escritorio."
        languages={["HTML", "CSS", "Javascript", "React Js"]}
        liveDemo="https://movix-react-js-nu.vercel.app/"
        githubRepo="https://github.com/juangodoygrando/Movix"
        spotlightColor="rgba(255, 0, 0, 0.3)"
      ></CardProyect>
      <CardProyect
        title="Portfolio Personal"
        image="/proyectImage/portfolio.png"
        description="Página web personal donde presento mis proyectos como frontend developer. Desarrollada con React, HTML y Tailwind CSS, ofrece una experiencia fluida, responsiva y accesible en dispositivos móviles y de escritorio."
        languages={["HTML", "CSS", "Javascript", "React Js"]}

        githubRepo="https://github.com/juangodoygrando/porfoliosJIGG"
        spotlightColor="rgba(65, 41, 41, 0.51)"
      ></CardProyect>
      <CardProyect
        title="Cofferoasters"
        image="/proyectImage/coffeeroasters.png"
        description="Aplicación web desarrollada en Angular, que permite a los usuarios crear planes de suscripción de café personalizados. Incluye un asistente interactivo paso a paso para definir preferencias como tipo de café y frecuencia de entrega, ofreciendo una experiencia intuitiva y personalizada."
        languages={["HTML", "TypeScript", "Angular","Tailwind CSS", "postCSS", ]}
        liveDemo="https://cofferoasters-one.vercel.app/"
        githubRepo="https://github.com/juangodoygrando/Sprint_5_Angular.git"
        spotlightColor="rgba(255, 0, 0, 0.3)"
      ></CardProyect>

    </div>
  );
};

export default Proyects;
