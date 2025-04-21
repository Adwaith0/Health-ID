import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Ensure the file exists in the correct location

const Login = () => {
  return (
    <div className="auth-container medical-theme">
      <div className="auth-card">
        <img src={hospitalLogo} alt="Hospital Logo" className="logo" />
        <h2>Health ID Portal</h2>
        <p className="subtitle">Secure access to your medical records</p>

        <form>
          <div className="input-group">
            <label>Health ID / Email</label>
            <input type="text" placeholder="e.g. MHID-1234" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-medical">
            Login
          </button>

          <div className="auth-footer">
            <Link to="/forgot-password">Forgot Password?</Link>
            <span>New user? <Link to="/signup">Create Health ID</Link></span>
          </div>
        </form>

        <div className="auth-divider">OR</div>

        <div className="alternative-auth">
          <button className="btn-outline">
            <i className="fas fa-fingerprint"></i> Fingerprint Login
          </button>
          <button className="btn-outline">
            <i className="fas fa-qrcode"></i> Scan QR Code
          </button>
        </div>
      </div>

      <div className="medical-disclaimer">
        <p>© 2023 National Health ID System. All data is HIPAA compliant.</p>
      </div>
    </div>
  );
};

export default Login;