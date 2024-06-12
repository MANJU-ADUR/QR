import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver"; // For client-side download
import { toPng } from "html-to-image"; // To convert HTML to image
import "../CSS/Code.css";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [purpose, setPurpose] = useState("");
  const [phoneticSurname, setPhoneticSurname] = useState("");
  const [phoneticMiddleName, setPhoneticMiddleName] = useState("");
  const [phoneticFirstName, setPhoneticFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [qrValue, setQrValue] = useState(""); // State for QR code value
  const [qrBase64, setQrBase64] = useState(""); // State for QR code base64

  const qrRef = useRef(null); // Reference for the QR code element

  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();

  //     if (
  //       !phoneticFirstName ||
  //       !phoneticMiddleName ||
  //       !phoneticSurname ||
  //       !phoneNumber ||
  //       !email ||
  //       !company ||
  //       !title ||
  //       !address ||
  //       !website ||
  //       !purpose
  //     ) {
  //       alert("Please fill in all fields."); // Show alert if any field is empty
  //       return;
  //     }
  //     const formattedPhoneNumber = `+91${phoneNumber}`; // Format phone number with country code

  //     const qrData = `BEGIN:VCARD
  // VERSION:3.0
  // N:${phoneticSurname};${phoneticFirstName};${phoneticMiddleName}
  // FN:${phoneticFirstName} ${phoneticMiddleName} ${phoneticSurname}
  // TEL;TYPE=CELL:${formattedPhoneNumber}
  // EMAIL:${email}
  // ORG:${company}
  // TITLE:${title}
  // ADR;TYPE=WORK:${address}
  // URL:${website}
  // NOTE:${purpose}
  // END:VCARD`;

  //     setQrValue(qrData); // Update QR code value on submit

  //     if (qrRef.current) {
  //       const dataUrl = await toPng(qrRef.current); // Convert QR code element to image
  //       saveAs(dataUrl, "qr-code.png"); // Download the image
  //     }
  //   };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if any field is empty
    const emptyFields = [];
    if (!phoneticFirstName) emptyFields.push("First name");
    if (!phoneticMiddleName) emptyFields.push("Middle name");
    if (!phoneticSurname) emptyFields.push("Surname");
    if (!phoneNumber) emptyFields.push("Phone number");
    if (!email) emptyFields.push("Email");
    if (!company) emptyFields.push("Company");
    if (!title) emptyFields.push("Designation");
    if (!address) emptyFields.push("Address");
    if (!website) emptyFields.push("Website");
    if (!purpose) emptyFields.push("Purpose");

    if (emptyFields.length > 0) {
      // Display alert for empty fields
      alert(`Please fill : ${emptyFields.join(", ")}`);
      return;
    }

    // Format phone number with country code
    const formattedPhoneNumber = `${phoneNumber}`;

    const qrData = `BEGIN:VCARD
VERSION:3.0
N:${phoneticSurname};${phoneticFirstName};${phoneticMiddleName}
FN:${phoneticFirstName} ${phoneticMiddleName} ${phoneticSurname}
TEL;TYPE=CELL:${formattedPhoneNumber}
EMAIL:${email}
ORG:${company}
TITLE:${title}
ADR;TYPE=WORK:${address}
URL:${website}
NOTE:${purpose}
END:VCARD`;

    setQrValue(qrData);

    // if (qrRef.current) {
    //   const dataUrl = await toPng(qrRef.current);
    //   saveAs(dataUrl, "qr-code.png");
    // }
  };

  const cardRef = useRef(null);
  const handleDownloadcard = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current); // Convert card1 division to image
      saveAs(dataUrl, "card1.png"); // Download the image
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <label> First name:</label> <br />
        <input
          type="text"
          onChange={(e) => setPhoneticFirstName(e.target.value)}
          value={phoneticFirstName}
          autoComplete="on"
        />
        <br />
        <label> Middle name:</label> <br />
        <input
          type="text"
          onChange={(e) => setPhoneticMiddleName(e.target.value)}
          value={phoneticMiddleName}
          autoComplete="on"
        />{" "}
        <br />
        <label> Surname:</label> <br />
        <input
          type="text"
          onChange={(e) => setPhoneticSurname(e.target.value)}
          value={phoneticSurname}
          autoComplete="on"
        />{" "}
        <br />
        <label>Phone number:</label> <br />
        <PhoneInput
          id="phone"
          country={"us"} // Default country
          value={phoneNumber}
          onChange={(phone) => setPhoneNumber(phone)}
          autoComplete="on"
        />
        <br />
        <label>Email:</label> <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on"
          value={email}
        />{" "}
        <br />
        <label>Company:</label> <br />
        <input
          type="text"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
          autoComplete="on"
        />{" "}
        <br />
        <label>Designation:</label> <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoComplete="on"
        />{" "}
        <br />
        <label>Address:</label> <br />
        {/* <input
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        /> */}
        <textarea
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        ></textarea>{" "}
        <br />
        <label>Website:</label> <br />
        <input
          type="text"
          onChange={(e) => setWebsite(e.target.value)}
          value={website}
          autoComplete="on"
        />{" "}
        <br />
        <label>Purpose:</label> <br />
        <input
          type="text"
          onChange={(e) => setPurpose(e.target.value)}
          value={purpose}
          autoComplete="on"
        />{" "}
        <br />
        <button type="submit">Generate QR Code</button>
      </form>
      <br />
      {qrValue && (
        <div className="options">
          <div className="card" ref={cardRef}>
            <div className="company">
              <p id="aa">{company}</p>

              <p>{phoneticFirstName}</p>
              <p>
                {" "}
                <img
                  src="https://cdn.icon-icons.com/icons2/1674/PNG/96/phonecall_110970.png"
                  alt=""
                />{" "}
                <small>+{phoneNumber}</small>
              </p>
              <p>
                <img
                  src="https://cdn.icon-icons.com/icons2/2428/PNG/96/gmail_black_logo_icon_147126.png"
                  alt=""
                />{" "}
                {/* <small> */}
                    {" "}
                    <small>{email}</small>
                {/* </small> */}
              </p>
            </div>
            <div className="qrr">
              <div ref={qrRef}>
                <QRCode value={qrValue} size={120} level="H" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          {/* <Link to="/createcard"> */}
          <button onClick={handleDownloadcard}>Dowmload Card</button>
          {/* </Link> */}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
