import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver"; // Optional for client-side saving

const QrCodeGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const qrRef = useRef(null); // Reference for the QR code element

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const qrValue = `TEL:${phoneNumber}`; // Format phone number for QR code
  };

  const handleSaveQRCode = (event) => {
    if (qrRef.current) {
      // Check if QR code element exists
      const qrData = qrRef.current
        .querySelector("canvas")
        .toDataURL("image/png");
      const fileName = "phone-number.png";
      const blob = new Blob(
        [
          new Uint8Array(
            atob(qrData.split(",")[1])
              .split("")
              .map((char) => char.charCodeAt(0))
          ),
        ],
        { type: "image/png" }
      ); // Decode Base64 data for saving
      saveAs(blob, fileName); // Use file-saver (optional)
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        {/* <button  type="submit">Generate QR Code</button> */}
      </form>
      {phoneNumber && (
        <div>
          <QRCode
            ref={qrRef}
            value={`TEL:${phoneNumber}`}
            size={256}
            level="H"
          />
          {/* <button onClick={handleSaveQRCode}>Save QR Code (Optional)</button> */}
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
