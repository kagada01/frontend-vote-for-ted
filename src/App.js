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
import JoinTeamTed from './components/JoinTeamTed';

class App extends React.Component {

render() {  
  return (
   <Fragment>
      <NavBar />
      <Switch>

        <Route exact path="/" render={() => <Redirect to="/home" /> } />

        <Route exact path="/meet-ted" render={() => {
            return <MeetTed/>
          } 
        } />

        <Route exact path="/my-priorities" render={() => {
            return <MyPriorities/>

          }
        } />

        <Route exact path="/where-i-stand" render={() => {
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
      <JoinTeamTed/>
    
    </Switch>
   </Fragment>
  );
  
  }
}

export default withRouter(App);
