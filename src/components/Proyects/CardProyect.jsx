import { useState, useEffect, useRef } from "react";
import "../../css/projects.css";

const CardProyect = ({
  title,
  image,
  description,
  languages = [],
  liveDemo,
  githubRepo,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    
    handleResize();
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);



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
          {githubRepo && (
            <a
              href={githubRepo}
              rel="noopener noreferrer"
              target={isMobile ? "_self" : "_blank"}
              className="card-button"
            >
              <img
                src="https://s2.svgbox.net/social.svg?ic=github&color=fff"
                alt="GitHub"
                className="icon-image"
              />
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              rel="noopener noreferrer"
              target={isMobile ? "_self" : "_blank"}
              className="card-button"
            >
              <img
                src="https://s2.svgbox.net/octicons.svg?ic=link-bold&color=fff"
                alt="Live Demo"
                className="icon-image"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProyect;
