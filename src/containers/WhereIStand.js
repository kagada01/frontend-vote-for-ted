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

                    {/* ECONOMIC EQUALITY SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-economic-equality-container">
            <Header as="h2">ECONOMIC EQUALITY</Header>
            
            <p>
            We can no longer rely on the Federal government for economic support. 
            To maintain the best schools and quality of life in the country, we 
            must continue to invest in our communities with responsible spending. 
            We want an economy that works for everyone. That means enhancing 
            programs that protect our most vulnerable populations, and giving 
            families – young and old – the tools they need to succeed in the 
            modern economy.
            </p>
        
            <List bulleted={true} className="where-I-stand-economic-equality-bl">
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation requiring paid family leave
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> Sponsor legislation establishing a Family Caregiver tax credit
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation for a modern minimum wage that adjusts with inflation
                </List.Item>    
                    
                <List.Item>
                    <b>Action Item:</b> Support the “Millionaire Tax” and ensure it generates revenue for education and infrastructure
                </List.Item>
            </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>
    

        <Divider></Divider>

                    {/* CIVIL RIGHTS SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-civil-rights-container">
            <Header as="h2">CIVIL RIGHTS</Header>
            
            <p>
            Massachusetts must remain a beacon for civil rights and individual freedoms. 
            Discrimination has no place in our Commonwealth. Legislation can serve as the 
            preemptive conduit for social change. We must continue to bolster our laws 
            until everyone receives equal treatment and protection.
            </p>
        
            <List bulleted={true} className="where-I-stand-civil-rights-bl">
                <List.Item>
                    <b>Action Item:</b> Secure protections for the LGBTQ+ community
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> Re-introduce the Safe Communities Act and ensure it gets a vote
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation banning conversion therapy
                </List.Item>    
                    
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation increasing penalties for disability-based discrimination in schools and housing
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Institute “Know Your Rights” education programming
                </List.Item>
            </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>


        <Divider></Divider>

                    {/* ENVIRONMENT SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-environment-container">
            <Header as="h2">ENVIRONMENT</Header>
            
            <p>
            We must take swift and decisive action to reverse the effects 
            of climate change and reduce our pollutant footprint. To achieve 
            ambitious renewable energy goals, we need dedicated leaders that 
            prioritize sustainability and are ready to work with the business 
            community on pragmatic solutions.
            </p>
        
            <List bulleted={true} className="where-I-stand-environment-bl">
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation setting timeline for 100% renewable energy,
                     including investments in solar and wind power and 3% RPS increase
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> Sponsor legislation reducing greenhouse gas emissions and instituting new pollutant taxes
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation divesting in fossil fuel
                </List.Item>    
                    
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation tracking fuel emissions and promoting zero-emission vehicles
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Sponsor legislation requiring environmental impact reports for large-scale development and adherence to Public Lands Protection guidelines
                </List.Item>
            </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>

        <Divider></Divider>

                    {/* EDUCATION SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-education-container">
            <Header as="h2">EDUCATION</Header>
            
            <p>
            Education is the backbone of society. I am committed to keeping education
            a priority in the Commonwealth. The government must modernize the funding
            formula for schools to combat overcrowded classrooms and ensure all 
            Massachusetts students are on a path to success. As student loan debt 
            now accounts for a larger burden than credit card debt, we must take 
            immediate action to maintain the promise of quality education for all students.
            </p>
        
            <List bulleted={true} className="where-I-stand-education-bl">
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation to modernize the funding formula for public schools
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> Tax wealthiest college and university endowments to increase education funding
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> “Locked” tuition price at state institutions at time of enrollment
                </List.Item>    
                    
                <List.Item>
                    <b>Action Item:</b> Create a self-sustaining pay-it-forward Scholarship Fund modeled after the HOPE Scholarship
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Sponsor legislation for universal pre-k
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Sponsor legislation strengthening investment in teachers, students, and community involvement in education planning
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Ensure school curricula are LGBT+ inclusive
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Sponsor legislation creating student loan repayment plans for public interest graduates working in underserved areas
                </List.Item>
            </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>


        <Divider></Divider>

                    {/* CRIMINAL JUSTICE REFORM SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-criminal-justice-ref-container">
            <Header as="h2">CRIMINAL JUSTICE REFORM</Header>
            
            <p>
            Our government must make changes to truly fulfill 
            the promise of justice for all. The racial and socio-economic 
            disparities create an inequitable society that perpetuates cyclical hardship. 
            With comprehensive criminal justice reform, we can level the playing 
            field and focus on rehabilitation rather than incarceration. 
            Locking up non-threatening individuals merely shifts the burdens 
            onto local communities.
            </p>
        
            <List bulleted={true} className="where-I-stand-criminal-justice-ref-bl">
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation to remove mandatory minimums for non-violent, non-threatening offenders
                </List.Item>
                
                <List.Item> 
                    <b>Action Item:</b> Sponsor legislation promoting alternatives to incarceration
                </List.Item> 
                    
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation to reinvest prison population savings into job training and employment programs for reformed convicts
                </List.Item>    
                    
                <List.Item>
                    <b>Action Item:</b> Enhance and protect the Safe Communities Act
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Sponsor legislation prohibiting the militarization of police resources
                </List.Item>
                
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation encouraging communities to direct funds towards Juvenile Diversion Programs
                </List.Item>
            </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>

        <Divider></Divider>

                    {/* HEALTHCARE SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-healthcare-container">
            <Header as="h2">HEALTHCARE</Header>
            
            <p>
            It is time to implement healthcare for all. 
            The inability to access affordable healthcare continues 
            to plague American families, where even in Massachusetts 
            premiums hikes surpass income growth. When every American is covered, 
            total healthcare costs plummet. As the opioid crisis continues to 
            devastate our communities, and Congress works to gut the 
            Affordable Care Act, the State House must step up.
            </p>
        
            <List bulleted={true} className="where-I-stand-healthcare-bl">
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation to provide universal healthcare in Massachusetts
                </List.Item>
                
            </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>


        <Divider></Divider>

                    {/* GOVERNMENT ACCOUNTABILITY & TRANSPARENCY SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-govt-accountability-container">
            <Header as="h2">GOVERNMENT ACCOUNTABILITY & TRANSPARENCY</Header>
            
            <p>
            Home to some of the worst public records laws in the country, 
            with low rates of compliance for public information requests, 
            Massachusetts residents deserve better than the status quo. 
            Our representatives rely on old-school political tactics to avoid 
            taking difficult positions and confronting uncomfortable issues. 
            Participating in unrecorded votes and succumbing to party 
            leadership’s wishes leads to a legislature that sacrifices 
            key policy priorities to maintain perceived unanimity. 
            This is not how legislative bodies should function. We need more 
            responsive, more transparent, and more accountable representation.
            </p>
        
            <List bulleted={true} className="where-I-stand-govt-accountability-bl">
                <List.Item>
                    <b>Action Item:</b> Maintain up-to-date voting log with explanations
                </List.Item>
                
                <List.Item>
                    <b>Action Item:</b> Sponsor legislation making recorded votes the default
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Sponsor legislation instituting term limits
                </List.Item>

                <List.Item>
                    <b>Action Item:</b> Sponsor legislation instituting automatic voter registration
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

{/* SEXUAL ASSAULT & DOMESTIC VIOLENCE SECTION */}

