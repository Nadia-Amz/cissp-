import React from "react";
import { useState } from "react";
import '../css/Style.css';
import Techlogo1 from "../images/Techlogo1.png";

function DomainHeader(){
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
            <a href="/">
                <img className="logoImage" src={Techlogo1} alt="" ></img>
            </a>
            <div className="domain-header">
            <ul >
                <li>
                    <a href="/" className="domain-home">
                        Home
                    </a>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
} export default DomainHeader;