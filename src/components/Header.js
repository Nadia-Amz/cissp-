import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import '../css/Style.css';
import Techlogo1 from "../images/Techlogo1.png";

function Header(){
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
            <a href="/" >
                <img className="logoImage" src={Techlogo1} alt=""></img>
            </a>
            <ul>
                <li>
                    <Link
                        to="Domains"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500} >
                        Domains review
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
} export default Header;