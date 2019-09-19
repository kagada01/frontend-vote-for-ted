import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import { Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed"


class MyPriorities extends React.Component {

render() {

    let myPrioritiesImage = "my-priorities-main-image.png"

    return(
         <Fragment>

        <Image
        src={myPrioritiesImage}
        >

        </Image>

        
         <p align="center">My Priorities</p>


            <JoinTeamTed/>
            <Footer/>
         </Fragment>
    )
}

}

export default MyPriorities;