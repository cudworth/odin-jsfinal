import "./Notice.css";

function Notice(props) {
  const { onClick, message } = { ...props };

  if (message instanceof Error) {
    return (
      <div className="Notice" onClick={onClick}>
        <div className="Notice-card">
          <div>{`Error Code: ${message.code}`}</div>
          <div>{`Error Message: ${message.message}`}</div>
        </div>
      </div>
    );
  } else if (message != null) {
    return (
      <div className="Notice" onClick={onClick}>
        <div className="Notice-card">
          <div>{message}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { Notice };
