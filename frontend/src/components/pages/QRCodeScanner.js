import React from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = () => {
  const handleScan = (data) => {
    if (data) {
      alert("QR Code Scanned: " + data);
      // process login using QR data
    }
  };

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) handleScan(result?.text);
        }}
        constraints={{ facingMode: 'environment' }}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QRCodeScanner;