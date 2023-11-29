import React, { useState } from "react";
import emailjs from "emailjs-com";

import "../../Styles/molecules/contactUs/Formulary.css";

const Formulary = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "FULL NAME is required";
    }
    if (!values.email) {
      errors.email = "EMAIL is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "PHONE NUMBER is required";
    }
    if (!values.subject) {
      errors.subject = "SUBJECT is required";
    }
    if (!values.message) {
      errors.message = "MESSAGE is required";
    }

    return errors;
  };

  const isInvalidForm = () => {
    return Object.values(formValues).some((x) => x === null || x === "");
  };

  function sendEmail(e) {
    e.preventDefault();
    setError(validate(formValues));
    if (isInvalidForm() == false) {
      emailjs
        .sendForm(
          "service_4ia0mi6",
          "template_5ijot8o",
          e.target,
          "TrjOVdR2VR81NJsUb"
        )
        .then(
          (result) => {
            window.location.reload();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
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
                name="fullName"
                placeholder="FULL NAME"
                value={formValues.fullName}
                onChange={handleChange}
              />
              <span className="app-form-label error-span">
                {error.fullName}
              </span>
            </div>
            <div className="app-form-group">
              <label className="app-form-label">EMAIL</label>
              <input
                className="app-form-control"
                name="email"
                placeholder="EMAIL"
                type="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="app-form-label error-span">{error.email}</span>
            </div>
            <div className="app-form-group">
              <label className="app-form-label">PHONE NUMBER</label>
              <input
                className="app-form-control"
                name="phoneNumber"
                placeholder="59179779797"
                type="tel"
                pattern="[0-9]{11,19}"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              <span className="app-form-label  error-span">
                {error.phoneNumber}
              </span>
            </div>
            <div className="app-form-group">
              <label className="app-form-label">SUBJECT</label>
              <input
                className="app-form-control"
                name="subject"
                placeholder="SUBJECT"
                value={formValues.subject}
                onChange={handleChange}
              />
              <span className="app-form-labe error-span">{error.subject}</span>
            </div>
            <div className="app-form-group message">
              <label className="app-form-label">MESSAGE</label>
              <textarea
                className="app-form-control message"
                name="message"
                placeholder="TELL US ABOUT YOURSELF"
                value={formValues.message}
                onChange={handleChange}
              />
              <span className="app-form-label error-span">{error.message}</span>
            </div>
          </div>
          <input className="app-form-input" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Formulary;
