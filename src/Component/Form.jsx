import React, { useState } from "react";
import "./form.css"

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    let isError = false;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name.length === 0) {
      isError = true;
      setNameError("Name is required");
    }

    if (!emailRegex.test(email)) {
      isError = true;
      setEmailError("Invalid email address");
    }

    return isError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (!error) {
      // submit the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
