import "./Navbar.css";

function Navbar(props) {
  const { user, onClickSignIn, onClickSignOut } = {
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
    </div>
  );

  return (
    <div className="Navbar">
      <div>Fishing Journal</div>
      {userInfo}
    </div>
  );
}

export { Navbar };
