// // // // // // import React, { useState, useRef } from "react";
// // // // // // import QRCode from "react-qr-code";
// // // // // // import { saveAs } from "file-saver"; // Optional for client-side saving

// // // // // // const QrCodeGenerator = () => {
// // // // // //     const [phoneNumber, setPhoneNumber] = useState("");
// // // // // //     const qrRef = useRef(null); // Reference for the QR code element

// // // // // //     const handleFormSubmit = (event) => {
// // // // // //         event.preventDefault();
// // // // // //         const qrValue = `TEL:${phoneNumber}`; // Format phone number for QR code
// // // // // //     };

// // // // // //     const handleSaveQRCode = (event) => {
// // // // // //         if (qrRef.current) {
// // // // // //             // Check if QR code element exists
// // // // // //             const qrData = qrRef.current
// // // // // //                 .querySelector("canvas")
// // // // // //                 .toDataURL("image/png");
// // // // // //             const fileName = "phone-number.png";
// // // // // //             const blob = new Blob(
// // // // // //                 [
// // // // // //                     new Uint8Array(
// // // // // //                         atob(qrData.split(",")[1])
// // // // // //                             .split("")
// // // // // //                             .map((char) => char.charCodeAt(0))
// // // // // //                     ),
// // // // // //                 ],
// // // // // //                 { type: "image/png" }
// // // // // //             ); // Decode Base64 data for saving
// // // // // //             saveAs(blob, fileName); // Use file-saver (optional)
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div>
// // // // // //             <form onSubmit={handleFormSubmit}>
// // // // // //                 <label>
// // // // // //                     Phone Number:
// // // // // //                     <input
// // // // // //                         type="tel"
// // // // // //                         value={phoneNumber}
// // // // // //                         onChange={(e) => setPhoneNumber(e.target.value)}
// // // // // //                         required
// // // // // //                     />
// // // // // //                 </label>
// // // // // //                 {/* <button  type="submit">Generate QR Code</button> */}
// // // // // //             </form>
// // // // // //             {phoneNumber && (
// // // // // //                 <div>
// // // // // //                     <QRCode
// // // // // //                         ref={qrRef}
// // // // // //                         value={`TEL:${phoneNumber}`}
// // // // // //                         size={256}
// // // // // //                         level="H"
// // // // // //                     />
// // // // // //                     <button onClick={handleSaveQRCode}>Save QR Code (Optional)</button>
// // // // // //                 </div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default QrCodeGenerator;

// // // // // import React, { useState, useRef } from "react";
// // // // // import QRCode from "react-qr-code";
// // // // // import { saveAs } from "file-saver"; // Optional for client-side saving

// // // // // const QrCodeGenerator = () => {
// // // // //     const [phoneNumber, setPhoneNumber] = useState("");
// // // // //     const qrRef = useRef(null); // Reference for the QR code element

// // // // //     const handleFormSubmit = (event) => {
// // // // //         event.preventDefault();
// // // // //         const qrValue = `TEL:${phoneNumber}`; // Format phone number for QR code
// // // // //     };

// // // // //     const handleSaveQRCode = () => {
// // // // //         if (qrRef.current) {
// // // // //             const qrData = qrRef.current.querySelector("canvas").toDataURL("image/png");
// // // // //             const fileName = "phone-number.png";
// // // // //             const blob = new Blob(
// // // // //                 [
// // // // //                     new Uint8Array(
// // // // //                         atob(qrData.split(",")[1]).split("").map((char) => char.charCodeAt(0))
// // // // //                     ),
// // // // //                 ],
// // // // //                 { type: "image/png" }
// // // // //             ); // Decode Base64 data for saving
// // // // //             saveAs(blob, fileName);
// // // // //         }
// // // // //     };

// // // // //     const debouncedSaveQRCode = React.useMemo(() => {
// // // // //         // You can use a library like lodash/debounce for more control
// // // // //         // Replace this with your preferred debouncing implementation
// // // // //         return () => {
// // // // //             handleSaveQRCode();
// // // // //         };
// // // // //     }, [handleSaveQRCode]); // Include handleSaveQRCode as a dependency

