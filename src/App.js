import React, { Fragment } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import MeetTed from "./containers/MeetTed";
import MyPriorities from "./containers/MyPriorities";
import WhereIStand from "./containers/WhereIStand";
import Debate from "./containers/Debate";
import Contact from "./containers/Contact";
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom'

class App extends React.Component {

render() {  
  return (
   <Fragment>
      <NavBar />
      <Switch>

        <Route exact path="/" render={() => <Redirect to="/home" /> } />

        <Route exact path="/meetted" render={() => {
            return <MeetTed/>
          } 
        } />

        <Route exact path="/mypriorities" render={() => {
            return <MyPriorities/>

          }
        } />

        <Route exact path="/whereistand" render={() => {
            return <WhereIStand/>

          }
        } />

        <Route exact path="/debate" render={() => {
          return <Debate/>

          }
        } />

        <Route exact path="/contact" render={() => {
          return <Contact/>
        }} />

     
      <Home />

      <MeetTed />

      <MyPriorities />

      <WhereIStand />

      <Debate />

      <Contact />
    
    </Switch>
   </Fragment>
  );
  
  }
}

export default withRouter(App);
