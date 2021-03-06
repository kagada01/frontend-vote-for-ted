import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import swal from 'sweetalert';


class JoinTeamTed extends React.Component {

    constructor() {
        super()

        this.state = {
            emailText: ""
        }
    }
    
    changeEmailText = (event) => {
        let newEmailText = event.target.value
        this.setState({
            emailText: newEmailText
        })
    }

    submitEmail = (event) => {
    let userEmailSubmission =  {
        email: this.state.emailText
    }

    fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userEmailSubmission)})
            .then(res => res.json())
            .then(submittedEmail => {
                console.log(submittedEmail) 
        })
        swal({ 
            text: "Email Submitted Successfully!",
             icon: "success",
             button: "OK"
         })
    }
    
    render() {

    let teamTedLogo = "home-join-team-ted-logo.png"

    return(
         
<Fragment>
  
    <section className="join-team-ted-section">
        <Image
        className="join-team-ted-logo"
        src={teamTedLogo}
        size="medium">
        </Image>
       
        <Header
            as="h2"
            className="cta-join-team-ted"
            align="center">JOIN TEAM TED!
        </Header>
    
    <Form
    children="join-team-ted-div"
    className="email-submit-form">
        <Form.Input 
        label='Email' 
        placeholder='ted@vote4ted.com'
        inline={true}
        onChange={this.changeEmailText}
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
    </section>

</Fragment>
    )
}

}

export default JoinTeamTed;