// // // // //     return (
// // // // //         <div>
// // // // //             <form onSubmit={handleFormSubmit}>
// // // // //                 <label>
// // // // //                     Phone Number:
// // // // //                     <input
// // // // //                         type="tel"
// // // // //                         value={phoneNumber}
// // // // //                         onChange={(e) => setPhoneNumber(e.target.value)}
// // // // //                         required
// // // // //                     />
// // // // //                 </label>
// // // // //                 {/* <button type="submit">Generate QR Code</button> */}
// // // // //             </form>
// // // // //             {phoneNumber && (
// // // // //                 <div>
// // // // //                     <QRCode ref={qrRef} value={`TEL:${phoneNumber}`} size={256} level="H" />
// // // // //                     {qrRef.current && ( // Check if qrRef.current exists before rendering button
// // // // //                         <button onClick={debouncedSaveQRCode}>Save QR Code (Optional)</button>
// // // // //                     )}
// // // // //                 </div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default QrCodeGenerator;

// // // // // import React, { useState } from 'react';
// // // // // import QRCode from 'react-qr-code';

// // // // // const ContactForm = () => {
// // // // //     const [name, setName] = useState('');
// // // // //     const [phoneNumber, setPhoneNumber] = useState('');
// // // // //     const [qrValue, setQrValue] = useState(''); // State for QR code value

// // // // //     const handleFormSubmit = (event) => {
// // // // //         event.preventDefault();
// // // // //         const qrData = `MECARD:N:${name};TEL:${phoneNumber};`;
// // // // //         setQrValue(qrData); // Update QR code value on submit
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             <form onSubmit={handleFormSubmit}>
// // // // //                 <label>
// // // // //                     Name:
// // // // //                     <input
// // // // //                         type="text"
// // // // //                         value={name}
// // // // //                         onChange={(e) => setName(e.target.value)}
// // // // //                         required
// // // // //                     />
// // // // //                 </label>
// // // // //                 <label>
// // // // //                     Phone Number:
// // // // //                     <input
// // // // //                         type="tel"
// // // // //                         value={phoneNumber}
// // // // //                         onChange={(e) => setPhoneNumber(e.target.value)}
// // // // //                         required
// // // // //                     />
// // // // //                 </label>
// // // // //                 <button type="submit">Generate Contact QR Code</button>
// // // // //             </form>
// // // // //             {qrValue && ( // Conditionally render QR code only if qrValue exists
// // // // //                 <QRCode value={qrValue} size={256} level="H" />
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ContactForm;


// // // // // import React, { useState } from 'react';
// // // // // import QRCode from 'react-qr-code';
// // // // // import { saveAs } from 'file-saver'; // For client-side download

// // // // // const ContactForm = () => {
// // // // //     const [name, setName] = useState('');
// // // // //     const [phoneNumber, setPhoneNumber] = useState('');
// // // // //     const [qrValue, setQrValue] = useState(''); // State for QR code value

// // // // //     const handleFormSubmit = (event) => {
// // // // //         event.preventDefault();
// // // // //         const qrData = `MECARD:N:${name};TEL:${phoneNumber};`;
// // // // //         setQrValue(qrData); // Update QR code value on submit
// // // // //     };

// // // // //     const handleDownloadQRCode = () => {
// // // // //         if (!qrValue) return; // Check if QR code exists before downloading

// // // // //         const canvas = document.querySelector('canvas'); // Get the QR code canvas
// // // // //         if (!canvas) return; // Check if canvas exists

// // // // //         const dataURL = canvas.toDataURL('image/png');
// // // // //         const fileName = 'contact.png';
// // // // //         const blob = new Blob([new Uint8Array(atob(dataURL.split(',')[1]).split('').map(char => char.charCodeAt(0)))], { type: 'image/png' }); // Decode Base64 data

