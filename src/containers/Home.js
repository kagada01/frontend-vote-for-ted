import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import JoinTeamTed from "../components/JoinTeamTed";

class Home extends React.Component {

render() {
    return(
        <Fragment>
         <p align="center">Home</p>
        
         <JoinTeamTed />
         
         </Fragment>
    )
}

}

export default Home;