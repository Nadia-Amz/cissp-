import React from "react";
import '../css/Style.css';

function NextandPrevious ({previous, next}){


    return(
        <>
        <div className="next-previous">

            <a href ={previous} className = {previous ? 'previous-page' : 'previous'}>
                <ion-icon name="arrow-back-outline" >
                </ion-icon>
            </a>

            <a href = {next} className = {next ? 'previous-page' : 'previous'}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
        </div>
        </>
    )
}export default NextandPrevious;