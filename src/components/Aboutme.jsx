import React from "react";
import "../css/aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutmeBody">
      <div className="aboutmeBodyImg">
        <img
          src="https://i.postimg.cc/dVzLnG9r/41e05968-1aad-4b65-9d53-c3d1aa9cf056.jpg"
          alt="Juan Ignacio Godoy Grando"
        />
      </div>

      <div className="aboutmeBodyText">
        <p>
          Soy Juan Ignacio Godoy Grando, desarrollador frontend especializado en React.js con dos años de experiencia construyendo aplicaciones web modernas y escalables. Nacido en Argentina y establecido en Barcelona desde hace seis años, mi expertise se centra en el ecosistema de React, trabajando intensivamente con React Hooks (useState, useEffect, useContext) y creando componentes reutilizables y modulares aplicando principios de composición y render props.
        </p>

        <p>
          Mi stack técnico incluye JavaScript ES6+, HTML5 semántico y CSS3 moderno (Flexbox, Grid, animaciones), siguiendo metodologías como BEM. He trabajado extensivamente con React Router para SPAs, optimización de performance usando React.memo, useMemo y lazy loading, y integración con APIs REST manejando llamadas asíncronas y estados de carga de forma eficiente.
        </p>

        <p>
          Como desarrollador frontend en React, me enfoco en crear interfaces de usuario intuitivas que sean visualmente atractivas, accesibles y performantes. Aplico principios de responsive design y mobile-first, asegurando que cada aplicación funcione perfectamente en cualquier dispositivo. Mi experiencia con Git y GitHub me permite trabajar de manera colaborativa siguiendo flujos profesionales con branching strategies y code reviews.
        </p>
      </div>
      
      <div className="containerButton">
        <a
          className="buttonDescargarCV"
          href="https://drive.google.com/uc?export=download&id=1wsgYFA5W2MZ5eIyH3k7KyPWDZc5Tr-R3"
          download="Juan Ignacio Godoy Grando - CV.pdf"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export default Aboutme;