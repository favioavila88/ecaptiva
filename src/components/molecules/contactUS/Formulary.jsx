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
        backgroundColor: "#013198",
        width: "70%",
      }}
    >
      <div style={{ padding: "45px 85px 70px 70px" }}>
        <form onSubmit={sendEmail}>
          <div>
            <div className="app-form-group">
              <label className="app-form-label">FULL NAME</label>
              <input
                className="app-form-control"
                name="form_name"
                placeholder="FULL NAME"
                required
              />
            </div>
            <div className="app-form-group">
              <label className="app-form-label">EMAIL</label>
              <input
                className="app-form-control"
                name="form_email"
                placeholder="EMAIL"
                type="email"
                required
              />
            </div>
            <div className="app-form-group">
              <label className="app-form-label">PHONE NUMBER</label>
              <input
                className="app-form-control"
                name="form_email"
                placeholder="PHONE NUMBER"
                type="email"
                required
              />
            </div>
            <div className="app-form-group">
              <label className="app-form-label">SUBJECT</label>
              <input
                className="app-form-control"
                name="form_subject"
                placeholder="SUBJECT"
                required
              />
            </div>
            <div className="app-form-group message">
              <label className="app-form-label">MESSAGE</label>
              <textarea
                className="app-form-control message"
                name="form_message"
                placeholder="TELL US ABOUT YOURSELF"
                required
              />
            </div>
          </div>
          <input className="app-form-input" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Formulary;
