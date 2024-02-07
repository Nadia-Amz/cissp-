import React from "react";
import '../css/Style.css';
import background from "../images/background.jpg";
import avatar from "../images/avatar.jpg";


function Main(){
    return(
        <>
        <section className="main-section">
            <img src={background} alt="" className="background-image"></img>
            <img src={avatar} alt="" className="avatar"></img>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus
            </p>
        </section>
        </>
    )
}
export default Main;