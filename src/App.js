import React from 'react';

function formatName(user){
  return `${user.firstName} ${user.lastName}`; 
}

function Welcome(props){
  return <h1> {(props.name) ? `Hi, ${props.name}` : `...`}</h1>;
}

function Avatar(props){
  return (
    <figure>
      <img src={props.user.url} alt={formatName(props.user)} width="125" />
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

// 8. Lists and Keys
function ListItem(props){
  return <li>{props.value}</li>;
}

function NumberList(props){
  let listItems = props.numbers.map((number)=>
    <ListItem key={number.toString()} value={number} />
  ); 
  return(
    <ul>{listItems}</ul>  
  );
}

function Blog(props){
  return (
    <div class="row">
      <h2>Blog Component</h2>
      <div class="col-md-4">
        <ul>
          {props.posts.map((post)=>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>  
      </div>
      <div class="col-md-8">
        {props.posts.map((post)=>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// 9. Forms
class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    let firstName = this.state.firstName.trim();
    let lastName = this.state.lastName.trim();
    alert(`Submitting name: ${firstName} ${lastName}`);
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: ''
    });
  }

  render(){
    return (
      <div class="row">
        <form onSubmit={this.handleSubmit}>
          <div class="col-md-4">
            <label>FirstName</label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div class="col-md-4">
            <label>LastName</label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div class="col-md-4">
            <input type="submit" value="submit" />       
          </div>
        </form>
      </div>
    );
  }
} // NameForm

// 10. Lifting State Up
function BoilingVerdict(props){
  let temp = parseFloat(props.celcius);
  let verdict = (temp >= 100) ? ["Yes", ""] : ["No", "not"];
  return <p>{(!isNaN(temp)) ? `${verdict[0]}, the water would ${verdict[1]} boil.`:`No temp entered`}</p>
}

class TempCalculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {temperature:''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({temperature: event.target.value});
  }

  render(){
    return (
      <div class="row">
        <fieldset class="col-md-4">
          <legend>Enter Temperature in Celcius</legend>
          <input type="text" value={this.state.temperature} onChange={this.handleChange} />
          <BoilingVerdict celcius={this.state.temperature} />
        </fieldset>
      </div>
    );  
  }
}

// Dummy Data
const tony = {
  firstName: "Tony",
  lastName: "Baloney",
  url: "https://farm4.static.flickr.com/3237/3069961268_0403db41fa_b.jpg"
};

const numArray = [1,2,3,4,5];

const posts = [
  {id:1, title:"What is Lorem Ipsum?", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  {id:2, title:"Why do we use it?", content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \"Content here, content here\", making it look like readable English."},
  {id:3, title:"Where does it come from?", content:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}
];

// The App
function App() {
  return (
  <>
    <LoginControl />
    <Clock />
    <Toggle />
    <Counter increment={2} />
    <Avatar user={tony} />
    <NumberList numbers={numArray} />
    <Blog posts={posts} />
    <NameForm />
    <TempCalculator />
  </>
  );
}

export default App;
