import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import Service from "./Components/Service";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Recommendation from "./Components/Recommendation";
import Booking from "./Components/Booking";
import About from "./Components/About";

function App() {
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleBookingInfoChange = (info) => {
    setBookingInfo(info);
  };

  const redirectToHome = () => {
    window.location.href = "/";
  };

  return (
    <Router>
      <div>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<div>
            <Hero onBookingInfoChange={handleBookingInfoChange} />
            <About />
            <Service />
            <Recommendation />
            <Testimonials />
            <Footer />
          </div>} />
          <Route path="/booking" element={<Booking bookingInfo={bookingInfo} redirectToHome={redirectToHome} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
