import { useState } from "react";

import "./form.scss";

const Form = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`{'mail': ${mail}; 'password': ${password}}`);

    setMail("");
    setPassword("");
  };

  return (
    <div className="form">
      <div className="container">
        <div className="form-wrapper">
          <h1 className="title">Log in to Example</h1>
          <h2 className="subtitle">or create an account</h2>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="label-input">E-mail</div>
            <input
              type="email"
              className="inputs-info"
              onChange={(e) => setMail(e.target.value)}
              placeholder="e.g. john.doe@gmail.com"
              value={mail}
              required
            />
            <div className="label-input">Password</div>
            <input
              type="password"
              className="inputs-info password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="●●●●●●●●●●●●●"
              value={password}
              required
            />
            <div className="section-privacy">
              <input type="checkbox" id="check" required />
              <label htmlFor="check">
                Agree with <a href="#">Terms & Conditions</a>
              </label>
            </div>
            <button type="submit">Login</button>
          </form>

          <a href="#">Forgotten password?</a>
        </div>
      </div>
    </div>
  );
};

export default Form;
