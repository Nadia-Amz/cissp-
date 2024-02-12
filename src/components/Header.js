import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/Style.css';
import Techlogo1 from "../images/Techlogo1.png";

function Header(){
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    const [sticky, setSticky] = useState(false);

    function stickyNavbar(){
            if(window.scrollY > 0){
                setSticky(true)
            }else{
                setSticky(false)
            }
    }
    window.addEventListener('scroll', stickyNavbar);

    return(
        <>
        <nav className = {sticky ? 'nav-bar sticky' : 'nav-bar'} >
            <Link to="/">
                <img className="logoImage" src={Techlogo1} alt="" onClick={scrollToTop}></img>
            </Link>
            <ul>
                <li>
                    <Link
                        to="Domains"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={700} >
                        Domains review
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={700} >
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="resources"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={700} >
                        Recommended Resources
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
} export default Header;