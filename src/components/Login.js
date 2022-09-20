import "./Login.css";

import { NewUserForm } from "./Forms/NewUserForm";
import { LoginForm } from "./Forms/LoginForm";
import { Profile } from "./Profile";

function Login(props) {
  const { user } = props;
  return <div className="Login">{user ? <Profile /> : <LoginForm />}</div>;
}

export { Login };

/*
  function renderNewUserForm() {
    stateHelper(setState, {
      activeForm: (
        <NewUserForm
          onSubmit={(args) => {
            auth.createUser(args);
            stateHelper(setState, { activeForm: null });
          }}
          onEscape={() => stateHelper(setState, { activeForm: null })}
        />
      ),
    });
  }

    function renderLoginForm() {
    stateHelper(setState, {
      activeForm: (
        <LoginForm
          onSubmit={(args) => {
            auth.signUserIn(args);
            stateHelper(setState, { activeForm: null });
          }}
          onEscape={() => stateHelper(setState, { activeForm: null })}
        />
      ),
    });
  }
*/
