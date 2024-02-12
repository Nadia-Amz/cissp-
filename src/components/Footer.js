import React from "react";
import '../css/Style.css';
import LOGO2 from "../images/LOGO2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


function Footer (){
    return(
        <footer className="footer-container">
            <div className="footer-section">
                <img src={LOGO2} alt=""></img>
                <p> 
                    <FontAwesomeIcon icon={faCopyright} id="icon"/>
                    2024.GC | All Rights Reserved
                </p>
            </div>
        </footer>
    )
} export default Footer;