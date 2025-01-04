import React from 'react';
import './AboutUs.css';
import './About-Ext'

function AboutUs() {
  return (
    <section id="about" className="about-us py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 about-img">
            <img 
              src="./src/assets/carousel-bg-1.jpg" 
              alt="About Us" 
              className="img-fluid rounded shadow"
            />
          </div>
          
          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="about-title">About <span>Garage@24</span></h2>
            <p className="about-description">
              At <strong>Garage@24</strong>, we believe in providing top-notch car repair and maintenance services 
              with unparalleled customer satisfaction. Our experienced mechanics and state-of-the-art equipment 
              ensure your vehicle is in the best hands.
            </p>
            <p className="about-description">
              We specialize in routine maintenance, emergency repairs, and comprehensive servicing solutions. 
              With live availability, transparent pricing, and easy booking options, we make car care hassle-free.
            </p>
            <button className="btn btn-about mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
