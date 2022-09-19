import "./Navbar.css";

function Navbar(props) {
  const { user, onClickRegister, onClickSignIn, onClickSignOut } = {
    ...props,
  };

  const userInfo = user ? (
    <div>
      <div>{user.displayName}</div>
      <div>{user.email}</div>
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
      {userInfo}
    </div>
  );
}

export { Navbar };
