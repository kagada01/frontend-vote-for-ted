import React, { Component, Fragment } from 'react';
import { Menu, Header, Image, Button } from 'semantic-ui-react';
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends React.Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    submitEmail = (userEmail) => {
        console.log("Successfully submitted email")
    }


    render() {
        const { activeItem } = this.state

        return(

            

            <Menu className="mainNav" >
            <Fragment>

            <Image 
                src="main-nav-logo-top-left.png" 
                size="medium" 
                className="main-nav-logo-top-left"
                >
                </Image>

                <Menu.Item header
                    name="Meet Ted"
                    to="/meet-ted"
                    as={NavLink}
                    active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >Meet Ted
                </Menu.Item>
            
                <Menu.Item header
                    as={NavLink}
                    name="My Priorities"
                    to="/my-priorities"
                    active={activeItem === 'My Priorities'}
                    // onClick={}       
                        >My Priorities
                </Menu.Item>

                <Menu.Item header
                    as={NavLink}
                    name="Where I Stand"
                    to="/where-i-stand"
                    active={activeItem === 'Where I Stand'}
                    // onClick={}       
                        >Where I Stand
                </Menu.Item>


                <Menu.Item header
                    as={NavLink}
                    name="Debate"
                    to="/debate"
                    active={activeItem === 'Debate'}
                    // onClick={}       
                        >Debate
                </Menu.Item>

                <Menu.Item header
                    as={NavLink}
                    name="Contact"
                    to="/contact"
                    active={activeItem === 'Contact'}
                    // onClick={}       
                        >Contact
                </Menu.Item>

             
                <Button 
                href="https://secure.actblue.com/donate/theodore-steinberg-1"
                onClick={this.submitEmail}
                floated='right'
                compact = {true}
                className="donate"
                align="right"
                color="google plus"
                size="massive"
                >Donate
                </Button>



            </Fragment>
            </Menu>
        
         
        )
    }
}

export default NavBar;