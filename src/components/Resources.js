import React from "react";
import '../css/Style.css';
import { Link} from "react-scroll";
import patchLogo from "../images/patchLogo.png";
import resources from "../images/resources .png";

function Resources(){
    return(
        <div className="source" id="resources">
            <h2>Recommended Resources</h2>
            <div className="resource-container">
            <img src={resources} alt="" className="resources"></img>
            <div className="container">
            <img src={patchLogo} alt="" className="patch-logo"></img>
            <p>This website will accompany you from the basic
                 fundamentals to the more advanced concepts
                  related to cyber security.</p>
            <Link to = 'https://patchthenet.com/' id='link'>patchthenet.com</Link>
            </div>
            <div className="line"></div>
            <div className="container">
            <img src={patchLogo} alt="" className="patch-logo"></img>
            <p>Pomodoro technique. This technique enhances productivity by breaking 
                 down focus time into smaller chunks separated by short breaks.</p>
            <Link to = 'https://pamadoro.com/' id='link'>pamadoro.com</Link>
            </div>
        </div>
        </div>
    )
}export default Resources;