import React from "react";
import "../Styles/About.css";
import image from '../assets/family.jpg';
import back from '../assets/back.svg';

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
            <img src={image} className="abc" alt="Happy family going on a trip" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <br />
        <br />
        <p className="about-description">
        Embark on a digital odyssey with TravelnGlobe, where every click opens the door to a world of travel wonders. Wander through our virtual corridors to find the perfect itinerary, from sun-soaked beaches to snow-capped peaks. Let your mouse be your compass as you navigate through a sea of destinations, ready to turn your travel dreams into reality. Your adventure starts here, with TravelnGlobe as your trusty companion.
        <br />
        <span>Embark on an Adventure: A Guide to Crafting Your Dream Trip and Packing with Flair</span>
        </p>
        <br />

        
        <ul>
            <li><img className="list-icon" src={back} alt="" /><span>Book a trip:</span> Seal your ticket to adventure, the world awaits your arrival!</li>
            <li><img className="list-icon" src={back} alt="" /><span>Pack your bags:</span> Fill your bags with dreams, essentials, and a sense of wonder!</li>
            <li><img className="list-icon" src={back} alt="" /><span>Enjoy your trip:</span> Dive into the adventure, savor every moment, make memories everlasting!</li>
        </ul>
        
      </div>
    </div>
  );
}

export default About;