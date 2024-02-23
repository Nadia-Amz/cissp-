import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../css/Style.css";
import contact from "../images/contact.jpg";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState({});
  const [success, setSuccess] = useState("");

  const url = "http://getcissp.patchthenet.com/contact";

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      email: email,
      subject: subject,
      body: body,
    })
      .then((response) => {
        if (!response.data.success) {
          throw new Error(" An unexpected error has occurred");
        }
        console.log("Message was sent successfully");
        console.log("objects", email, subject, body);
      })
      .catch((error) => {
        console.error("not working", error);
      });
  };

  const checkContact = () => {
    let isValid = true;
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let updatedMessage = {};
    if (email === "") {
      updatedMessage.email = "Email cannot be empty !";
      isValid = false;
    } else if (!regEx.test(email)) {
      updatedMessage.email = "Oops ! Email is not valid";
      isValid = false;
    }
    if (subject === "") {
      updatedMessage.subject = "Subject cannot be empty !";
      isValid = false;
    }
    if (body === "") {
      updatedMessage.body = "comment cannot be empty !";
      isValid = false;
    }
    if (isValid) {
      setMessage({});
      setSuccess("Success !");
    } else {
      setSuccess("");
      setMessage((message) => ({
        ...updatedMessage,
      }));
    }
  };

  return (
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
            cols="30"
            rows="10"
            placeholder="Your Message..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {message.body && <div id="message"> {message.body} </div>}

          <button type="submit" onClick={checkContact}>
            Submit
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
        <img src={contact} alt="contact" className="vector"></img>
      </form>
    </div>
  );
}
export default Contact;
