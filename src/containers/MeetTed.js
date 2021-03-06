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
    let commServiceImage = "meet-ted-community-service-image.png"


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

        <Container className="local-roots-container">
            <Image 
            className="local-roots-image"
            src={localRootsImage}>
            </Image>
            
            <List className="local-roots-list">
                <Header className="local-roots-header" size={"huge"}>Local Roots</Header>
                <List.Item>- Needham Public Schools</List.Item>
                    <br></br>
                <List.Item>- Temple Aliyah</List.Item>
                    <br></br>
                <List.Item>- Needham Youth Hockey, Little League, and Soccer</List.Item>
                    <br></br>
                <List.Item>- Needham Community Theater</List.Item>
            </List>
        </Container>

        <Container className="democratic-activism-container"> 
        <List className="democratic-activism-list">
                <Header className="democratic-activism-header" size={"huge"}>Democratic Activism</Header>
                <List.Item>- Field Organizer for Gabby Giffords' Protect All Women tour (nine states in nine days)</List.Item>
                    <br></br>
                <List.Item>- Avid canvasser for progressive causes</List.Item>
                    <br></br>
                <List.Item>- Author of op-eds and speeches advocating for liberal policies</List.Item>
                    <br></br>
            </List>
        
            <Image 
                className="democratic-activism-image"
                src={demRootsImage}>
            </Image>
        </Container> 


        <Container className="community-service-container">
            <Image 
                className="community-service-image"
                src={commServiceImage}>
            </Image>

            <List className="community-service-list">
                <Header className="community-service-header" size={"huge"}>Community Service</Header>
                <List.Item>- Volunteer at Needham Senior Center</List.Item>
                    <br></br>
                <List.Item>- Public speaking coach for at-risk youth</List.Item>
                    <br></br>
                <List.Item>- Be the Match Bone Marrow Registry</List.Item>
                    <br></br>
            </List>   
        </Container>

        <JoinTeamTed/>
    
        <Footer/>
    </Fragment>
    )
    
}

}

export default MeetTed;