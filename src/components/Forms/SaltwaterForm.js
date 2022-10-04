function SaltwaterForm(props) {
  const { auth, onEscape } = props;

  return (
    <div className="saltwater-form">
      <input type="button" value="Cancel" onClick={onEscape} />
    </div>
  );
}

export { SaltwaterForm };
