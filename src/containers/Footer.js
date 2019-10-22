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
            href="https://www.facebook.com/Ted-Steinberg-508832629321897/"
            size="small"
            inverted={true}
            compact={true}
            icon={true} 
            color="facebook">
                <Icon name="facebook" />Facebook
            </Button>     

            <Button
            href="https://www.instagram.com/vote4ted/"
            size="small"
            inverted={true}
            compact={true}
            icon={true} 
            floated="right"
            color='instagram'>
                <Icon name='instagram' /> Instagram
            </Button>

            <Button 
            href="https://twitter.com/Vote4Ted"
            size="small"
            inverted={true}
            compact={true}
            icon={true} 
            color='twitter'>
                <Icon name='twitter' /> Twitter
            </Button>   

            <Button
            href="mailto:ted@vote4ted.com"
            size="small"
            inverted={true}
            color='google plus'>
            <Icon 
                name={"envelope square"}/>
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