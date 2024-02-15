import React from "react";
import '../css/Style.css';
import { animateScroll as scroll } from "react-scroll";

function TopIcon (){

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return(
        <>
            <div className="top-button">
                <ion-icon name="arrow-up-circle-outline" onClick={scrollToTop}></ion-icon>
            </div>
        </>
    )
}export default TopIcon;
