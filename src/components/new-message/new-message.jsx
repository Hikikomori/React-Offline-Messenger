class NewMessage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {userMessage: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({userMessage: event.target.value});
  }

  render() {
    return (
      <section className="new-message p-3 bg-secondary shadow">
        <p className="new-message__hint mx-3 mb-3 text-light">Вы вошли как "{sessionStorage.getItem('userName')}"</p>
        <form className="form-inline d-flex new-message__form" onSubmit={(evt) => {
          evt.preventDefault();
          this.state.userMessage && this.props.onSubmit({
            userName: sessionStorage.getItem('userName'),
            timestamp: Date.now(),
            userMessage: this.state.userMessage
          });
          this.setState({userMessage: ''});
        }} action="">
          <input className="form-control flex-grow-1" type="text" placeholder="Написать сообщение..." value={this.state.userMessage} onChange={this.handleChange}/>
          <button className="btn btn-primary ml-3" type="submit">Отправить</button>
        </form>
      </section>
    );
  }
}

NewMessage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewMessage;
