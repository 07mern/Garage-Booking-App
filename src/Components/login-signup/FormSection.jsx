import React, { useEffect, useRef, useState } from 'react';
import './FormSection.css';

const FormSection = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formSectionRef = useRef(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up');
          } else {
            entry.target.classList.remove('pop-up');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (formSectionRef.current) {
      const elements = formSectionRef.current.querySelectorAll('.auth-info, .auth-form');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (formSectionRef.current) {
        const elements = formSectionRef.current.querySelectorAll('.auth-info, .auth-form');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="auth-section" id="form" ref={formSectionRef}>
      <div className="container-fluid container">
        <div className="row auth-container">
          {/* Info Section */}
          <div className="col-md-6 auth-info d-flex align-items-center justify-content-center">
            <div className="text-center">
              {isLogin ? (
                <>
                  <h2>Welcome Back!</h2>
                  <p>
                    We’ve missed you! Log in to access your dashboard, book more services, and stay connected with the
                    best garages near you.
                  </p>
                </>
              ) : (
                <>
                  <h2>Join Us Today!</h2>
                  <p>
                    Sign up now to start finding top-rated garages, book services in seconds, and enjoy seamless vehicle
                    care with us.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Form Section */}
          <div className="col-md-6 auth-form">
            <div className="form-container">
              {isLogin ? (
                <>
                  <h3>Login</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="loginEmail" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="loginPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        placeholder="Enter your password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </form>
                  <p className="toggle-text mt-3">
                    Don't have an account?{' '}
                    <span onClick={toggleForm} className="toggle-link">
                      Sign Up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h3>Sign Up</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="signupName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="signupName"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signupEmail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="signupEmail"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signupPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="signupPassword"
                        placeholder="Create a password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Sign Up
                    </button>
                  </form>
                  <p className="toggle-text mt-3">
                    Already have an account?{' '}
                    <span onClick={toggleForm} className="toggle-link">
                      Login
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
