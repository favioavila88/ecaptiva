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
    <div
      style={{
        backgroundColor: "#000C66",
        width: "100%",
        padding: "70px",
        marginBottom: "50px",
      }}
    >
      <form onSubmit={sendEmail}>
        <div>
          <div class="app-form-group">
            <label class="app-form-label">FULL NAME</label>
            <input
              class="app-form-control"
              name="form_name"
              placeholder="FULL NAME"
            />
          </div>
          <div class="app-form-group">
            <label class="app-form-label">EMAIL</label>
            <input
              class="app-form-control"
              name="form_email"
              placeholder="EMAIL"
            />
          </div>
          <div class="app-form-group">
            <label class="app-form-label">SUBJECT</label>
            <input
              class="app-form-control"
              name="form_subject"
              placeholder="SUBJECT"
            />
          </div>
          <div class="app-form-group message">
            <label class="app-form-label">MESSAGE</label>
            <textarea
              class="app-form-control message"
              name="form_message"
              placeholder="TELL US ABOUT YOURSELF"
            />
          </div>
        </div>
        <input class="app-form-input" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Formulary;