// // // // //         saveAs(blob, fileName);
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             <form onSubmit={handleFormSubmit}>
// // // // //                 <label>Name:</label> <br />
// // // // //                 <input
// // // // //                     type="text"
// // // // //                     value={name}
// // // // //                     onChange={(e) => setName(e.target.value)}
// // // // //                     required
// // // // //                 /> <br />
// // // // //                 <label>Phone Number:</label> <br />
// // // // //                 <input
// // // // //                     type="tel"
// // // // //                     value={phoneNumber} maxLength={10} minLength={10} pattern="[6789][0-9]{9}"
// // // // //                     onChange={(e) => setPhoneNumber(e.target.value)}
// // // // //                     required
// // // // //                 /> <br /> <br />
// // // // //                 <button type="submit">Generate Contact QR Code</button>
// // // // //             </form> <br />
// // // // //             {qrValue && (
// // // // //                 <div>
// // // // //                     <QRCode value={qrValue} size={256} level="H" /> <br /> <br /> <br />    
// // // // //                     <button onClick={handleDownloadQRCode}>Download QR Code</button>
// // // // //                 </div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ContactForm;

// // // // // import React, { useState } from 'react';
// // // // // import QRCode from 'react-qr-code';
// // // // // import { saveAs } from 'file-saver'; // For client-side download

// // // // // const ContactForm = () => {
// // // // //     const [name, setName] = useState('');
// // // // //     const [phoneNumber, setPhoneNumber] = useState('');
// // // // //     const [qrValue, setQrValue] = useState(''); // State for QR code value

// // // // //     const handleFormSubmit = (event) => {
// // // // //         event.preventDefault();
// // // // //         const qrData = `MECARD:N:${name};TEL:${phoneNumber};`;
// // // // //         setQrValue(qrData); // Update QR code value on submit
// // // // //     };

// // // // //     const handleDownloadQRCode = () => {
// // // // //         if (!qrValue) return; // Check if QR code exists before downloading

// // // // //         const canvas = document.querySelector('canvas'); // Get the QR code canvas
// // // // //         if (!canvas) return; // Check if canvas exists

// // // // //         const dataURL = canvas.toDataURL('image/png');
// // // // //         const fileName = 'contact.png';
// // // // //         const blob = new Blob([new Uint8Array(atob(dataURL.split(',')[1]).split('').map(char => char.charCodeAt(0)))], { type: 'image/png' }); // Decode Base64 data

// // // // //         saveAs(blob, fileName);
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             <form onSubmit={handleFormSubmit}>
// // // // //                 <label>Name:</label> <br />
// // // // //                 <input
// // // // //                     type="text"
// // // // //                     value={name}
// // // // //                     onChange={(e) => setName(e.target.value)}
// // // // //                     required
// // // // //                 /> <br />
// // // // //                 <label>Phone Number:</label> <br />
// // // // //                 <input
// // // // //                     type="tel"
// // // // //                     value={phoneNumber}
// // // // //                     maxLength={10}
// // // // //                     minLength={10}
// // // // //                     pattern="[6789][0-9]{9}"
// // // // //                     onChange={(e) => setPhoneNumber(e.target.value)}
// // // // //                     required
// // // // //                 /> <br /> <br />
// // // // //                 <button type="submit">Generate Contact QR Code</button>
// // // // //             </form> <br />
// // // // //             {qrValue && (
// // // // //                 <div>
// // // // //                     <QRCode value={qrValue} size={256} level="H" /> <br /> <br /> <br />
// // // // //                     <button onClick={handleDownloadQRCode}>Download QR Code</button>
// // // // //                 </div>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ContactForm;


// // // // import React, { useState, useRef } from 'react';
// // // // import QRCode from 'react-qr-code';
// // // // import { saveAs } from 'file-saver'; // For client-side download

// // // // const ContactForm = () => {
// // // //     const [name, setName] = useState('');
// // // //     const [phoneNumber, setPhoneNumber] = useState('');
// // // //     const [qrValue, setQrValue] = useState(''); // State for QR code value
// // // //     const qrRef = useRef(null); // Reference for the QR code element

// // // //     const handleFormSubmit = (event) => {
// // // //         event.preventDefault();
// // // //         const qrData = `MECARD:N:${name};TEL:${phoneNumber};`;
// // // //         setQrValue(qrData); // Update QR code value on submit
// // // //     };

// // // //     const handleDownloadQRCode = () => {
// // // //         if (!qrValue) return; // Check if QR code exists before downloading

// // // //         // Ensure the QR code element is available
// // // //         if (!qrRef.current) return;

