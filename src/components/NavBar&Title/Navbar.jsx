import React from "react";

const Navbar = ({
  Contact = "Contact",
  Skills = "Skills",
  Proyects = "Projects",
  disabled = false,
  speed = 4,
  className = "",
}) => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { name: Proyects, sectionId: 'projects' },
    { name: Skills, sectionId: 'skills' },
    { name: Contact, sectionId: 'contact' },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[1600px] z-50 flex justify-center md:justify-between items-center px-6 md:px-12 lg:px-24 py-2 md:py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg text-white transition-all duration-300">
      <div className="h-24 w-auto md:h-24 cursor-pointer min-w-[160px] md:min-w-[180px] flex items-center" onClick={() => scrollToSection('about')}>
        <img src="/Juan Ignacio.svg" alt="logo" className="h-full w-full object-contain" />
      </div>

      <div className="hidden md:flex gap-8 lg:gap-12">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer hover:opacity-100 transition-opacity font-display text-xl lg:text-2xl tracking-wider shiny-text ${className}`}
            onClick={() => scrollToSection(item.sectionId)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
