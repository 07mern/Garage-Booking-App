import React from 'react';
import './About-Ext.css';
import member1 from '../../assets/Screenshot (83).png';
import member2 from '../../assets/Screenshot (84).png';
import member3 from '../../assets/Screenshot (83).png';
import member4 from '../../assets/Screenshot (84).png';

const AboutExt = () => {
  const teamMembers = [
    { id: 1, name: 'Satvik Deshmukh', image: member1 },
    { id: 2, name: 'John Doe', image: member2 },
    { id: 3, name: 'Jane Smith', image: member3 },
    { id: 4, name: 'Jane Smith', image: member4 },
  ];

  return (

<>
    
    
   
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
            
        <div className="about-container">
        
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to our platform! We are dedicated to providing seamless experiences 
          through innovative technology solutions. Our goal is to make your journey effortless.
        </p>
      </section>
      
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          To revolutionize user engagement through intuitive design, robust performance, 
          and customer-centric approaches.
        </p>
        
        <h2>Our Vision</h2>
        <p>
          Creating a world where technology empowers people and enhances everyday life.
        </p>
      </section>
      
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
        </div>
      </div>
    </div>


    
    </>
  );
};

export default AboutExt;
