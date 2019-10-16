import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "./Footer";
import { List, Divider, Image, Header, Container, Form, Button, Message } from 'semantic-ui-react';
import JoinTeamTed from "../components/JoinTeamTed"

class WhereIStand extends React.Component {

render() {
    
    let whereIStandImage = "where-i-stand-main-image.png"
    let taxOpEd = "https://www.bostonglobe.com/metro/regionals/west/2018/02/02/should-any-increases-major-state-taxes-table-state-budget-talks-for-next-year/7oNPmhQFr1h82yjHz2h0RL/story.html"
    let publicSchoolLaws = "https://publicintegrity.org/federal-politics/state-politics/state-integrity-investigation/massachusetts-gets-d-grade-in-2015-state-integrity-investigation/"

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
            Home to some of the <a href={publicSchoolLaws}>worst</a> public records laws in the country, 
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


        <Divider></Divider>

        {/* GUN VIOLENCE PREVENTION SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-gun-violence-prevention-container">
        <Header as="h2">GUN VIOLENCE PREVENTION</Header>

        <p>
        Thoughts and prayers are not enough. With more shootings in our country
         than days of the year, we have a responsibility to enact common sense 
         gun violence prevention measures. Legislation needs to match the 
         overwhelming public support for gun reform.
        </p>

        <List bulleted={true} className="where-I-stand-gun-violence-prevention-bl">
        <List.Item>
        <b>Action Item:</b> Sponsor legislation that closes the private sales loophole that circumvents background checks
        </List.Item>

        <List.Item>
        <b>Action Item:</b> Sponsor legislation to take guns away from dangerous individuals and those deemed “extreme risks.”
        </List.Item>

        <List.Item>
        <b>Action Item:</b> Sponsor legislation to enhance penalties for illegal gun sales
        </List.Item>
        </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>

        <Divider></Divider>

        {/* TRANSPORTATION SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-transportation-container">
        <Header as="h2">TRANSPORTATION</Header>

        <p>
        Between our congested streets and constant construction, 
        Massachusetts needs to prioritize responsible infrastructure in
        the face of population growth. Rather than the same old spending, 
        we should invest in “complete streets” that support more sustainable methods of travel. 
        These efforts must complement safety measures to reduce dangerous distractions 
        and minimize reckless driving. We must also extend and enhance our archaic public 
        transportation system that cannot handle New England winters (or summers). 
        To accommodate modern needs, a larger portion of the greater Boston community 
        must have increased access to more efficient, more effective transit.
        </p>

        <List bulleted={true} className="where-I-stand-transportation-bl">
        <List.Item>
        <b>Action Item:</b> Direct grants towards local boards that incorporate complete streets into Comprehensive Plans
        </List.Item>

        <List.Item>
        <b>Action Item:</b> Extend Commuter Rail hours for night and weekend travel
        </List.Item>

        <List.Item>
        <b>Action Item:</b> Expand MBTA to reach more Metro West communities
        </List.Item>

        <List.Item>
        <b>Action Item:</b> Fund a study exploring high speed rail across Northeast Corridor
        </List.Item>

        <List.Item>
        <b>Action Item:</b> Sponsor legislation reclassifying seatbelt requirements as a primary infraction
        </List.Item>

        <List.Item>
        <b>Action Item:</b> Sponsor new distracted driver laws increasing penalties for handheld phone usage while operating a vehicle
        </List.Item>

        </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>

        <Divider></Divider>

        {/* BALANCED BUDGET SECTION */}

        <br></br>
        <br></br>

        <Container text className="where-I-stand-balanced-budget-container">
        <Header as="h2">BALANCED BUDGET</Header>

        <p>
        Year in and year out, our legislators cannot agree on funding levels. 
        Ranked 48th in balancing the budget, the Commonwealth cannot protect 
        our progressive policies when we fail to sufficiently fund the government. 
        To fix this broken process, we need to start with transparency. 
        </p>

        <List bulleted={true} className="where-I-stand-balanced-budget-bl">
            <List.Item>
                <b>Action Item:</b> Endorse and implement the Massachusetts Budget and Policy Center’s plan for a stronger budget process
            </List.Item>
        </List>

        <List>
            <List.Item>
                <b><i>Op-ed</i> Boston Globe:</b> 
                <a href={taxOpEd}> Should any increases in major state taxes be on the table in state budget talks for next year? - <b><i>YES</i></b></a>
            </List.Item>
        </List>

        </Container>


        <br></br>
        <br></br>
        <br></br>


        <Divider></Divider>

{/* MENTAL HEALTH SECTION */}

<br></br>
<br></br>

<Container text className="where-I-stand-mental-health-container">
<Header as="h2">MENTAL HEALTH</Header>

<p>
According to the Treatment Advocacy Center, Massachusetts fails 
to provide enough psychiatric beds to patients in need of mental 
health care, and the legislature makes matters worse by cutting 
the number of available beds throughout the budget process. 
We should never abandon people with mental health issues. 
Massachusetts must provide adequate funding and attention to 
mentally ill patients - mental illness should receive the same 
level of attention as physical conditions. People with mental illnesses 
also struggle to find insurance coverage for their care, as many insurance 
plans only cover a limited range of psychiatric options. With youth depression 
and suicide rates rising around the country, this is not an epidemic we can afford to ignore.
</p>

<List bulleted={true} className="where-I-stand-mental-health-bl">
    <List.Item>
        <b>Action Item:</b> Increase funding for mental health treatment and research that will cut back on the stigmatization and criminalization of mental illness
    </List.Item>

    <List.Item>
        <b>Action Item:</b> Sponsor legislation to create standard youth education programs about mental health
    </List.Item>

    <List.Item>
        <b>Action Item:</b> Enhance regulations on insurance providers to ensure Mental Health Parity and Addition Equity Act compliance
    </List.Item>

    <List.Item>
        <b>Action Item:</b> Stop cutting the number of public psychiatric beds
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

export default WhereIStand;