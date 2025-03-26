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
        >
          {Proyects}
        </div>
        <div
          className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
          style={{ animationDuration }}
        >
          {Skills}
        </div>
        <div
          className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
          style={{ animationDuration }}
        >
          {Contact}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
