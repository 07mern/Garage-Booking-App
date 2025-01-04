import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current.querySelector('.hero-text').classList.add('reveal-left');
          heroRef.current.querySelector('.hero-image').classList.add('reveal-right');
        } else {
          // Optionally reset the reveal effect when the section goes out of view
          heroRef.current.querySelector('.hero-text').classList.remove('reveal-left');
          heroRef.current.querySelector('.hero-image').classList.remove('reveal-right');
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-section py-5" ref={heroRef} id='hero'>
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start px-5 hero-text">
            <h1 className="display-4 fw-bold">SMART BOOKING FOR GARAGE SLOTS</h1>
            <p className="lead text-muted">
              Get the most convenient and reliable vehicle maintenance solutions at your fingertips, with quick access to trusted local garages.
            </p>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-lg book-now" data-bs-toggle="modal" data-bs-target="#exampleModal1">Book Now</button>
              
            </div>
          </div>

          <div className="col-md-6 text-center hero-image">
            <img 
              src="./src/assets/hero_car.png" 
              alt="Car" 
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
