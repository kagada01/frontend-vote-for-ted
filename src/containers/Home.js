import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { Divider, Image, Header, Container } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed";
import Footer from "../containers/Footer";


class Home extends React.Component {


render() {

    let patchArticle = "https://patch.com/massachusetts/needham/letter-editor-massachusetts-must-lead-gun-reform-movement?utm_source=facebook.com&utm_medium=social&utm_term=politics+%26+government&utm_campaign=autopost&utm_content=needham"
    let globeArticle = "https://www.bostonglobe.com/metro/regionals/west/2018/02/02/should-any-increases-major-state-taxes-table-state-budget-talks-for-next-year/7oNPmhQFr1h82yjHz2h0RL/story.html"

    let meetTedCardImage = "home-meet-ted-card-image.jpg"
    let myPrioritiesCardImage = "home-my-priorities-card-image.jpg"
    let whereIStandCardImage = "home-where-I-stand-image.jpg"

    return(
        <Fragment>
        
        <Image
        src="home-main-image.png">
        
        </Image>
        
        <br></br>

        <h1 
        className="home-text-title"
        align="center">Restoring a Voice for Needham, Dover, and Medfield
        </h1>
        
        <Container
        className="home-text-main">
        <p align="center">
        <b>Now more than ever, we need a State Representative who will stand up for government integrity
        and actively champion progressive causes. As the federal government continues to threaten our programs, 
        our elected officials need to fight back. With progress hindered by an unresponsive State House that hides 
        behind unrecorded voice votes and weak public record laws, I pledge to serve as a transparent voice for our 
        community in a time where good governance is no longer a given. I’m ready to challenge the stagnant status 
        quo on Beacon Hill and proactively protect the policies that make Massachusetts feel like home.
        </b>
        </p>
        </Container>

        <br></br>
    
        <p align="center"><b>
            <i>Letter to the Editor</i> - Needham Patch (3/27/18): </b>
            <a href={patchArticle}>Massachusetts must lead gun reform movement</a> 
        </p>
    
        <p align="center"><b>
            <i>Op-ed</i> - Boston Globe (2/2/18): </b>
            <a href={globeArticle}>Should any increases in major state taxes be on the table in state budget talks for next year? - <b>YES</b></a> 
        </p>
        

        <Image
        src="endorsements-home.png"
        className="endorsements-img"
        >
        </Image>
        <Divider>

        </Divider>
        <br></br>
        <br></br>
        <br></br>

        <Image.Group 
            align="center"
            size='medium'>
            <Image 
                className="home-meet-ted-image"
                label="Meet Ted"
                to="/meet-ted"
                as={NavLink}
                src={meetTedCardImage} 
                />
            <Image 
                className="home-meet-my-priorities-image"
                to="/my-priorities"
                as={NavLink}
                label="My Priorities"
                src={myPrioritiesCardImage} />
            <Image 
                className="home-where-i-stand-image"
                to="/where-i-stand"
                as={NavLink}
                label="Where I Stand"
                src={whereIStandCardImage} />
        </Image.Group>

        <Divider>
        </Divider>
        <br></br>
        <br></br>

        <JoinTeamTed />

        <Footer></Footer>
         </Fragment>
    )
}

}

export default Home;