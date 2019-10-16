import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import { List, Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed"


class MyPriorities extends React.Component {

render() {


    let myPrioritiesImage = "my-priorities-main-image.png"
    let publicIntegrityLink = "https://publicintegrity.org/federal-politics/state-politics/state-integrity-investigation/massachusetts-gets-d-grade-in-2015-state-integrity-investigation/"
    let exemptionsList = "https://pioneerinstitute.org/better_government/time-to-end-legislative-exemptions-from-public-records-open-meeting-laws/"
    let pewVotingData = "https://www.pewresearch.org/fact-tank/2018/05/21/u-s-voter-turnout-trails-most-developed-countries/"

    return(
         <Fragment>

        <Image
        src={myPrioritiesImage}
        >

        </Image>


        <br></br>
        <br></br>
        <br></br>

        <Header 
            as="h1"
            textAlign="center"
        >MY PRIORITIES
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
            <a href={publicIntegrityLink}> grades</a> in the country for transparency and public records laws. 
            We cannot hold our elected officials accountable when they hide behind 
            unrecorded votes. I promise to publish a comprehensive list of my record, 
            with accompanying explanations and reasoning.
            </p>
        
            <List bulleted={true} className="priorities-transparency-bl">
                <List.Item>
                    <b>Action Item:</b> Maintain voting log
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> End legislative <a href={exemptionsList}>exemptions</a> from Public Records and Open Meeting laws
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

        <Divider></Divider>

                    {/* ENHANCE VOTING ACCESS SECTION */}


        <br></br>
        <br></br>

        <Container text className="priorities-enhance-voting-access-container">
            <Header as="h2">ENHANCE VOTING ACCESS</Header>
            
            <p>
            To truly have a government of the people, by the people, 
            for the people, we need every eligible citizen to vote. 
            According to PEW Center <a href={pewVotingData}> data</a>, voting rates are high among 
            people who are registered – the problem lies in the barriers 
            that prevent people from this preliminary stage. Voting is a 
            fundamental aspect of our free society. The state must facilitate 
            easy access to voting with automatic voter registration.
            </p>
        
            <List bulleted={true} className="priorities-enhance-voting-access-bl">
                <List.Item>
                    <b>Action Item:</b> Sponsor automatic voter registration
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> Same-day voter registration
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> No-excuse absentee ballots
                </List.Item>    
                    
                <List.Item>
                    <b>Action Item:</b> Extend early voting for all elections
                </List.Item>
            </List>

        </Container>


        <br></br>
        <br></br>

        <Divider></Divider>

                    {/* COMBAT CENTRALIZATION OF POWER */}

        <br></br>
        <br></br>

        <Container text className="priorities-combat-centralization-power-container">
            <Header as="h2">COMBAT CENTRALIZATION OF POWER</Header>
            
            <p>
            With long-time politicians dictating the agenda on Beacon Hill, 
            our Commonwealth has become beholden to the will of a few key establishment 
            officials. Term limits for legislators will prevent our public servants from 
            getting too comfortable. We will all benefit from the more regular stream of 
            fresh ideas that fresh faces produce.
            </p>
        
            <List bulleted={true} className="priorities-combat-centralization-power-bl">
                <List.Item>
                    <b>Action Item:</b> Introduce process to install term limits
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> Redirect the "new salary" money into district institutions
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> Restore "clean elections" programs
                </List.Item>    

            </List>

        </Container>


        <br></br>
        <br></br>

        <Divider></Divider>

                    {/* CUT THE RED TAPE */}

        <br></br>
        <br></br>

        <Container text className="priorities-cut-red-tape-container">
            <Header as="h2">CUT THE RED TAPE</Header>
            
            <p>
            At age 19, I started working in constituent services, 
            learning firsthand the value of frequent engagement with 
            constituents. Whether it be securing state benefits, or assisting 
            with insurance, monitoring claims with state agencies, or outlining 
            available services, creating easy access to state resources delivers 
            tangible benefits to constituents. I will prioritize this integral 
            aspect of governance. These individualized interactions illuminate 
            the unintended shortcomings of legislation, providing insight to 
            help us ensure policies actually work for the people. I will fill 
            the current void by bringing a constituent service office to the 
            district, allowing for walk-in assistance and helpful, round-the-clock 
            resources without needing to venture into the city.
            </p>
        
            <List bulleted={true} className="priorities-cut-red-tape-bl">
                <List.Item>
                    <b>Action Item:</b> Open constituent service office in the district
                </List.Item>
                
            </List>

        </Container>


        <br></br>
        <br></br>

        <Divider></Divider>

                    {/* RESTORE ACTIVE REPRESENTATION */}

        <br></br>
        <br></br>

        <Container text className="priorities-restore-active-respresentation-container">
            <Header as="h2">RESTORE ACTIVE REPRESENTATION</Header>
            
            <p>
            We cannot afford complacent, passive representation at 
            any level of government. We need elected officials who 
            will stick their neck out for their values. I will champion 
            a holistic, progressive Democratic agenda, fighting for all 
            the policies that make us proud to call Massachusetts our home.
            </p>
        
            <List className="priorities-restore-active-respresentation-bl">
                <List.Item>
                    <a href="https://vote4ted.com/where-i-stand">Where I Stand and What I'll Do</a>
                </List.Item>
                
            </List>

        </Container>    


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <JoinTeamTed/>
        <Footer/>
         </Fragment>
    )
}

}

export default MyPriorities;