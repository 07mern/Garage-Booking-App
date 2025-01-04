import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {  
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#hero">
          <i className="bi bi-car-front"></i>&nbsp;&nbsp;Garage@24
        </a>
        {/* Navbar Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <button className="btn login" data-bs-toggle="modal" data-bs-target="#exampleModal1">Login</button>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <button className="btn signup" data-bs-toggle="modal" data-bs-target="#exampleModal2">Sign-up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
