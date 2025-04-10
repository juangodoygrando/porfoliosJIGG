import React from "react";

const contact = () => {
  return (
    <div className="contact-container">
      <p className="contactText">
        ¡Hablemos! Estoy disponible para conectar en LinkedIn, GitHub o por
        correo.
      </p>

      <div className="contactIcons">
        <a
          href="https://www.linkedin.com/in/juanignacio-godoygrando/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:juangodoygrando@gmail.com">
          <img src="https://i.postimg.cc/SQ3G1ZpW/gmail.png" alt="Correo" />
        </a>
        <a
          href="https://github.com/juangodoygrando"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://i.postimg.cc/yYRyMFV2/github.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default contact;
