import "./Login.css";

import { NewUserForm } from "./Forms/NewUserForm";
import { LoginForm } from "./Forms/LoginForm";

function Login(props) {
  const { auth } = props;
  return (
    <div className="Login">
      <div>
        <LoginForm auth={auth} />
      </div>
      <div>
        <div>
          Don't have an account?
          <input type="button" value="Register" />
        </div>
      </div>
    </div>
  );
}

export { Login };
