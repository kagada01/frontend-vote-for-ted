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
                    as={NavLink}
                    active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >Meet Ted
                </Menu.Item>
            
                <Menu.Item
                    as={NavLink}
                    name="My Priorities"
                    active={activeItem === 'My Priorities'}
                    // onClick={}       
                        >My Priorities
                </Menu.Item>

                <Menu.Item
                    as={NavLink}
                    name="Where I Stand"
                    active={activeItem === 'Where I Stand'}
                    // onClick={}       
                        >Where I Stand
                </Menu.Item>


                <Menu.Item
                    as={NavLink}
                    name="Debate"
                    active={activeItem === 'Debate'}
                    // onClick={}       
                        >Debate
                </Menu.Item>

                <Menu.Item
                    as={NavLink}
                    name="Contact"
                    active={activeItem === 'Contact'}
                    // onClick={}       
                        >Contact
                </Menu.Item>

            </Fragment>
            </Menu>
        
         
        )
    }
}

export default NavBar;