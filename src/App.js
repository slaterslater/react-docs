import React from 'react';
import ReactDOM from 'react-dom';

const tony = {
  firstName: "Tony",
  lastName: "Baloney",
  url: "https://farm4.static.flickr.com/3237/3069961268_0403db41fa_b.jpg"
};

function formatName(user){
  return `${user.firstName} ${user.lastName}`; 
}

function Welcome(props){
  return <h1> {(props.name) ? `Hi, ${props.name}` : `Welcome, Stranger`}</h1>;
}

function Avatar(props){
  return (
    <figure>
      <img src={props.user.url} alt={formatName(props.user)} width="200" />
      <figcaption>{formatName(props.user)}</figcaption>
    </figure>
  );
}

// 5. State and Lifecycle
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.tick();
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <p>The time is {this.state.date.toLocaleTimeString()}</p> 
      </div>
    );
  }
}

// 6. Handling Events
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState((state)=>({
      isToggleOn : !state.isToggleOn
    }));
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {(this.state.isToggleOn)?'ON':'OFF'}
      </button>
    );
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {total:0};
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick(){
    this.setState((state, props)=>({
      total: state.total + props.increment
    }));
  }

  render(){
    return (
      <>
        <button onClick={this.handleClick}>+ {this.props.increment}</button>
        <p>Total: {this.state.total}</p>
      </>
    );
  }
}

// 7. Conditional Rendering
function GuestGreeting(){
  return <p>Please sign in</p>;
}
  
function UserGreeting(){
  return <p>You're back</p>;
}

function Greeting(props){
  return (props.isLoggedIn) ? <UserGreeting /> : <GuestGreeting />;
}

function LoginButton(props){
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props){
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userName: null,
      isLoggedIn:false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(){
    this.setState({
      userName:tony.firstName,
      isLoggedIn:true
    });
  }
  
  handleLogoutClick(){
    this.setState({
      userName:null,
      isLoggedIn:false
    });
  }
  
  render(){
    let button;
    if(this.state.isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return(
      <>
        <Welcome name={this.state.userName} />
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </>
    );
  }
} // LoginControl

function App() {
  return (
  <>
    
    <LoginControl />
    <Clock />
    <Toggle />
    <Counter increment={1} />
    <Avatar user={tony} />
  </>
  );
}

export default App;
