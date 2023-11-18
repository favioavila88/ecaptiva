import React from "react";
import emailjs from "emailjs-com";

import "../../Styles/molecules/contactUs/Formulary.css";

const Formulary = () => {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_4ia0mi6",
        "template_5ijot8o",
        e.target,
        "TrjOVdR2VR81NJsUb"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="formulary">
      <h1>
        Send us a brief message and we will get in touch with you for scheduling
        a short conversation with our experts.{" "}
      </h1>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="html_message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Formulary;
