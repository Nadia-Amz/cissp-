import React from "react";
import "../css/Style.css";
import { Link } from "react-scroll";
import patchLogo from "../images/patchLogo.png";
import resources from "../images/resources .png";
import pamadoro from "../images/pamadoro-logo.png";

function Resources() {
  return (
    <div className="source" id="resources">
      <h2>Recommended Resources</h2>
      <div className="resource-container">
        <img src={resources} alt="" className="resources"></img>
        <div className="container">
          <img src={patchLogo} alt="" className="patch-logo"></img>
          <p>
            This website will accompany you from the basic fundamentals to the
            more advanced concepts related to cyber security.
          </p>
          <a href="https://patchthenet.com/" id="link" target="_blank">
            patchthenet.com
          </a>
        </div>
        <div className="line"></div>
        <div className="container">
          <img src={pamadoro} alt="" className="pamadoro-logo"></img>
          <p>
            Pomodoro technique. This technique enhances productivity by breaking
            down focus time into smaller chunks separated by short breaks.
          </p>
          <a href="https://pamadoro.com/" id="link" target="_blank">
            pamadoro.com
          </a>
        </div>
      </div>
    </div>
  );
}
export default Resources;
