import "./Navbar.css";

function Navbar(props) {
  const { authState, onClickRegister, onClickSignIn, onClickSignOut } = {
    ...props,
  };

  const authBar = authState ? (
    <div>
      <div>Logged in as {"user?"}</div>
      <input type="button" value="Sign Out" onClick={onClickSignOut} />
    </div>
  ) : (
    <div>
      <input type="button" value="Sign In" onClick={onClickSignIn} />
      <input type="button" value="Register" onClick={onClickRegister} />
    </div>
  );

  return (
    <div className="Navbar">
      <div>Purdy Project</div>
      {authBar}
    </div>
  );
}

export { Navbar };
