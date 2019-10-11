import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Divider, List, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import Footer from "./Footer";
import JoinTeamTed from "../components/JoinTeamTed"

class MeetTed extends React.Component {

render() {
    
    let meetTedImage = "meet-ted-main-image.png"
    let localRootsImage = "meet-ted-local-roots-image.png"
    let demRootsImage = "meet-ted-democratic-activism-image.png"
    let commService = "meet-ted-community-service-image.png"

    return(
    <Fragment>
        <Image src={meetTedImage}>
        </Image>
        <br></br>
        <br></br>
        <Container text>
            <Header 
            textAlign={"center"}
            as='h1'>MEET TED</Header>
                <p>
                Born and raised in Needham, Ted will be more than just a vote in the State House, he will be a refreshing leader for our district, determined to put words to action.
                </p>
        
                <p>
                A former Congressional Aide and constituent caseworker, Ted began his community organizing efforts during the 2016 election cycle, coordinating voter registration sign-ups, 
                leading civic engagement workshops, and volunteering for local Democratic candidates. Earning a degree in Public Policy and a certificate in Public Administration, Ted was 
                named a 2017 Forbes 30 Under 30 Student Scholar.
                </p>
        
                <p>
                With extensive experience in local, state, and federal government, Ted is ready to fight as a progressive advocate for the people of Needham, Dover, and Medfield.
                </p>
        </Container>

        <div className="local-roots-container">
            <Image src={localRootsImage}>
            </Image>
            
            <List className="local-roots-list">
                <Header className="local-roots-header" as={"h2"}>Local Roots</Header>
                <List.Item>- Needham Public Schools</List.Item>
                    <br></br>
                <List.Item>- Temple Aliyah</List.Item>
                    <br></br>
                <List.Item>- Needham Youth Hockey, Little League, and Soccer</List.Item>
                    <br></br>
                <List.Item>- Needham Community Theater</List.Item>
            </List>

        </div>

        <JoinTeamTed />

        <Footer/>
    </Fragment>
    )
    
}

}

export default MeetTed;