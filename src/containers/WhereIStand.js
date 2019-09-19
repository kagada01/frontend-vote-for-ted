import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import { Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed"

class WhereIStand extends React.Component {

render() {
    
    let whereIStandImage = "where-i-stand-main-image.png"
    
    return(
        <Fragment>

        <Image
        src={whereIStandImage}
        >

        </Image>

         <p align="center">Where I Stand</p>
    

        <JoinTeamTed/>
        <Footer/>

         </Fragment>
    )
}

}

export default WhereIStand;