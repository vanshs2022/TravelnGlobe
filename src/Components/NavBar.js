import React, { useState, useEffect } from "react";
import Classes from "../Styles/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {

      const about = document.getElementById("about").offsetTop;
      const recommendation = document.getElementById("recommendation").offsetTop;
      const testimonials = document.getElementById("testimonials").offsetTop;
      const scrollPosition = window.scrollY ;
  
      if (scrollPosition+50 < about) {
        setActiveSection("hero");
      } else if (scrollPosition >= about && scrollPosition-50 < recommendation) {
        setActiveSection("about");
      } else if (
        scrollPosition-50 >= recommendation &&
        scrollPosition +400 < testimonials
      ) {
        setActiveSection("recommendation");
      } else {
        setActiveSection("testimonials");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  return (
    <>
      <nav className={Classes.Navbar}>
        <div className={Classes.brand}>
          <h1 className={Classes.NavLogo}>
            Traveln<span>Globe</span>
          </h1>

          <div className={Classes.hamburger}>
            {toggle ? (
              <FontAwesomeIcon
                icon={faClose}
                className={Classes.menuIcon}
                onClick={() => setToggle(false)}
              />
            ) : (
              <FontAwesomeIcon
                className={Classes.menuIcon}
                icon={faBars}
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>

        <ul className={toggle ? Classes.open : ""}>
          <li>
            <a
              href="#hero"
              className={activeSection === "hero" ? Classes.active : ""}
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? Classes.active : ""}
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#recommendation"
              className={
                activeSection === "recommendation" ||
                activeSection === "places"
                  ? Classes.active
                  : ""
              }
            >
              places
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className={
                activeSection === "testimonials" ? Classes.active : ""
              }
            >
              testimonials
            </a>
          </li>
        </ul>

        <a href="mailto:vns444555@gmail.com?subject=Subject%20Here&body=Message%20Here">
          <button className={Classes.NavBtn}>Connect</button>
        </a>
      </nav>
    </>
  );
}

export default NavBar;
