import React from 'react';
import { Link } from 'react-router-dom';
import hospitalLogo from '../../assets/hospital-logo.png';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-container medical-theme">
      <div className="auth-card signup-card">
        <img src={hospitalLogo} alt="Hospital Logo" className="logo" />
        <h2>Register for Health ID</h2>
        <p className="subtitle">Your unified medical identity</p>

        <form>
          <div className="form-grid">
            <div className="input-group">
              <label>Full Name*</label>
              <input type="text" placeholder="Dr. Jane Doe" required />
            </div>

            <div className="input-group">
              <label>Date of Birth*</label>
              <input type="date" required />
            </div>

            <div className="input-group">
              <label>Email*</label>
              <input type="email" placeholder="user@hospital.org" required />
            </div>

            <div className="input-group">
              <label>Mobile*</label>
              <input type="tel" placeholder="+1 () ___-_" required />
            </div>
          </div>

          <div className="consent-checkbox">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              I consent to share my health data with authorized medical providers
            </label>
          </div>

          <button type="submit" className="btn-medical">
            Generate Health ID
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an ID? <Link to="/login">Login here</Link></span>
        </div>
      </div>
    </div>
  );
};