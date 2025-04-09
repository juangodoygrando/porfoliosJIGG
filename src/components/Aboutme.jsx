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
          Soy desarrollador de software apasionado por la tecnología y el
          diseño. Nací en Argentina y hace seis años me mudé a Barcelona.
          Después de algunos años en el sector logístico, hace más de un año
          decidí dar un giro a mi carrera y enfocarme en el desarrollo de
          software, un área que siempre me llamó la atención por su creatividad
          y dinamismo.
        </p>

        <p>
          Me encanta la parte visual del desarrollo, la experiencia del usuario
          y la optimización de interfaces. Disfruto pensando en cómo mejorar la
          usabilidad y hacer que los sitios web sean más atractivos e
          intuitivos.
        </p>

        <p>
          Mi objetivo es seguir creciendo como desarrollador frontend, aportar
          soluciones innovadoras y crear experiencias digitales que marquen la
          diferencia.
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
