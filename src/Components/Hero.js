import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.jpg";

function Hero({ onBookingInfoChange }) {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const isFormValid = origin !=="" && destination !== "" && checkIn !== "" && checkOut !== "";

  const handleClick = () => {
    if (isFormValid) {
      onBookingInfoChange({ origin,destination, checkIn, checkOut });
      navigate("/booking"); // Navigate to the booking page
    } else {
      alert("Please fill in all fields before booking.");
    }
  };

  return (
    <>
      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Travel & Explore With{" "}
              <span className={Classes.nickName}>TravelnGlobe</span>
            </h1>
            <p >
            Unlock savings of at least 15% on global stays, from tranquil retreats to adventurous hideaways!
            </p>
          </div>

          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label >Your start location</label>
              <input
                type="text"
                placeholder="Search your location"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <input
                type="text"
                placeholder="Search your location"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className={Classes.search}>
              <label>From date</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            <div className={Classes.search}>
              <label>To date</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            <button onClick={handleClick} disabled={!isFormValid}>
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
