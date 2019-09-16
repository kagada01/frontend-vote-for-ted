import React, { Component, Fragment } from 'react';
import { Menu, Header, Image } from 'semantic-ui-react';
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends React.Component {

    render() {
        return(

            <Menu align="right">
            <Fragment>
                
                <Menu.Item
                    name="Meet Ted"
                    // as={NavLink}
                    // active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >Meet Ted
                </Menu.Item>
            
                <Menu.Item
                    name="My Priorities"
                    // active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >My Priorities
                </Menu.Item>

                <Menu.Item
                    name="Where I Stand"
                    // active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >Where I Stand
                </Menu.Item>


                <Menu.Item
                    name="Debate"
                    // active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >Debate
                </Menu.Item>

                <Menu.Item
                    name="Contact"
                    // active={activeItem === 'Meet Ted'}
                    // onClick={}       
                        >Contact
                </Menu.Item>

            </Fragment>
            </Menu>
        
         
        )
    }
}

export default NavBar;