import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Oculta a navbar durante o scroll
      setIsVisible(false);

      // Reexibe a navbar após 3 segundos sem scroll
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove o listener de scroll e limpa o timeout ao desmontar
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (sectionId) => {
    setShowMenu(false);
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar com controle de visibilidade */}
      <div className={`n-wrapper ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="n-left">
          <div className="name">
            <span className="first-name">Marcelo</span>
            <span className="last-name">Amaral</span>
          </div>
        </div>
        <div>
          <div className="n-list">
            <ul style={{ listStyleType: 'none' }}>
              <li><a href="#about" onClick={() => handleLinkClick("about")}>About</a></li>
              <li><a href="#experience" onClick={() => handleLinkClick("experience")}>Experience</a></li>
              <li><a href="#projects" onClick={() => handleLinkClick("projects")}>Projects</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ícone de menu mobile */}
      <span id="mobile-menu-icon" className="material-symbols-outlined" onClick={toggleMenu}>
        {showMenu ? (
          <span className="material-symbols-outlined" onClick={toggleMenu}>
            close
          </span>
        ) : (
          <span className="material-symbols-outlined" onClick={toggleMenu}>
            menu
          </span>
        )}
      </span>

      {/* Menu mobile */}
      <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
        <ul style={{ listStyleType: 'none' }}>
          <li><a href="#about" onClick={() => handleLinkClick("about")}>About</a></li>
          <li><a href="#experience" onClick={() => handleLinkClick("experience")}>Experience</a></li>
          <li><a href="#projects" onClick={() => handleLinkClick("projects")}>Projects</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
