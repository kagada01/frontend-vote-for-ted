import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "./Footer";

class Contact extends React.Component {

render() {
    return(
    <Fragment>
         <p align="center">Contact</p>
        
        <Footer/>
    </Fragment>
    )
}

}

export default Contact;