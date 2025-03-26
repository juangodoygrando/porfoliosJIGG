import { useRef } from "react";
import "../css/proyects.css";

const CardProyect = ({
  title,
  image,
  description,
  languages = [],
  liveDemo,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      <h3 className="card-title">{title}</h3>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <ul className="card-languages">
          {languages.slice(0, 5).map((lang, index) => (
            <li key={index} className="card-language">
              {lang}
            </li>
          ))}
        </ul>
        <div className="containerLiveDemo">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          Ver proyecto
        </a>
        </div>
      </div>
    </div>
  );
};

export default CardProyect;
