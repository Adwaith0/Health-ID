import React from 'react';
import QRScanner from '../../components/QRScanner/QRScanner';
import { login } from '../../services/auth';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Your Health ID Dashboard</h1>
      <div className="scanner-container">
        <QRScanner />
      </div>
      <div className="health-data">
        {/* Health data will be displayed here */}
      </div>
    </div>
  );
};

export default Dashboard;