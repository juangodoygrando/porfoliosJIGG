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
          Soy un desarrollador web frontend apasionado por la tecnología y el
          diseño. Nací en Argentina y hace seis años me mudé a Barcelona.
          Después de algunos años en el sector logístico, hace más de un año
          decidí dar un giro a mi carrera y enfocarme en el desarrollo web, un
          área que siempre me llamó la atención por su creatividad y dinamismo.
        </p>

        <p>
          Me encanta la parte visual del desarrollo frontend, la experiencia del
          usuario y la optimización de interfaces. Disfruto pensando en cómo
          mejorar la usabilidad y hacer que los sitios web sean más atractivos e
          intuitivos.
        </p>

        <p>
          Para formarme, he completado tres bootcamps especializados en
          Desarrollo Web, JavaScript y React.js, además de obtener un
          certificado de profesionalidad en Desarrollo de Aplicaciones con
          Tecnologías Web. Actualmente, sigo ampliando mis conocimientos y
          explorando nuevas herramientas y tecnologías para perfeccionar mis
          habilidades.
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
          href="https://drive.google.com/uc?export=download&id=11WauAB_BzGZ4I5h2mQO4g5uVJeWnpiOZ
"
          download="Juan Ignacio Godoy Grando - CV.pdf"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export default Aboutme;