<br></br>
<br></br>

<Container text className="where-I-stand-sexual-assault-domestic-violence-container">
<Header as="h2">SEXUAL ASSAULT & DOMESTIC VIOLENCE</Header>

<p>
As sexual assault and domestic violence continue to plague society, 
it is clear our Commonwealth must do more to combat this epidemic. 
One in five women on college campuses experience sexual assault. 
We need more proactive solutions. Mandatory consent education courses 
will teach our future leaders the importance of healthy relationships, 
and provide techniques for bystander intervention. We need to update 
the state institutions dedicated to sexual assault and domestic violence, 
ensuring accessible and comprehensive support and resources. 
There are too many “me too” stories to maintain the status quo of inaction.
</p>

<List bulleted={true} className="where-I-stand-sexual-assault-domestic-violence-bl">
<List.Item>
<b>Action Item:</b> Develop Consent Education for all high school seniors in state aided institutions
</List.Item>

<List.Item>
<b>Action Item:</b> Sponsor legislation to create sexual assault kit tracking system
</List.Item>

<List.Item>
<b>Action Item:</b> Require sexual assault and harassment training for all state employees
</List.Item>

<List.Item>
<b>Action Item:</b> Require all higher education institutions to report sexual assault statistics to state agencies
</List.Item>

<List.Item>
<b>Action Item:</b> End the use of non-disclosure agreements for State House staff that file complaints about sexual assault and/or harrassment
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