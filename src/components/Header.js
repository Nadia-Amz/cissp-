import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "../css/Style.css";
import Techlogo1 from "../images/Techlogo1.png";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function stickyNavbar() {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  function resizeWindow() {
    if (window.innerWidth > 833) {
      setIsOpen(false);
    }
  }
  window.addEventListener("resize", resizeWindow);

  return (
    <>
      <nav className={sticky ? "nav-bar sticky" : "nav-bar"}>
        <a href="*">
          <img className="logoImage" src={Techlogo1} alt=""></img>
        </a>
        <ul className={isOpen ? "menu" : ""}>
          <li>
            <Link
              to="Domains"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
            >
              Domains review
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="resources"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
            >
              Resources
            </Link>
          </li>
        </ul>
        <div onClick={toggleMenu} className={isOpen ? "close" : "menu"}>
          <ion-icon name="menu"></ion-icon>
        </div>
      </nav>
    </>
  );
}
export default Header;
