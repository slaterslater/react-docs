import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: "Tony",
  lastName: "Baloney",
  url: "https://farm4.static.flickr.com/3237/3069961268_0403db41fa_b.jpg"
};

function formatName(user){
  return `${user.firstName} ${user.lastName}`; 
}

function Welcome(props){
  return <h1>Welcome, {(props.name) ? props.name : "Stranger"}</h1>;
}

function Avatar(props){
  return (
    <figure>
      <img src={props.user.url} alt={formatName(props.user)} width="200" />
      <figcaption>{formatName(user)}</figcaption>
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

function App() {
  return (
  <>
  <Welcome name="" />
  <Clock />
  <Toggle />
  <Counter increment={1} />
  <Avatar user={user} />
  </>
  );
}

export default App;
