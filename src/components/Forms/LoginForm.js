import "./LoginForm.css";

import { useState } from "react";

function LoginForm(props) {
  const { auth } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="LoginForm">
      <div>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </div>

      <input
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          auth.signUserIn({ email, password });
        }}
      />
    </form>
  );
}

export { LoginForm };
