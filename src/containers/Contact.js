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
      
      {/* Contact Us subheaders */}

        <Header
        id="contact-header-two" 
        size={"medium"}
        textAlign={"center"}
        >NO ONE LIKES FORM RESPONSES 
        </Header>
        
        <br>
        </br>

        {/* link needs to be updated    */}
        <Header
        id="contact-header-three" 
        size={"medium"}
        textAlign={"center"}
        >EMAIL ME DIRECTLY: <a href="https://www.google.com">  TED@VOTE4TED.COM</a>
        </Header>

        <Header
        id="contact-header-four" 
        size={"medium"}
        textAlign={"center"}
        >CALL ME DIRECTLY:   (339)225-2399
        </Header>

        <Header
        id="contact-header-five" 
        size={"medium"}
        textAlign={"center"}
        >WRITE ME DIRECTLY: P.O. BOX 692, NEEDHAM, MA 02494 
        </Header>

        <br></br>

        {/* Social Media links */}
        <Header
        id="contact-link-facebook" 
        size={"small"}
        textAlign={"center"}
        ><a href="https://www.facebook.com/vote4ted.steinberg">Facebook</a> 
        </Header>

        <Header
        id="contact-link-twitter" 
        size={"small"}
        textAlign={"center"}
        ><a href="https://twitter.com/vote4ted">Twitter</a> 
        </Header>

        <Header
        id="contact-link-instagram" 
        size={"small"}
        textAlign={"center"}
        ><a href="https://www.instagram.com/vote4ted">Instagram</a> 
        </Header>


        {/* https://www.instagram.com/vote4ted/ */}
        <Footer/>
    </Fragment>
    )
}

}

export default Contact;

