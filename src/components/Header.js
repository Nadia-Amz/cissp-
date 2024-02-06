import React from "react";
import '../css/Style.css';
import Techlogo1 from "../images/Techlogo1.png";


function Header(){
    return(
        
        <nav className="nav-bar">
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