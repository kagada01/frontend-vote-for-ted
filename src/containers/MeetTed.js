import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import Footer from "./Footer";
import JoinTeamTed from "../components/JoinTeamTed"

class MeetTed extends React.Component {

render() {
    
    let meetTedImage = "meet-ted-main-image.png"


    return(
    <Fragment>

        <Image src={meetTedImage}>
        </Image>
        <p align="center">Meet Ted</p>


        <JoinTeamTed />

        <Footer/>
    </Fragment>
    )
    
}

}

export default MeetTed;