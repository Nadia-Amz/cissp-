import React from "react";
import '../css/Style.css';
import vector1 from "../images/vector1.jpg";


function Cards (){
    return(
        <>
        <section className="cards-section">
            <div className="header-text">
                <h1>Domanies's Review</h1>
            </div>
            <div className="card-container">
            <div className="card">
                <img scr = {`/images/${vector1}`} alt="" className="vector"></img>
                <h2>Lorem ipsum dolor </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus</p>
            </div>
            <div className="card">
            <img scr = {`/images/${vector1}`} alt="" className="vector"></img>
                <h2>Lorem ipsum dolor </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus</p>
            </div>
            <div className="card">
            <img scr = {`/images/${vector1}`} alt="" className="vector"></img>
                <h2>Lorem ipsum dolor </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus</p>
            </div>
            <div className="card">
            <img scr = {`/images/${vector1}`} alt="" className="vector"></img>
                <h2>Lorem ipsum dolor </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed non risus. Suspendisse lectus</p>
            </div>
            </div>
        </section>
        </>
    )
}
export default Cards;