import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";

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
      errors.fullName = "Please complete this required field.";
    } else if (isGreaterThen120Characters(values.fullName.length)) {
      errors.fullName = "The text may not be longer than 120 characters.";
    }
    if (!values.email) {
      errors.email = "Please complete this required field.";
    } else if (isGreaterThen120Characters(values.email.length)) {
      errors.email = "The text may not be longer than 120 characters.";
    }
    if (!value) {
      errors.phoneNumber = "Please complete this required field.";
    } else if (isGreaterThen30Characters(value.length)) {
      errors.phoneNumber = "The text may not be longer than 30 characters.";
    }
    if (!values.subject) {
      errors.subject = "Please complete this required field.";
    } else if (isGreaterThen120Characters(values.subject.length)) {
      errors.subject = "The text may not be longer than 120 characters.";
    }
    if (!values.message) {
      errors.message = "Please complete this required field.";
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
    formValues.phoneNumber = value;
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
        backgroundColor: "#fff",
        width: "70%",
      }}
    >
      <div style={{ padding: "45px 85px 70px 70px" }}>
        <form onSubmit={sendEmail}>
          <div>
            <div className="app-form-group">
              <label className="app-form-label">
                Full name
                {error.fullName ? (
                  <span className="app-form-label error-span">*</span>
                ) : (
                  <></>
                )}
              </label>
              <input
                className="app-form-control"
                name="fullName"
                placeholder="Full name"
                value={formValues.fullName}
                onChange={handleChange}
                maxLength="120"
              />
              <span className="app-form-label error-span">
                {error.fullName}
              </span>
            </div>
            <div className="app-form-group">
              <label className="app-form-label">
                Email
                {error.email ? (
                  <span className="app-form-label error-span">*</span>
                ) : (
                  <></>
                )}
              </label>
              <input
                className="app-form-control"
                name="email"
                placeholder="Email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                maxLength="120"
              />
              <span className="app-form-label error-span">{error.email}</span>
            </div>
            <div className="app-form-group">
              <label className="app-form-label">
                Phone number
                {error.phoneNumber ? (
                  <span className="app-form-label error-span">*</span>
                ) : (
                  <></>
                )}
              </label>
              <PhoneInput
                international
                defaultCountry="BO"
                className="app-form-control"
                name="phoneNumber"
                style={{ backgroundColor: "#fff" }}
                placeholder="Phone number"
                value={value}
                onChange={setValue}
                maxLength="30"
              />
              <span className="app-form-label  error-span">
                {error.phoneNumber}
                {value
                  ? !isPossiblePhoneNumber(value)
                    ? `Invalid phone number ${value}`
                    : ""
                  : ""}
              </span>
            </div>
            <div className="app-form-group">
              <label className="app-form-label">
                Subject
                {error.subject ? (
                  <span className="app-form-label error-span">*</span>
                ) : (
                  <></>
                )}
              </label>
              <input
                className="app-form-control"
                name="subject"
                placeholder="Subject"
                value={formValues.subject}
                onChange={handleChange}
                maxLength="120"
              />
              <span className="app-form-label error-span">{error.subject}</span>
            </div>
            <div className="app-form-group message">
              <label className="app-form-label">
                Message
                {error.message ? (
                  <span className="app-form-label error-span">*</span>
                ) : (
                  <></>
                )}
              </label>
              <textarea
                className="app-form-control message"
                name="message"
                placeholder="Tell us about yourself"
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
