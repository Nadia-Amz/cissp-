import React from "react";
import "../css/Style.css";
import ScrollToTop from "react-scroll-to-top";
// import { animateScroll as scroll } from "react-scroll";

function TopIcon() {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <>
      <div className="top-button">
      <ScrollToTop smooth color="#04383F"/>

        {/* <ion-icon
          name="arrow-up-circle-outline"
          // onClick={scrollToTop}
        ></ion-icon> */}
      </div>
    </>
  );
}
export default TopIcon;
