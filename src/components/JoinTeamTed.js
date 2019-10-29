import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';

class JoinTeamTed extends React.Component {

    submitEmail = (userEmail) => {
        console.log("Successfully submitted email") 
    }

    render() {

    let teamTedLogo = "home-join-team-ted-logo.png"

    return(
         
<Fragment>
    <br></br>
    <br></br>
        <Image
        className="join-team-ted-logo"
        src={teamTedLogo}
        size="medium">
        </Image>
        <h2 
            className="cta-join-team-ted"
            align="center">JOIN TEAM TED!
        </h2>
    

    <Form
    children="join-team-ted-div"
    className="email-submit-form">
        <Form.Input 
        label='Email' 
        placeholder='ted@vote4ted.com'
        inline={false}
        />
        <Message
        success
        header='Form Completed'
        content="You're all signed up for the newsletter"
        />
        
        <Button
            onClick={this.submitEmail}
            className="submit-email-button"
        >Submit
        </Button>

    </Form>

</Fragment>
    )
}

}

export default JoinTeamTed;