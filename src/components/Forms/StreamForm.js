function StreamForm(props) {
  const { auth, onEscape } = props;

  return (
    <div className="stream-form">
      <input type="button" value="Cancel" onClick={onEscape} />
    </div>
  );
}

export { StreamForm };
