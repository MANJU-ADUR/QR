import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver"; // For client-side download
import { toPng } from "html-to-image"; // To convert HTML to image
import "../CSS/Code.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [purpose, setpurpose] = useState("");

  const [Surname, setSurname] = useState("");
  const [Phoneticsurname, setphoneticsurname] = useState("");
  const [Phoneticmiddlename, setphoneticmiddlename] = useState("");
  const [Phonetifirstname, setphonetifirstname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qrValue, setQrValue] = useState(""); // State for QR code value
  const qrRef = useRef(null); // Reference for the QR code element

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formattedPhoneNumber = `91${phoneNumber}`; // Format phone number with country code
    // const qrData = `https://wa.me/${formattedPhoneNumber}?text=Hey%20this%20is%20manjuunath`; // WhatsApp URL format with a message
    const qrData = `MECARD:N:${name};TEL:${phoneNumber};Surname:${Surname};Phonetic surname:${Phoneticsurname};Phonetic middle name:${Phoneticmiddlename}; Phonetic first name:${Phonetifirstname}`;
    setQrValue(qrData); // Update QR code value on submit

    if ((name, purpose)) {
      let userdata = { name, purpose };
      axios
        .post(`http://localhost:1211/users`, userdata)
        .then((res) => {
          // console.log(res);
          // alert("Posted");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  const handleDownload = async () => {
    if (qrRef.current) {
      const dataUrl = await toPng(qrRef.current); // Convert QR code element to image
      saveAs(dataUrl, "qr-code.png"); // Download the image
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="name"
        />
        <label>Phno number:</label>
        <input
          type="tel"
          value={phoneNumber}
          maxLength={10}
          minLength={10}
          pattern="[6789][0-9]{9}"
          placeholder="Enter Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label htmlFor="">Surname</label>
        <input
          type="text"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          value={Surname}
        />
        <label htmlFor="">first name</label>
        <input
          type="text"
          onChange={(e) => {
            setphonetifirstname(e.target.value);
          }}
          value={Phonetifirstname}
        />
        <label htmlFor="">middle name</label>
        <input
          type="text"
          onChange={(e) => {
            setphoneticmiddlename(e.target.value);
          }}
          value={Phoneticmiddlename}
        />
        <label htmlFor="">Phonetic surname</label>
        <input
          type="text"
          onChange={(e) => {
            setphoneticsurname(e.target.value);
          }}
          value={Phoneticsurname}
        />
        <label>Purpose:</label>
        <input
          type="text"
          placeholder="purpose"
          onChange={(e) => {
            setpurpose(e.target.value);
          }}
          value={purpose}
        />
        <button type="submit">Generate QR Code</button>
      </form>{" "}
      <br />
      {qrValue && (
        <div>
          <QRCode ref={qrRef} value={qrValue} size={256} level="H" />
          <br />
          <button onClick={handleDownload}>Download QR Code</button> <br />{" "}
          <br />
          <Link to="/createcard">
            <button>Create Card</button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
