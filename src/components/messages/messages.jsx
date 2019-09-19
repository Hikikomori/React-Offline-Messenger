import Message from "../message/message";

class Messages extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {messages} = this.props;

    return (
      <section className="messages flex-grow-1 overflow-auto">
        <ul className="messages__list list-unstyled m-0 p-2 d-flex flex-column align-items-start">
          {messages && messages.length > 0 && messages.map((message) => {
            return <Message
              messageData={message}
              key={message.timestamp}
            />
          })}
        </ul>
      </section>
    );
  }

  componentDidUpdate() {
    const messages = document.querySelector('.messages');
    const messagesList = document.querySelector('.messages__list');

    messages.scrollTop = messagesList.scrollHeight;
  }
}

Messages.propTypes = {
  messages: PropTypes.array
};

export default Messages;
