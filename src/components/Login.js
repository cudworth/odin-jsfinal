import "./Login.css";
import { useState } from "react";
import { NewUserForm } from "./Forms/NewUserForm";
import { LoginForm } from "./Forms/LoginForm";

function Login(props) {
  const [state, setState] = useState("");

  const { fb, onCancel } = props;

  switch (state) {
    case "register":
      return renderRegistration();
    default:
      return renderLogin();
  }

  function renderLogin() {
    return (
      <div className="Login">
        <div>
          <LoginForm fb={fb} onCancel={onCancel} />
        </div>
        <div>
          <div>
            Don't have an account?
            <input
              type="button"
              value="Register"
              onClick={() => setState("register")}
            />
          </div>
        </div>
      </div>
    );
  }

  function renderRegistration() {
    return <NewUserForm fb={fb} onCancel={() => setState("")} />;
  }
}

export { Login };
