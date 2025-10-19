import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signup attempt:', formData);
    // After successful registration, navigate to login
    navigate('/login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="Register-container">
      <div className="Register-card-wrapper">
        <div className="card Register-card shadow-lg">
          <div className="card-body">
            
            {/* Header */}
            <div className="mb-4">
              <h1 className="Register-title">Create Your Account</h1>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control Register-input"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control Register-input"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control Register-input password-input"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
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

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="form-control Register-input password-input"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="btn password-toggle"
                    onClick={toggleConfirmPasswordVisibility}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
              </div>

              <button type="submit" className="btn Register-btn">
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-4">
              <p className="login-link-text">
                Already have an account?{' '}
                <button className="login-link" onClick={handleLoginClick}>
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;