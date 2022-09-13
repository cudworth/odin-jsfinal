import "./Notice.css";

function Notice(props) {
  const { onClick, message } = { ...props };

  if (message instanceof Error) {
    return (
      <div className="Notice">
        <div>{`Error Code: ${message.code}`}</div>
        <div>{`Error Message: ${message.message}`}</div>
        <input type="button" value="Okay" onClick={onClick} />
      </div>
    );
  } else if (message != null) {
    return (
      <div className="Notice">
        <div>{message}</div>
        <input type="button" value="Okay" onClick={onClick} />
      </div>
    );
  } else {
    return null;
  }
}

export { Notice };
