import React from "react";

const Navbar = ({
  Contact = "Contact", 
  /* Skills = "Skills", */ 
  Proyects = "Projects",
  disabled = false,
  speed = 4,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  const menuItems = [
    { name: Proyects, target: "proyects" },
    /* { name: Skills, target: "skills" }, */
    { name: Contact, target: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="navBar">
      <div className="nav_logo">
        <img src="/Juan Ignacio.svg" alt="logo-JuanIgnacioGodoyGrando" />
      </div>
      <div className="navBarShiny">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
            style={{ animationDuration }}
            onClick={() => scrollToSection(item.target)}
            aria-label={`Scroll to ${item.name}`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
