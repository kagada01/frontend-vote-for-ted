import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import { List, Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed"

class WhereIStand extends React.Component {

render() {
    
    let whereIStandImage = "where-i-stand-main-image.png"
    
    return(
        <Fragment>

        <Image
        src={whereIStandImage}
        >
        </Image>

        <br></br>
        <br></br>
        <br></br>

        <Header 
            as="h1"
            textAlign="center"
        >Where I Stand and What I’ll Do
        </Header>

        <br></br>
        <br></br>
        <br></br>

        <Divider></Divider>

                    {/* TRANSPARENCY SECTION */}

        <br></br>
        <br></br>

        <Container text className="priorities-transparency-container">
            <Header as="h2">TRANSPARENCY</Header>
            
            <p>
            The Massachusetts legislature consistently receives some of the worst 
            grades in the country for transparency and public records laws. 
            We cannot hold our elected officials accountable when they hide behind 
            unrecorded votes. I promise to publish a comprehensive list of my record, 
            with accompanying explanations and reasoning.
            </p>
        
            <List bulleted={true} className="priorities-transparency-bl">
                <List.Item>
                    <b>Action Item:</b> Maintain voting log
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> End legislative <a>exemptions</a> from Public Records and Open Meeting laws
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> Introduce legislation to make recorded votes the default in the State Legislature
                </List.Item>    
                    
                <List.Item>
                    <b>Action Item:</b> Sponsor the We The People Act to take dark money out of politics
                </List.Item>
            </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>
    

        <JoinTeamTed/>
        <Footer/>

         </Fragment>
    )
}

}

export default WhereIStand;