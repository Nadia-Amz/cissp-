import React from "react";
import { useState } from "react";
import '../css/Style.css';
import Techlogo1 from "../images/Techlogo1.png";

function Header(){
    const [sticky, setSticky] = useState(false);

    function stickyNavbar(){
            if(window.scrollY>= 300){
                setSticky(true)
            }else{
                setSticky(false)
            }
    }
    window.addEventListener('scroll', stickyNavbar);

    return(
        
        <nav className = {sticky ? 'nav-bar sticky' : 'nav-bar'} >
            <a href="/HomePage" >
                <img className="logoImage" src={Techlogo1} alt=""></img>
            </a>
            <ul>
                <li>
                    <a href="/Domaines">Domaine review</a>
                </li>
            </ul>
        </nav>
    )
} export default Header;