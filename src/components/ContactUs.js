import React from "react";
import { useState } from "react";
import '../css/Style.css';
import contact from "../images/contact.jpg";

function Contact(){
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState ("");
    const [comment, setComment] = useState ("");
    const [message, setMessage] = useState({});
    const [success, setSuccess] = useState("");

    const handleChangeEmail = (e) =>{
        setEmail(e.target.value);
    };
    const handleChangeSubject = (e) =>{
        setSubject(e.target.value);
    };
    const handleChangeComment = (e) =>{
        setComment(e.target.value);
    };

    const checkContact = (e) =>{
        e.preventDefault();

        let isValid = true;
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let updatedMessage = {};
        if(email === ""){
            updatedMessage.email = "Email cannot be empty !"
            isValid = false;
        }else if(!regEx.test(email)){
            updatedMessage.email = "Oops ! Email is not valid"
            isValid = false;
        }
        if(subject === ""){
            updatedMessage.subject = "Subject cannot be empty !"
            isValid = false;
        }
        if(comment === ""){
            updatedMessage.comment = "comment cannot be empty !"
            isValid = false;
        }
        if(isValid){
            setMessage({});
            setSuccess('Success !');
        } else {
            setSuccess('');
            setMessage(message => ({
                ...updatedMessage,
            }))
        }
    };

    return(
        <div className="contact-section">
            <h2>Contact Us</h2>
        <form className="form-container" id="contact" >
            <div className="input-area">
            <p>Get in touch</p>
            <hr></hr>
            {success && <div id="alert"> {success} </div>}
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeEmail}
            />
            {message.email && <div id="message"> {message.email} </div>}
            <input 
                type="text" 
                placeholder="Your Subject" 
                value={subject}
                onChange={handleChangeSubject}
            />
            {message.subject && <div id="message"> {message.subject} </div>}

            <textarea  
                name="comment"
                cols='30'
                rows='10'
                placeholder="Your Message..."
                value={comment}
                onChange={handleChangeComment}
            />
            {message.comment && <div id="message"> {message.comment} </div>}

            <button type="submit" onClick={checkContact}
            >Submit
            <ion-icon name="arrow-forward-outline">
            </ion-icon>
            </button>
            </div>
            <img src={contact} alt="" className="vector"></img>
        </form>
        </div>
    )
}export default Contact;