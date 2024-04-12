import React from "react";
import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  

  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+91 93197XXXXX</p>
          <p>travelnglobe@gmail.com</p>
          <a href="https://www.linkedin.com/in/vansh-sharma-0b4676267/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/vanshs2022">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div id="button">
            <a href="mailto:vns444555@gmail.com?subject=Subject%20Here&body=Message%20Here">
              <button>Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
