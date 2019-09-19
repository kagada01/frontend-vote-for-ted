import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "./Footer";

class MyPriorities extends React.Component {

render() {
    return(
         <Fragment>
         <p align="center">My Priorities</p>

            <Footer/>
         </Fragment>
    )
}

}

export default MyPriorities;