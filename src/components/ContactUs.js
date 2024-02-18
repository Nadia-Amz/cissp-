import React from "react";
import { useState } from "react";
import '../css/Style.css';
import contact from "../images/contact.jpg";

function Contact(){
    // const [formValue, setFormvalue] = useState({email:'',subject:'',body:''});
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState ("");
    const [body, setBody] = useState("");
    const [message, setMessage] = useState({});
    const [success, setSuccess] = useState("");

    // const handleValues = (e) =>{
    //     const { name, value }= e.target;
    //     setFormvalue({...formValue, [name]:value});
    //     console.log(formValue);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();

        const objects = {email, subject, body};

        fetch(' http://getcissp.patchthenet.com/contact',{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                email: objects.email,
                subject: objects.subject,
                body: objects.body,
            }),
            mode: 'cors',
        }).then(response => {
            if(!response.ok){
                throw new Error(' An unexpected error has occurred')
            }
            console.log('Message was sent successfully');
            console.log(objects.email);
        })
        .catch(error =>{
            console.error(' fetch not working',error)
        });
    }
    // const handleChangeEmail = (e) => {
    //     console.log(email);
    //     setEmail(e.target.value);
    // };

    // const handleChangeSubject = (e) =>{
    //     console.log(subject);
    //     setSubject(e.target.value);
    // };
    // const handleChangeBody = (e) =>{
    //     console.log(body);
    //     setBody(e.target.value);
    // };

    const checkContact = () =>{

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
        if(body === ""){
            updatedMessage.body = "comment cannot be empty !"
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
        <form className="form-container" id="contact" onSubmit={handleSubmit}>
            <div className="input-area">
            <p>Get in touch</p>
            <hr></hr>
            {success && <div id="alert"> {success} </div>}
            <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {message.email && <div id="message"> {message.email} </div>}
            <input 
                type="text" 
                placeholder="Your Subject" 
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            {message.subject && <div id="message"> {message.subject} </div>}

            <textarea  
                name="body"
                cols='30'
                rows='10'
                placeholder="Your Message..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            {message.body && <div id="message"> {message.body} </div>}

            <button type="submit" onClick={checkContact}
            >Submit
            <ion-icon name="arrow-forward-outline">
            </ion-icon>
            </button>
            </div>
            <img src={contact} alt="contact" className="vector"></img>
        </form>
        </div>
    )
}export default Contact;