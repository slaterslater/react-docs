import React from 'react';
//import logo from './logo.svg';
//import './App.css';

const user = {
  firstName: "Tony",
  lastName: "Baloney",
  url: "https://farm4.static.flickr.com/3237/3069961268_0403db41fa_b.jpg"
};

function formatName(user){
  return `${user.firstName} ${user.lastName}`; 
}

function getGreeting(user){
  return `Hello ${(user) ? formatName(user) : "Stranger"}`;
};

function App() {
  return (
  <div>
  <h1>{getGreeting()}</h1>
  <figure>
    <img src={user.url} alt={formatName(user)} width="200" />
    <figcaption>{formatName(user)}</figcaption>
  </figure>
  </div>
  );
}

export default App;
