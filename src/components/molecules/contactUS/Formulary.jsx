import React, { useState } from "react";
import emailjs from "emailjs-com";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

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
  const [value, setValue] = useState();

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isGreaterThen120Characters = (value) => {
    return value > 120;
  };

  const isGreaterThen500Characters = (value) => {
    return value > 500;
  };

  const isGreaterThen30Characters = (value) => {
    return value > 30;
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "FULL NAME is required.";
    } else if (isGreaterThen120Characters(values.fullName.length)) {
      errors.fullName = "The text may not be longer than 120 characters.";
    }
    if (!values.email) {
      errors.email = "EMAIL is required.";
    } else if (isGreaterThen120Characters(values.email.length)) {
      errors.email = "The text may not be longer than 120 characters.";
    }
    if (!value) {
      errors.phoneNumber = "PHONE NUMBER is required.";
    } else if (isGreaterThen30Characters(value.length)) {
      errors.phoneNumber = "The text may not be longer than 30 characters.";
    }
    if (!values.subject) {
      errors.subject = "SUBJECT is required.";
    } else if (isGreaterThen120Characters(values.subject.length)) {
      errors.subject = "The text may not be longer than 120 characters.";
    }
    if (!values.message) {
      errors.message = "MESSAGE is required.";
    } else if (isGreaterThen500Characters(values.message.length)) {
      errors.message = "The text may not be longer than 500 characters.";
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
      console.log(e.target);
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
                maxLength="120"
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
                maxLength="120"
              />
              <span className="app-form-label error-span">{error.email}</span>
            </div>
            <div className="app-form-group">
              <label className="app-form-label">PHONE NUMBER</label>
              <PhoneInput
                className="app-form-control"
                name="phoneNumber"
                style={{ backgroundColor: "#013198" }}
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                maxLength="30"
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
                maxLength="120"
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
                maxLength="500"
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
