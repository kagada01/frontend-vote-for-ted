import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import Footer from "./Footer";

class Contact extends React.Component {

render() {

    let contactMainImage = "contact-main-image.png"


    return(
    <Fragment>
    
        <Image
        src={contactMainImage}
        >  
        </Image>

/
        <Header
        id="contact-header-main" 
        size={"huge"}
        textAlign={"center"}
        >I'm Here For You
        </Header>
      
        <Header
        id="contact-header-two" 
        size={"medium"}
        textAlign={"center"}
        >NO ONE LIKES FORM 
        </Header>

        <Header
        id="contact-header-two" 
        size={"medium"}
        textAlign={"center"}
        >NO ONE LIKES FORM 
        </Header>



        <Footer/>
    </Fragment>
    )
}

}

export default Contact;

