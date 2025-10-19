import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
    // After successful login, navigate to home
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <div className="background-overlay"></div>
        
        <div className="card login-card shadow-lg">
          <div className="card-body">
            {/* Logo */}
            <div className="text-center mb-4">
              <div className="login-logo">
                <svg className="bi bi-check-circle-fill" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">Log in to your account to continue.</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email or Username</label>
                <input
                  type="email"
                  className="form-control login-input"
                  id="email"
                  placeholder="Enter your email or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control login-input password-input"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="btn password-toggle"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="mb-3 text-end">
                <a href="#" className="forgot-password-link">Forgot your password?</a>
              </div>

              <button type="submit" className="btn login-btn">
                Log in
              </button>
            </form>

            {/* Sign up link */}
            <div className="text-center mt-4">
              <p className="signup-text">
                Don't have an account?{' '}
                <button className="signup-link" onClick={handleRegisterClick}>
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;