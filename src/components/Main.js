import React from "react";
import '../css/Style.css';
import background from "../images/background.jpg";
import avatar1 from "../images/avatar1.jpg";


function Main(){
    return(
        <>
        <main className="main-section">
            <img src={background} alt="" className="background-image"></img>
            <img src={avatar1} alt="" className="avatar"></img>
            <p>Your path to get your CISSP certification.</p>
        </main>
        </>
    )
}
export default Main;