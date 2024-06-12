


// import React, { useState, useRef } from "react";
// import QRCode from "react-qr-code";
// import { saveAs } from "file-saver"; // For client-side download
// import { toPng } from "html-to-image"; // To convert HTML to image
// import "../CSS1/Code.css";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ContactForm = () => {
//     const [purpose, setPurpose] = useState("");
//     const [phoneticSurname, setPhoneticSurname] = useState("");
//     const [phoneticMiddleName, setPhoneticMiddleName] = useState("");
//     const [phoneticFirstName, setPhoneticFirstName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [email, setEmail] = useState("");
//     const [company, setCompany] = useState("");
//     // const [department, setDepartment] = useState("");
//     const [title, setTitle] = useState("");
//     const [address, setAddress] = useState("");
//     const [website, setWebsite] = useState("");
//     const [qrValue, setQrValue] = useState(""); // State for QR code value
//     const qrRef = useRef(null); // Reference for the QR code element

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         const formattedPhoneNumber = `+91${phoneNumber}`; // Format phone number with country code

//         const qrData = `BEGIN:VCARD
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

//         setQrValue(qrData); // Update QR code value on submit
//     };

//     const handleDownload = async () => {
//         if (qrRef.current) {
//             const dataUrl = await toPng(qrRef.current); // Convert QR code element to image
//             saveAs(dataUrl, "qr-code.png"); // Download the image
//         }
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleFormSubmit}>
//                 <label>Phone number:</label>
//                 <input
//                     type="tel"
//                     value={phoneNumber}
//                     maxLength={10}
//                     minLength={10}
//                     pattern="[6789][0-9]{9}"
//                     placeholder="Enter Phone Number"
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     required
//                 />
//                 <label>Phonetic first name:</label>
//                 <input
//                     type="text"
//                     onChange={(e) => setPhoneticFirstName(e.target.value)}
//                     value={phoneticFirstName}
//                 />
//                 <label>Phonetic middle name:</label>
//                 <input
//                     type="text"
//                     onChange={(e) => setPhoneticMiddleName(e.target.value)}
//                     value={phoneticMiddleName}
//                 />
//                 <label>Phonetic surname:</label>
//                 <input
//                     type="text"
//                     onChange={(e) => setPhoneticSurname(e.target.value)}
//                     value={phoneticSurname}
//                 />
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     value={email}
//                 />
//                 <label>Company:</label>
//                 <input
//                     type="text"
//                     placeholder="Company"
//                     onChange={(e) => setCompany(e.target.value)}
//                     value={company}
//                 />

//                 <label>Title:</label>
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     onChange={(e) => setTitle(e.target.value)}
//                     value={title}
//                 />
//                 <label>Address:</label>
//                 <input
//                     type="text"
//                     placeholder="Address"
//                     onChange={(e) => setAddress(e.target.value)}
//                     value={address}
//                 />
//                 <label>Website:</label>
//                 <input
//                     type="text"
//                     placeholder="Website"
//                     onChange={(e) => setWebsite(e.target.value)}
//                     value={website}
//                 />
//                 <label>Purpose:</label>
//                 <input
//                     type="text"
//                     placeholder="Purpose"
//                     onChange={(e) => setPurpose(e.target.value)}
//                     value={purpose}
//                 />
//                 <button type="submit">Generate QR Code</button>
//             </form>
//             <br />
//             {qrValue && (
//                 <div>
//                     <div ref={qrRef}>
//                         <QRCode value={qrValue} size={256} level="H" />
//                     </div>
//                     <br />
//                     <button onClick={handleDownload}>Download QR Code</button>
//                     <br />
//                     <br />
//                     <Link to="/createcard">
//                         <button>Create Card</button>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ContactForm;



// // DEPT:${department}
// {/* <label>Department:</label>
// <input
//     type="text"
//     placeholder="Department"
//     onChange={(e) => setDepartment(e.target.value)}
//     value={department}
// /> */}



import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver"; // For client-side download
import { toPng } from "html-to-image"; // To convert HTML to image
import "../CSS1/Code.css";
import axios from "axios";
import { Link } from "react-router-dom";

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

    const [qrcode, setqrcode] = useState("")
    const qrRef = useRef(null); // Reference for the QR code element

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formattedPhoneNumber = `+91${phoneNumber}`; // Format phone number with country code

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

        setQrValue(qrData); // Update QR code value on submit

        if (qrRef.current) {
            const dataUrl = await toPng(qrRef.current); // Convert QR code element to image
            saveAs(dataUrl, "qr-code.png"); // Download the image

            // Convert QR code image to base64
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = function () {
                const base64data = reader.result;
                setQrBase64(base64data); // Set QR code base64
                // Here you can make an API call to store qrBase64 in the database
            };
            reader.readAsDataURL(blob);
        }
    };

    const handleDownload = async () => {
        if (qrRef.current) {
            const dataUrl = await toPng(qrRef.current); // Convert QR code element to image
            saveAs(dataUrl, "qr-code.png"); // Download the image

            // Convert QR code image to base64
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = function () {
                const base64data = reader.result;
                setQrBase64(base64data); // Set QR code base64
                // Here you can make an API call to store qrBase64 in the database
            };
            reader.readAsDataURL(blob);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <label>Phone number:</label>
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
                <label>Phonetic first name:</label>
                <input
                    type="text"
                    onChange={(e) => setPhoneticFirstName(e.target.value)}
                    value={phoneticFirstName}
                />
                <label>Phonetic middle name:</label>
                <input
                    type="text"
                    onChange={(e) => setPhoneticMiddleName(e.target.value)}
                    value={phoneticMiddleName}
                />
                <label>Phonetic surname:</label>
                <input
                    type="text"
                    onChange={(e) => setPhoneticSurname(e.target.value)}
                    value={phoneticSurname}
                />
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label>Company:</label>
                <input
                    type="text"
                    placeholder="Company"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                />
                <label>Title:</label>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label>Address:</label>
                <input
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                />
                <label>Website:</label>
                <input
                    type="text"
                    placeholder="Website"
                    onChange={(e) => setWebsite(e.target.value)}
                    value={website}
                />
                <label>Purpose:</label>
                <input
                    type="text"
                    placeholder="Purpose"
                    onChange={(e) => setPurpose(e.target.value)}
                    value={purpose}
                />
                <button type="submit">Generate QR Code</button>
            </form>
            <br />
            {qrValue && (
                <div>
                    <div ref={qrRef}>
                        <QRCode value={qrValue} size={256} level="H" />
                    </div>
                    <br />
                    {/* <button onClick={handleDownload}>Download QR Code</button> */}
                    <br />
                    <br />
                    <Link to="/createcard">
                        <button>Create Card</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
