import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Image } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed";

class Home extends React.Component {

render() {
    return(
        <Fragment>
        
        <Image
        src="home-main-image.png"
        >
        
        </Image>

         <JoinTeamTed />

         </Fragment>
    )
}

}

export default Home;