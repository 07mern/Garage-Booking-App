import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    if (isLogin) {
      
      const loginModal = document.getElementById('exampleModal1');
      const signupModal = document.getElementById('exampleModal2');
      if (loginModal && signupModal) {
        const bootstrapLoginModal = bootstrap.Modal.getInstance(loginModal);
        bootstrapLoginModal.hide();
        const bootstrapSignupModal = new bootstrap.Modal(signupModal);
        bootstrapSignupModal.show();
      }
    } else {
      
      const loginModal = document.getElementById('exampleModal1');
      const signupModal = document.getElementById('exampleModal2');
      if (loginModal && signupModal) {
        const bootstrapSignupModal = bootstrap.Modal.getInstance(signupModal);
        bootstrapSignupModal.hide();
        const bootstrapLoginModal = new bootstrap.Modal(loginModal);
        bootstrapLoginModal.show();
      }
    }
  };


  return (
    <>
      {/* Login Modal */}
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" >Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" required/>
                </div>
                <div className="mb-3">
            <label htmlFor="loginRole" className="form-label">Login As</label>
            <select className="form-select" id="loginRole" required>
              <option value="" disabled selected>Select Role</option>
              <option value="user">User</option>
              <option value="garageOwner">Garage Owner</option>
            </select>
          </div>
                <button type="submit" className="btn btn-auth w-100">Login</button>
              </form>
            </div>
            <div className="modal-footer">
              <p className="toggle-text mt-3">
                Don't have an account?{' '}
                <span onClick={toggleForm} className="toggle-link">
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" >Signup</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="signupName" placeholder="Enter your first name" required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="signupName" placeholder="Enter your last name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="signupEmail" placeholder="Enter your email" required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="signupNo" placeholder="Enter your phone number" required/>
                </div>
                <div className="mb-3">
                        <label htmlFor="services" className="form-label" >State</label>
                        <select className="form-select" id="services" name="services" required>
                        <option value="" disabled selected>Select your State</option>
                            <option value="">Maharashtra</option>
                            <option value="">Madhdy Pradesh</option>
                            <option value="">Tamil Nadu</option>
                            <option value="">Uttar Pradesh</option>
                            <option value="">Karnataka</option>
                            <option value="">Bihar</option>
                        </select>
                    </div>
                    <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">City</label>
                  <input type="text" className="form-control" id="signupName" placeholder="Enter your City name" required/>
                </div>

                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" required/>
                </div>
                <div className="mb-3">
                  
                  <input type="password" className="form-control" id="signupPassword" placeholder="Confirm your password" required/>
                </div>
                <button type="submit" className="btn btn-auth w-100">Sign Up</button>
              </form>
            </div>
            <div className="modal-footer">
              <p className="toggle-text mt-3">
                Already have an account?{' '}
                <span onClick={toggleForm} className="toggle-link">
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
