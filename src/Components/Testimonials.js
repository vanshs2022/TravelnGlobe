import React from "react";

import Classes from "../Styles/Testimonials.module.css";

import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avtar3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>Customers Reviews</h1>

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
          Embarking on my adventure to Singapore with TravelnGlobe was like stepping into a dreamy kaleidoscope of experiences! Every moment was a splash of joy, from the seamless planning to the luxurious accommodations. TravelnGlobe made my trip a whimsical escapade I'll cherish forever.
          </p>

          <div className={Classes.info}>
            <img src={avatar} alt="image" />
            <div>
              <h3>Mukesh Ambani</h3>
              <span>MD • Reliance Industries</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <p>
          My trip to Thailand with TravelnGlobe was a vibrant escapade filled with unforgettable moments! From bustling markets to exquisite cuisine, every experience was a celebration. TravelnGlobe's meticulous planning made it seamless. I highly recommend them for your next adventure!
          </p>

          <div className={Classes.info}>
            <img src={avatar2} alt="image" />
            <div>
              <h3>Sundar Pichai</h3>
              <span>CEO • Google</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
          My sojourn to New Zealand with TravelnGlobe was a mesmerizing odyssey, brimming with awe-inspiring moments!  TravelnGlobe's impeccable planning and attention to detail made it a journey of a lifetime. I enthusiastically recommend them for your next escapade!
          </p>

          <div className={Classes.info}>
            <img src={avatar3} alt="image" />
            <div>
              <h3>Sharukh Khan</h3>
              <span>Actor • Bollywood</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
