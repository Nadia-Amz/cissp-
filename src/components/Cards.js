import React from "react";
import '../css/Style.css';
import domaineVector from "../images/domaineVector.jpg";


function Cards (){
    return(
        <section className="cards-section">
            <div className="card">
                <img scr={domaineVector} alt=""></img>
                <h1>Lorem ipsum dolor </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus</p>
            </div>
        </section>
    )
}
export default Cards;