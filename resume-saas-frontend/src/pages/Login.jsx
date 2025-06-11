import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const handleGoogleLogin = () => {
    alert("Mock Google login triggered. Will be integrated with Firebase backend later.");
    // Redirect to dashboard or user page if needed
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login to ResumeGenius AI</h2>
        <form>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <div className="divider">or</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="/img/google-icon.svg" alt="Google Icon" className="google-icon" />
          Sign in with Google
        </button>

        <p className="switch-link">
          Don't have an account? <Link to="/Signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
