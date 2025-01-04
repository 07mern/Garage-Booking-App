import React, { useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pop-up");
          } else {
            entry.target.classList.remove("pop-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = footerRef.current.querySelectorAll(".footer-item");

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const orange = {
    color: "#FF9933",
    fontSize: "20px",
  };

  return (
    <footer className="text-light footer" ref={footerRef} id="footer">
      <div className="container footer-container">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-md-4 footer-item">
            <h3 className="text-garage24">
              <i className="bi bi-car-front"></i>&nbsp;Garage@24
            </h3>
            <p className="mt-3">
              Your one-stop solution for booking the best garages near you.
              Reliable, efficient, and convenient services for all your vehicle
              care needs.
            </p>
            <div className="mt-3 social-icon">
              <a href="#" className="text me-4" aria-label="Facebook" style={orange}>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text me-4" aria-label="Twitter" style={orange}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="text me-4" aria-label="Instagram" style={orange}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text" aria-label="LinkedIn" style={orange}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="row col-md-8 mt-4">
            <div className="col-md-4 footer-item">
              <h5 className="heading mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#hero" className="text-decoration-none text-light">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="text-decoration-none text-light">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="text-decoration-none text-light">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#footer" className="text-decoration-none text-light">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 footer-item">
              <h5 className="heading mb-3">For Garage Owners</h5>
              <p className="mb-2">Partner With Us</p>
              <p className="mb-2">Registration Link</p>
              <p>Contact for Support</p>
            </div>

            <div className="col-md-4 footer-item">
              <h5 className="heading mb-3">Contact Us</h5>
              <p className="mb-2">
                <i className="fa-regular fa-address-book"></i>&nbsp;&nbsp;123 Main,
                Amravati, Maharashtra, India
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone"></i>&nbsp;&nbsp;+1 234 567 890
              </p>
              <p>
                <i className="bi bi-envelope"></i>&nbsp;&nbsp;support@garage24.com
              </p>
            </div>
          </div>
        </div>

        <hr className="bg-light mt-4" />

        {/* Copyright */}
        <div className="row footer-item">
          <div className="col text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text" style={orange}>
                Garage@24
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