// // // //         const canvas = qrRef.current.querySelector('canvas'); // Get the QR code canvas

// // // //         if (!canvas) return; // Check if canvas exists

// // // //         const dataURL = canvas.toDataURL('image/png');
// // // //         const fileName = 'contact.png';
// // // //         const blob = new Blob([new Uint8Array(atob(dataURL.split(',')[1]).split('').map(char => char.charCodeAt(0)))], { type: 'image/png' }); // Decode Base64 data

// // // //         saveAs(blob, fileName);
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <form onSubmit={handleFormSubmit}>
// // // //                 <label>Name:</label> <br />
// // // //                 <input
// // // //                     type="text"
// // // //                     value={name}
// // // //                     onChange={(e) => setName(e.target.value)}
// // // //                     required
// // // //                 /> <br />
// // // //                 <label>Phone Number:</label> <br />
// // // //                 <input
// // // //                     type="tel"
// // // //                     value={phoneNumber}
// // // //                     maxLength={10}
// // // //                     minLength={10}
// // // //                     pattern="[6789][0-9]{9}"
// // // //                     onChange={(e) => setPhoneNumber(e.target.value)}
// // // //                     required
// // // //                 /> <br /> <br />
// // // //                 <button type="submit">Generate Contact QR Code</button>
// // // //             </form> <br />
// // // //             {qrValue && (
// // // //                 <div>
// // // //                     <QRCode ref={qrRef} value={qrValue} size={256} level="H" /> <br /> <br /> <br />
// // // //                     <button onClick={handleDownloadQRCode}>Download QR Code</button>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ContactForm;


// // // import React, { useState, useRef } from 'react';
// // // import QRCode from 'react-qr-code';
// // // import { saveAs } from 'file-saver'; // For client-side download
// // // import { toPng } from 'html-to-image'; // To convert HTML to image

// // // const ContactForm = () => {
// // //     const [name, setName] = useState('');
// // //     const [phoneNumber, setPhoneNumber] = useState('');
// // //     const [qrValue, setQrValue] = useState(''); // State for QR code value
// // //     const qrRef = useRef(null); // Reference for the QR code element

// // //     const handleFormSubmit = (event) => {
// // //         event.preventDefault();
// // //         const qrData = `MECARD:N:${name};TEL:${phoneNumber};`;
// // //         setQrValue(qrData); // Update QR code value on submit
// // //     };

// // //     const handleDownload = async () => {
// // //         if (qrRef.current) {
// // //             const dataUrl = await toPng(qrRef.current);
// // //             saveAs(dataUrl, 'contact-qr-code.png');
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <form onSubmit={handleFormSubmit}>
// // //                 <label>Name:</label> <br />
// // //                 <input
// // //                     type="text"
// // //                     value={name}
// // //                     onChange={(e) => setName(e.target.value)}
// // //                     required
// // //                 /> <br />
// // //                 <label>Phone Number:</label> <br />
// // //                 <input
// // //                     type="tel"
// // //                     value={phoneNumber}
// // //                     maxLength={10}
// // //                     minLength={10}
// // //                     pattern="[6789][0-9]{9}"
// // //                     onChange={(e) => setPhoneNumber(e.target.value)}
// // //                     required
// // //                 /> <br /> <br />
// // //                 <button type="submit">Generate Contact QR Code</button>
// // //             </form> <br />
// // //             {qrValue && (
// // //                 <div>
// // //                     <QRCode ref={qrRef} value={qrValue} size={256} level="H" />
// // //                     <br />
// // //                     <button onClick={handleDownload}>Download QR Code</button>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default ContactForm;


// // import React, { useState, useRef } from 'react';
// // import QRCode from 'react-qr-code';
// // import { saveAs } from 'file-saver'; // For client-side download
// // import { toPng } from 'html-to-image'; // To convert HTML to image

// // const ContactForm = () => {
// //     const [name, setName] = useState('');
// //     const [phoneNumber, setPhoneNumber] = useState('');
// //     const [qrValue, setQrValue] = useState(''); // State for QR code value
// //     const qrRef = useRef(null); // Reference for the QR code element

