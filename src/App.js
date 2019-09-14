import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'

class App extends React.Component {

render() {  
  return (
   <Fragment>
      <NavBar />
      
      <Home />

      
  
   </Fragment>
  );
  
  }
}

export default App;
