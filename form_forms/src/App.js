import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setvalues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [validation, setValidation] = useState(false);

  const handleFirstNameInput = event => {
    setvalues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInput = event => {
    setvalues({ ...values, lastName: event.target.value });
  };

  const handleEmailInput = event => {
    setvalues({ ...values, email: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (values.firstName && values.lastName && values.email) {
      setValidation(true);
    }

    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && validation ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}

        <input
          value={values.firstName}
          onChange={handleFirstNameInput}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        {submitted && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameInput}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        {submitted && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}

        <input
          onChange={handleEmailInput}
          value={values.emai}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
