import "./Navbar.css";

function Navbar(props) {
  const { user, gotoSignIn, gotoSignOut, gotoMaps, gotoJournal, gotoProfile } =
    props;

  const userInfo = user ? (
    <div>
      <div>{user.displayName}</div>
      <div>{user.email}</div>
      <div onClick={gotoMaps}>Maps</div>
      <div onClick={gotoJournal}>Journal</div>
      <div onClick={gotoProfile}>Profile</div>
      <input type="button" value="Sign Out" onClick={gotoSignOut} />
    </div>
  ) : (
    <div>
      <input type="button" value="Sign In" onClick={gotoSignIn} />
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
