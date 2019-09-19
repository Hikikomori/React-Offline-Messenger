import SignIn from "../sign-in/sign-in";
import Messages from "../messages/messages";
import NewMessage from "../new-message/new-message";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isUserSignedIn: !!sessionStorage.getItem('userName'),
      messages: localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : []
    }
  }
  render() {
    window.addEventListener('focus', () => {
      if (this.state.messages !== JSON.parse(localStorage.getItem('messages'))) {
        this.setState({
          messages: JSON.parse(localStorage.getItem('messages'))
        })
      }
    });

    return (
      <>
        <Messages
          messages={this.state.messages}
        />
        {this.state.isUserSignedIn ? (
          <NewMessage
            onSubmit={(messageData) => {
              localStorage.setItem('messages', JSON.stringify(this.state.messages.concat(messageData)));

              this.setState({
                messages: JSON.parse(localStorage.getItem('messages'))
              })
            }}
          />
        ) : (
          <SignIn
            onSubmit={(userName) => {
              sessionStorage.setItem('userName', userName);
              this.setState({
                isUserSignedIn: !!sessionStorage.getItem('userName')
              })
            }}
          />
        )}
      </>
    );
  }
}

export default App;
