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

function App() {
  return (
  <>
  <Welcome name="" />
  <Clock />
  <Avatar user={user} />
  </>
  );
}

export default App;
