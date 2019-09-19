const Message = (props) => {
  const {
    userName,
    userMessage,
    timestamp
  } = props.messageData;

  const datetime = new Date(timestamp);

  return (
    <li className={`message p-2 mb-3 rounded text-light d-flex flex-column ${userName === sessionStorage.getItem('userName') ? 'bg-info align-self-end': 'bg-primary'}`}>
      <div className="message__about d-flex small">
        <p className="message__author mr-3">
          {userName}
        </p>
        <time dateTime={datetime.toISOString()}>
          {`${datetime.toLocaleDateString()} в ${datetime.toLocaleTimeString()}`}
        </time>
      </div>
      <p className="message__body">
        {userMessage}
      </p>
    </li>
  );
};

Message.propTypes = {
  messageData: PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    userMessage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
