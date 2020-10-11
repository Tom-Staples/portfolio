import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Menu from './Menu';
import Hamburger from './Hamburger';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Project from './Projects/Project';
import { useMediaQuery } from 'react-responsive';



const App = () => {
    const isHamburger = useMediaQuery({
        maxWidth: 500
    })
    let menu = isHamburger ? <Hamburger /> : <Menu />;

    return(
            <div>
                <Navbar variant="dark" bg="dark" id="header">
                    {menu}
                        <Nav>
                            <Nav.Item style={{marginRight: "10px"}}>
                                <SocialIcon url="https://github.com/Tom-Staples" />
                            </Nav.Item>
                            <Nav.Item>
                                <SocialIcon url="https://www.linkedin.com/in/tom-staples95/" />
                            </Nav.Item>
                        </Nav>
                </Navbar>

                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/:id" component={Project} />
                    <Route path="/" render={props => <Home {...props} isHamburger={isHamburger}/>} />
                </Switch>
            </div>
    );
}

export default App;