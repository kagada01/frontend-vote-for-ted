import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { List, Embed, Image, Header, Container, Form, Button, Message, Divider } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed";
import Footer from "./Footer";

class Debate extends React.Component {

render() {
    return(

        <Fragment>

        <Header
        id="debate-header-main" 
        size={"huge"}
        textAlign={"center"}
        >LEAGUE OF WOMEN VOTERS PRE-PRIMARY CANDIDATES NIGHT - 8/13/18
        </Header>

        <Header
        id="debate-header-main" 
        size={"small"}
        textAlign={"center"}
        >Video and Question Time Stamps Available Below
        </Header>

        <div className="debate-video-container">
        <Embed
        icon='right circle arrow'
        placeholder='home-join-team-ted-logo.png'
        url='https://vp.telvue.com/player?id=T02953&video=337896&mini=true'
        aspectRatio='4:3'
        width={200}
        />
        </div>

       <Divider></Divider> 

        <List className="debate-timestamps-list-container">
            <List.Item><b>8:50</b> - If elected, what are your <b>top 3 goals</b> for the next year?</List.Item>
            <br></br>
            <List.Item><b>11:29</b> - Please state your views on issues facing <strong>public education</strong>, and tell us what you will do to address those issues.</List.Item>
            <br></br>
            <List.Item><b>13:55</b> - Federal <b>funding</b> has been drastically cut for the most vulnerable of our society. What should our State do to ensure that programs continue despite Federal cutbacks?</List.Item>
            <br></br>
            <List.Item><b>16:15</b> - Please state your views on the reuse of the <strong>Medfield State Hospital</strong> property.</List.Item>
            <br></br>
            <List.Item><b>18:07</b> - <b>Traffic</b> seems to be getting worse, at least around Needham and all of 128. What steps, if any, should the legislature take to reduce the number of vehicles on our roads and highways?</List.Item>
            <br></br>
            <List.Item><b>20:49</b> - This past session, the Senate passed a comprehensive energy omnibus bill and immigration protection legislation, but neither came to the floor of the House. As one of 160, what can you do to <strong>move forward legislation</strong> that you and your constituents support?</List.Item>
            <br></br>
            <List.Item><b>23:48</b> - Will you commit to passing the <strong>Safe Communities Act</strong> as the first legislation in 2019? What could have been done differently to pass it? And why did it fail at the last minute?</List.Item>
            <br></br>
            <List.Item><b>26:22</b> - Needham, Dover, and Medfield are affluent towns with good schools and generally high income levels. This is not so everywhere in Massachusetts. Will you support <strong>legislation that benefits all the people of Massachusetts</strong> even though it may not benefit the towns you represent? And if yes, please give an example. [Rebuttal included.]</List.Item>
            <br></br>
            <List.Item><b>29:53</b> - Describe what actions you will take to address <strong>climate change</strong>?</List.Item>
            <br></br>
            <List.Item><b>32:17</b> - What is your position on the <strong>death penalty</strong> in Massachusetts?</List.Item>
            <br></br>
            <List.Item><b>33:17</b> - I know you both supported the <strong>Automatic Voter Registration</strong>, which is now law. Are there other voting measures you like to see in Massachusetts and what are they?</List.Item>
            <br></br>
            <List.Item><b>35:24</b> - If the current law that <strong>protects Transgender people</strong> is repealed through Question 3 in November, would you support legislation to reinstate the law despite that result?</List.Item>
            <br></br>
            <List.Item><b>37:56</b> - Closing Statements</List.Item>
        </List>
         
         <JoinTeamTed/>

         <Footer/>
         
         </Fragment>
    )
}

}



export default Debate;