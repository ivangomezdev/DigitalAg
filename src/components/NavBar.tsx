import React, { useState } from "preact/compat";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="botkers__header">
      <div className="botkers__logo">

      </div>

      <button className="botkers__hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : ""}
      </button>

      <nav className={`botkers__nav ${isMenuOpen ? "botkers__nav--open" : ""}`}>
        <div className="botkers__nav-item">
          <a className="botkers__nav-link">Qué hacemos</a>
        </div>
        <div className="botkers__nav-item">
          <a href="#" className="botkers__nav-link">Quiénes somos</a>
        </div>
        <div className="botkers__nav-item">
          <a href="#" className="botkers__nav-link">Reseñas</a>
        </div>
      </nav>

      <button className="botkers__contact-btn botkers__contact-btn--header">Contáctanos</button>
    </header>
  );
};

export default NavBar;