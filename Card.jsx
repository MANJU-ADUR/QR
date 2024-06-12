
import React, { useState, useRef } from "react";
import { toPng } from "html-to-image"; // To convert HTML to image
import { saveAs } from "file-saver"; // For client-side download
import "../CSS/Card.css";

const Card = () => {
    const [imageSrc, setImageSrc] = useState(""); // State to store the image source
    const card1Ref = useRef(null); // Reference for the card1 element

    // Function to handle file input change
    const handleFileInputChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        const reader = new FileReader(); // Create a file reader

        // Event listener for when the file reader has loaded the file
        reader.onload = () => {
            // Set the loaded image as the source for the image tag
            setImageSrc(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file); // Read the selected file as a data URL
        }
    };

    // Function to handle the download of card1 division
    const handleDownload = async () => {
        if (card1Ref.current) {
            const dataUrl = await toPng(card1Ref.current); // Convert card1 division to image
            saveAs(dataUrl, "card1.png"); // Download the image
        }
    };

    return (
        <div className="card">
            <div className="card1" ref={card1Ref}>
                <header>Company name</header>
                {/* {imageSrc && <img src={imageSrc} alt="Uploaded QR Code" />} */}
                {imageSrc && <img src={imageSrc} alt="Uploaded QR Code" />}
            </div>
            <br />
            <input
                type="file"
                placeholder="Insert downloaded QR Code"
                onChange={handleFileInputChange}
            />
            <button onClick={handleDownload}>Download card1</button>
        </div>
    );
};

export default Card;