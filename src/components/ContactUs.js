import React from "react";
import { useState } from "react";
import '../css/Style.css';
import contact from "../images/contact.jpg";

function Contact(){
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState ("");
    const [comment, setComment] = useState ("");
    const [message, setMessage] = useState("");
    const [Success, setSuccess] = useState("");

    const emailValidation = () =>{

        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(email === ""){
            setMessage('Email can not be empty !');
        }else if(!regEx.test(email)){
            setMessage('Oops ! Email is not valid');
        }else{
            setMessage("");
        }
    };

    const subjectValidation = () =>{

        if(subject === ""){
            setMessage("Subject can not be empty !");

        }else{
            setMessage("");
        }
    };

    const commentValidation = () =>{

        if(comment === ""){
            setMessage(" comment can not be empty !");
        }else{
            setMessage("");
        }
    };

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

       const isEmailValid = emailValidation();
       const isSubjectValid = subjectValidation();
       const isCommentValid = commentValidation();

        const isValid = isEmailValid && isSubjectValid && isCommentValid;

        if(isValid){
            setSuccess('Success !');
        }
    };

    return(
        <div className="contact-section">
            <h2>Contact Us</h2>
        <form className="form-container" id="contact">
            <div className="input-area">
            <p>Get in touch</p>
            <hr></hr>
            <p id="alert">{Success}</p> 
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeEmail}
            />
            <p id="message">{message}</p>
            <input 
                type="text" 
                placeholder="Your Subject" 
                value={subject}
                onChange={handleChangeSubject}
            />
            <p id="message">{message}</p>

            <textarea  
                name="comment" 
                cols='30' 
                rows='10' 
                placeholder="Your Message..." 
                value={comment}
                onChange={handleChangeComment}
            />
            <p id="message">{message}</p>

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