// //     const handleFormSubmit = (event) => {
// //         event.preventDefault();
// //         const formattedPhoneNumber = `91${phoneNumber}`; // Format phone number with country code
// //         const qrData = `https://wa.me/${formattedPhoneNumber}`;
// //         setQrValue(qrData); // Update QR code value on submit
// //     };

// //     const handleDownload = async () => {
// //         if (qrRef.current) {
// //             const dataUrl = await toPng(qrRef.current);
// //             saveAs(dataUrl, 'whatsapp-qr-code.png');
// //         }
// //     };

// //     return (
// //         <div>
// //             <form onSubmit={handleFormSubmit}>
// //                 <label>Name:</label> <br />
// //                 <input
// //                     type="text"
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     required
// //                 /> <br />
// //                 <label>Phone Number:</label> <br />
// //                 <input
// //                     type="tel"
// //                     value={phoneNumber}
// //                     maxLength={10}
// //                     minLength={10}
// //                     pattern="[6789][0-9]{9}"
// //                     onChange={(e) => setPhoneNumber(e.target.value)}
// //                     required
// //                 /> <br /> <br />
// //                 <button type="submit">Generate WhatsApp QR Code</button>
// //             </form> <br />
// //             {qrValue && (
// //                 <div>
// //                     <QRCode ref={qrRef} value={qrValue} size={256} level="H" />
// //                     <br />
// //                     <button onClick={handleDownload}>Download QR Code</button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };
// // export default ContactForm;

// import React, { useState, useRef } from 'react';
// import QRCode from 'react-qr-code';
// import { saveAs } from 'file-saver'; // For client-side download
// import { toPng } from 'html-to-image'; // To convert HTML to image

// import "../CSS1/Code.css"

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [qrValue, setQrValue] = useState(''); // State for QR code value
//     const qrRef = useRef(null); // Reference for the QR code element

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         const formattedPhoneNumber = `91${phoneNumber}`; // Format phone number with country code
//         const qrData = `https://wa.me/${formattedPhoneNumber}`;
//         // const qrData = `MECARD:N:${name};TEL:${phoneNumber};`;
//         setQrValue(qrData); // Update QR code value on submit
//     };

//     const handleDownload = async () => {
//         if (qrRef.current) {
//             const dataUrl = await toPng(qrRef.current);
//             saveAs(dataUrl, 'contact-qr-code.png');
//         }
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleFormSubmit}>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <label>Phone Number:</label>
//                 <input
//                     type="tel"
//                     value={phoneNumber}
//                     maxLength={10}
//                     minLength={10}
//                     pattern="[6789][0-9]{9}"
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Generate Contact QR Code</button>
//             </form>
//             {qrValue && (
//                 <div className="qr-code">
//                     <QRCode ref={qrRef} value={qrValue} size={256} level="H" />
//                     <button onClick={handleDownload}>Download QR Code</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ContactForm;


import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { saveAs } from 'file-saver'; // For client-side download
import { toPng } from 'html-to-image'; // To convert HTML to image
import "../CSS1/Code.css"


const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [qrValue, setQrValue] = useState(''); // State for QR code value
    const qrRef = useRef(null); // Reference for the QR code element


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formattedPhoneNumber = `91${phoneNumber}`; // Format phone number with country code
        const qrData = `https://wa.me/${formattedPhoneNumber}?text=Chat%20with%20me`; // WhatsApp URL format with a message
        setQrValue(qrData); // Update QR code value on submit
    };

    const handleDownload = async () => {
        if (qrRef.current) {
            const dataUrl = await toPng(qrRef.current); // Convert QR code element to image
            saveAs(dataUrl, 'whatsapp-qr-code.png'); // Download the image
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
                /> 
                <label>Phone Number:</label>
                <input
                    type="tel"
                    value={phoneNumber}
                    maxLength={10}
                    minLength={10}
                    pattern="[6789][0-9]{9}"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                /> 
                <button type="submit">Generate WhatsApp QR Code</button>
            </form> <br />
            {qrValue && (
                <div>
                    <QRCode ref={qrRef} value={qrValue} size={256} level="H" />
                    <br />
                    <button onClick={handleDownload}>Download QR Code</button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;




