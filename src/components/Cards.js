import React from "react";
import '../css/Style.css';
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import vector3 from "../images/vector3.png";
import vector4 from "../images/vector4.png";
import vector5 from "../images/vector5.png";
import vector6 from "../images/vector6.png";
import vector7 from "../images/vector7.png";
import vector8 from "../images/vector8.png";
import cissplogo from "../images/cissplogo.png";


function Cards (){

    return(
        <>
        <section className="cards-section">
            <div className="info-container">
                <img src={cissplogo} alt="" className="cissplogo"></img>
                <p>
                This section is developed to help you prepare for your CISSP exam. 
                It should not be considered an official course, nor an alternative 
                to the official (ISC)² CBK. It is intended to serve as a complementary
                guide to help you fill any gaps that you might have and put you on
                the straight path toward your certification.
                </p>
            </div>
            <div className="header-text" id ='Domains'>
                <h1>Domains Review</h1>
            </div>
            <div className="card-container">
            <div className="card">
                <img src={vector1} alt="" className="vector"></img>
                <div className="card-text">

                <a href= "/Domain-1-review">
                    <h2>Domain 1 Review – Security and Risk Management</h2>
                </a>
                <p>This post serves as a review for domain 1 of the CISSP. This domain covers security and risk management. Before […]</p>
            </div>
            </div>
            <div className="card">
                <img src={vector2} alt="" className="vector"></img>
                <div className="card-text">

                <a href= "/Domain-2-review">
                <h2>Domain 2 Review – Asset Security</h2>
                </a>
                <p>This post serves as a review for the domain 2 of the CISSP. This domain covers asset security. Before we […]</p>
            </div>
            </div>
            <div className="card">
                <img src={vector3} alt="" className="vector"></img>
                <div className="card-text">

                <a href= "/Domain-3-review">
                <h2>Domain 3 Review – Security Architecture and Engineering</h2>
                </a>
                <p>This post serves as a review for the domain 3 of the CISSP. This domain covers security architecture and engineering. […]</p>
            </div>
            </div>
            <div className="card">
                <img src={vector4} alt="" className="vector"></img>
                <div className="card-text">

                <a href= "/Domain-4-review">
                <h2>Domain 4 Review – Communication and Network Security</h2>
                </a>
                <p>This post serves as a review for the domain 4 of the CISSP. This domain covers communication and network security. […]</p>
           </div>
            </div>
            </div>
            <div className="card-container">

            <div className="card">
                <img src={vector5} alt="" className="vector"></img>
                <div className="card-text">

                <a href= "/Domain-5-review">
                <h2>Domain 5 Review – Identity and Access Management</h2>
                </a>
                <p>This post serves as a review for the domain 5 of the CISSP. This domain covers identity and access . […]</p>
            </div>
            </div>
            <div className="card">
                <img src={vector6} alt="" className="vector"></img>
                <div className="card-text">
                <a href= "/Domain-6-review">
                <h2>Domain 6 Review – Security Testing</h2>
                </a>
                <p>This post serves as a review for the domain 5 of the CISSP. This domain covers identity and access . […]</p>
                </div>
            </div>
            <div className="card">
                <img src={vector7} alt="" className="vector"></img>
                <div className="card-text">
                <a href= "/Domain-7-review">
                <h2>Domain 7 Review – Security Operations</h2>
                </a>
                <p>This post serves as a review for the domain 7 of the CISSP. This domain covers security operations. Before we […]</p>
            </div>
            </div>
            <div className="card">
                <img src={vector8} alt="" className="vector"></img>
                <div className="card-text">

                <a href= "/Domain-8-review">
                <h2>Domain 8 Review – Software Development Security</h2>
                </a>
                <p>This post serves as a review for the domain 8 of the CISSP. This domain covers the software development security. […]</p>
            </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Cards;