import React, { useEffect, useRef } from 'react';
import './Services.css';

function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.classList.contains('service-left') ? 'reveal-left' : 'reveal-right');
          } else {
            entry.target.classList.remove('reveal-left', 'reveal-right');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (servicesRef.current) {
      const serviceElements = servicesRef.current.querySelectorAll('.service-left, .service-right');
      serviceElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (servicesRef.current) {
        const serviceElements = servicesRef.current.querySelectorAll('.service-left, .service-right');
        serviceElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="services-section py-5" ref={servicesRef} id='services'>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">OUR SERVICES</h2>

        {/* Service 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 service-left">
            <div className="service-content">
              <h3 className="service-title">Instant Slot Booking</h3>
              <p>
                Quickly reserve your slot with real-time availability updates and instant confirmations.
              </p>
              <button className="btn service-btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">Book Now</button>
            </div>
          </div>
          <div className="col-md-6 service-right text-center">
          <img src="./src/assets/bullet.png" alt="Service 2" className="img-fluid rounded" />
            
          </div>
        </div>

        {/* Service 2 */}
        <div className="row align-items-center">
          <div className="col-md-6 service-right text-center">
          <img src="./src/assets/fortuner.png" alt="Service 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 service-left">
            <div className="service-content">
              <h3 className="service-title">Comprehensive Vehicle Servicing</h3>
              <p>
                Get full vehicle health checkups and tailored servicing packages for your car.
              </p>
              <button className="btn service-btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
