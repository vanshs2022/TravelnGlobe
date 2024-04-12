import React, { useState } from "react";
import "../Styles/Booking.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Booking({ bookingInfo, redirectToHome }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const handleConfirm = () => {
    if (email !== "" && phoneNumber !== "") {
      setIsConfirmed(true);
    } else {
      alert("Please fill in your email and phone number.");
    }
  };

  const handleDownloadPDF = () => {
    const bookingInfo = document.getElementById("booking-info");
    html2canvas(bookingInfo).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("bookingcopy.pdf");
    });
  };

  const handleEdit = () => {
    setIsConfirmed(false);
  };

  const handleClose = () => {
    setIsConfirmed(false);
    setEmail("");
    setPhoneNumber("");
    setShowDetails(false);
    redirectToHome();
  };

  return (
    <div className="Booking-div">
      {showDetails && (
        <>
          {!isConfirmed ? (
            <>
              <h2>Enter Your Details</h2>
              <div className="info">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="info">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button onClick={handleConfirm}>Confirm Details</button>
              <button onClick={handleClose}>Close</button>
            </>
          ) : (
            <>
              <h2>Confirm Booking</h2>
              <div id="booking-info">
                <p>
                  <span>Origin: </span>
                  {bookingInfo.origin}
                </p>
                <p>
                  <span>Destination: </span>
                  {bookingInfo.destination}
                </p>
                <p>
                  <span>From: </span>
                  {bookingInfo.checkIn}
                </p>
                <p>
                  <span>To: </span>
                  {bookingInfo.checkOut}
                </p>
                <p>
                  <span>Email: </span>
                  {email}
                </p>
                <p>
                  <span>Phone Number: </span>
                  {phoneNumber}
                </p>
              </div>
              <button onClick={handleDownloadPDF}>Download PDF</button>
              <button onClick={handleEdit}>Edit Details</button>
              <button onClick={handleClose}>Close</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Booking;
