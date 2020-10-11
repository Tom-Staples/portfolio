import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <Nav className="mr-auto">              
            <Nav.Link
                as={NavLink} 
                to="/" 
                className="links"
                exact
                activeClassName="activeLink"
            >Home
            </Nav.Link>
            <Nav.Link
                as={NavLink} 
                to="/about" 
                className="links"
                activeClassName="activeLink"
            >About
            </Nav.Link>
            <Nav.Link
                as={NavLink} 
                to="/projects"
                className="links"
                activeClassName="activeLink"
            >Projects
            </Nav.Link>
        </Nav>
    )
}

export default Menu;