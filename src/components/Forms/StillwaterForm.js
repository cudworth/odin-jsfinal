function StillwaterForm(props) {
  const { auth, onEscape } = props;
  return (
    <div className="stillwater-form">
      <input type="button" value="Cancel" onClick={onEscape} />
    </div>
  );
}

export { StillwaterForm };
