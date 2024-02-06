import React from "react";
import '../css/Style.css';
import background from "../images/background.jpg";


function Main(){
    return(
        <>
        <section className="main-section">
            <img src={background} alt="" className="background-image"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
                adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
                Maecenas ligula massa, varius a, semper congue, euismod non,
                mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
                 non fermentum diam nisl sit amet erat. Duis semper.</p>
        </section>
        </>
    )
}
export default Main;