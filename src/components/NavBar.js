import React, { Component, Fragment } from 'react';
import { Menu, Header, Image } from 'semantic-ui-react';
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends React.Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return(

            <Menu className="mainNav" >
            <Fragment>
                
                <Menu.Item 
                    name="Meet Ted"
                    to="/meetted"
                    as={NavLink}
                    active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >Meet Ted
                </Menu.Item>
            
                <Menu.Item 
                    as={NavLink}
                    name="My Priorities"
                    to="/mypriorities"
                    active={activeItem === 'My Priorities'}
                    // onClick={}       
                        >My Priorities
                </Menu.Item>

                <Menu.Item 
                    as={NavLink}
                    name="Where I Stand"
                    to="/whereistand"
                    active={activeItem === 'Where I Stand'}
                    // onClick={}       
                        >Where I Stand
                </Menu.Item>


                <Menu.Item 
                    as={NavLink}
                    name="Debate"
                    to="/debate"
                    active={activeItem === 'Debate'}
                    // onClick={}       
                        >Debate
                </Menu.Item>

                <Menu.Item 
                    as={NavLink}
                    name="Contact"
                    to="/contact"
                    active={activeItem === 'Contact'}
                    // onClick={}       
                        >Contact
                </Menu.Item>

                <Image 
                src="main-nav-logo-top-left.png" 
                size="small" 
                className="main-nav-logo-top-left"
                // align="right"
                floated="right"
                >
                </Image>

            </Fragment>
            </Menu>
        
         
        )
    }
}

export default NavBar;