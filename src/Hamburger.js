import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
 
const Hamburger = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [hover, setHover] = useState(false);
    const activeStyle = {
        color: "#0066cc"
    }
    return(
        <Nav className="mr-auto">
            <FontAwesomeIcon 
                icon={faBars} 
                style={{fontSize: "200%", color: hover ? "#ffffff" :"#0066cc", transition: "500ms"}}
                onClick={() => setOpenMenu(!openMenu)}
                onMouseEnter={() => setHover(!hover)}
                onMouseLeave={() => setHover(!hover)}
            />
            <div style={{
                 position: "fixed",
                 top: "0",
                 right: "0",
                 height: "100%",
                 width: openMenu ? "30%" : "0%",
                 backgroundImage: "linear-gradient(#343434, #020202)",
                 zIndex: "20",
                 transition: "1s"
            }}>
                <Nav.Link 
                    as={NavLink}
                    to="/"
                    className="links"
                    exact
                    activeStyle={activeStyle}
                    onClick={() => setOpenMenu(!openMenu)}
                >Home
                </Nav.Link>
                <Nav.Link 
                    as={NavLink}
                    to="/about"
                    className="links"
                    activeStyle={activeStyle}
                    onClick={() => setOpenMenu(!openMenu)}
                >About
                </Nav.Link>
                <Nav.Link 
                    as={NavLink}
                    to="/projects"
                    className="links"
                    activeStyle={activeStyle}
                    onClick={() => setOpenMenu(!openMenu)}
                >Projects
                </Nav.Link>
            </div>
        </Nav>
    )
}

export default Hamburger;