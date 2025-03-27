import React from "react";




const Navbar = ({
  Contact,
  Skills,
  Proyects,
  disabled = false,
  speed = 4,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = 50; 
    const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }
};
  return (
    <nav className="navBar">
      <div className="nav_logo">
        <img
          src="/Juan Ignacio.svg"
          alt="logo-JuanIgnacioGodoyGrando"
        />
      </div>
      <div className="navBarShiny">
        <div
          className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
          style={{ animationDuration }}
          onClick={() => scrollToSection("proyects")}
        >
          {Proyects}
        </div>
        <div
          className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
          style={{ animationDuration }}
          onClick={() => scrollToSection("skills")}
        >
          {Skills}
        </div>
        <div
          className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
          style={{ animationDuration }}
          onClick={() => scrollToSection("contact")}
        >
          {Contact}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
