import "./NewUserForm.css";

import { useState } from "react";

function NewUserForm(props) {
  const { auth, onCancel } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vfyPassword, setVfyPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <form className="NewUserForm">
      <label>
        Display Name:
        <input
          type="text"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        />
      </label>
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
      <label>
        Verify Password
        <input
          type="password"
          value={vfyPassword}
          onChange={(e) => {
            setVfyPassword(e.target.value);
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          if (password === vfyPassword && email && password && displayName) {
            auth.createUser({ displayName, email, password });
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
          onCancel();
        }}
      />
    </form>
  );
}

export { NewUserForm };
