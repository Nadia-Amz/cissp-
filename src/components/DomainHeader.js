import React from "react";
import { useState } from "react";
import "../css/Style.css";
import Techlogo1 from "../images/Techlogo1.png";

function DomainHeader() {
  const [sticky, setSticky] = useState(false);

  function stickyNavbar() {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      <nav className={sticky ? "domain-header sticky" : "domain-header"}>
        <a href="/">
          <img className="logoImage" src={Techlogo1} alt=""></img>
        </a>
        <ul className="domain-home">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default DomainHeader;
