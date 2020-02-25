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

function tick(){
  const tock = <p>It's {new Date().toLocaleTimeString()}</p>;
  ReactDOM.render(tock, document.getElementById('clock'))
}

setInterval(tick, 1000);

function App() {
  return (
  <>
  {/* <Welcome name={user.firstName} /> */}
  <Welcome />
  <Avatar user={user} />
  <div id="clock"></div>
  </>
  );
}

export default App;
