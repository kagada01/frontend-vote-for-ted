import React, { Component, Fragment } from 'react';
import { Divider, Image, Header, Container, Button, Icon, Message } from 'semantic-ui-react';

class Footer extends React.Component {

render() {
    
  let emailIcon = "email-icon.jpg"
    
    return(
        

     <Fragment>
     
       <Container
       className="main-footer"
       > 
        
        <Button.Group 
        size="tiny"
        className="sm-button-group"
        widths={1}>
       
            <Button 
            size="small"
            inverted={true}
            compact={true}
            icon={true} 
            color="facebook">
                <Icon name="facebook" />Facebook
            </Button>     

            <Button
            size="small"
            inverted={true}
            compact={true}
            icon={true} 
            floated="right"
            color='instagram'>
                <Icon name='instagram' /> Instagram
            </Button>

            <Button 
            size="small"
            inverted={true}
            compact={true}
            icon={true} 
            color='twitter'>
                <Icon name='twitter' /> Twitter
            </Button>   

            <Button 
            size="small"
            inverted={true}
            color='google plus'>
            Email
            </Button>

        </Button.Group>   
           
        <Header
        className="created-by-tag"
        as="h4"
        >
        Created by Friends of Ted Steinberg for State Representative 2019
        </Header>

        </Container>
      
    </Fragment>
    )
}

}

export default Footer;