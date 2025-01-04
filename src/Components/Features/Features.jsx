// Features.jsx
import React, { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import featureData from './FeatureData';
import './Features.css';

function Features() {
  const featureSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('pop-in');
              }, index * 100);
            });
          } else {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card) => {
              card.classList.remove('pop-in');
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (featureSectionRef.current) {
      observer.observe(featureSectionRef.current);
    }

    return () => {
      if (featureSectionRef.current) {
        observer.unobserve(featureSectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={featureSectionRef} className="features-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Key Features</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
