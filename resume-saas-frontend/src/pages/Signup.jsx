import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  const handleGoogleSignup = () => {
    alert("Mock Google signup triggered. This will be wired to Firebase later.");
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>

        <div className="divider">or</div>

        <button className="google-btn" onClick={handleGoogleSignup}>
          <img src="/img/google-icon.svg" alt="Google Icon" className="google-icon" />
          Sign up with Google
        </button>

        <p className="switch-link">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
