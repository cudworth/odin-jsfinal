import "./NewUserForm.css";

import { useState } from "react";
import { stateHelper } from "../library";

function NewUserForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    vfyPassword: "",
    displayName: "",
  });
  const { onSubmit, onEscape } = { ...props };

  return (
    <form className="NewUserForm">
      <label>
        Display Name:
        <input
          type="text"
          value={state.displayName}
          onChange={(e) => {
            stateHelper(setState, { displayName: e.target.value });
          }}
        />
      </label>
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
      <label>
        Verify Password
        <input
          type="password"
          value={state.vfyPassword}
          onChange={(e) => {
            stateHelper(setState, { vfyPassword: e.target.value });
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          if (
            state.password === state.vfyPassword &&
            state.email &&
            state.password &&
            state.displayName
          ) {
            onSubmit({
              displayName: state.displayName,
              email: state.email,
              password: state.password,
            });
          } else {
            //implement notice
            console.log("Input error");
          }
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

export { NewUserForm };
