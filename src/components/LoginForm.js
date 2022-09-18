import "./LoginForm.css";

import { useState } from "react";
import { stateHelper } from "../library";

function LoginForm(props) {
  const [state, setState] = useState({ email: "", password: "" });
  const { onSubmit, onEscape } = { ...props };

  return (
    <form className="LoginForm">
      <label>
        Email
        <input
          type="email"
          value={state.email}
          onChange={(e) => {
            stateHelper(setState, { email: e.target.value });
          }}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={state.password}
          onChange={(e) => {
            stateHelper(setState, { password: e.target.value });
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          onSubmit({ email: state.email, password: state.password });
        }}
      />
      <input
        type="button"
        value="Cancel"
        onClick={(e) => {
          onEscape();
        }}
      />
    </form>
  );
}

export { LoginForm };
