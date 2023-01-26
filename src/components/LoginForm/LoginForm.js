import "./LoginForm.css";
import React from "react";
import {useState} from 'react';

const LoginForm = (props) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      const userData = database.find((user) => user.username === uname.value);
  
      if (userData) {
        if (userData.password !== pass.value) {
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    const renderForm = (
      <section>
        <div>
          <img className="form__img" src={"/img/" + props.imageForm} alt="Pokemon logo"/>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Gebruikersnaam </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Wachtwoord </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
    );
  
    return (

        <div className="app">
        <div className="login-form">
          {isSubmitted ? <div><a href="/Collectiepage/becky" className="Collectie__klikhier">Klik hier</a> om naar je collectiepagina te gaan.</div> : renderForm}
        </div>
      </div>
    );
  }

export default LoginForm;