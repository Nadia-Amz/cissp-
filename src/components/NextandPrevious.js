import React from "react";
import "../css/Style.css";

function NextandPrevious({ previous, next }) {
  return (
    <>
      <div className="next-previous">
        <a href={previous} className={previous ? "visible" : "hidden"}>
          <ion-icon name="arrow-back-outline"></ion-icon>
          <p>Previous Domain</p>
        </a>
        <a href={next} className={next ? "visible" : "hidden"}>
          <p>Next Domain</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </a>
      </div>
    </>
  );
}
export default NextandPrevious;
