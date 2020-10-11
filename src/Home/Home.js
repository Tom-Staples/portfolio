import React from 'react';
import { Container, Row, Col, Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectLogo from '../Images/connect4.png';
import about from '../Images/about.png';


const Home = ({isHamburger}) => {
    return(
        <div>
            <Container
                fluid
                style={{textAlign: "center", marginTop: "100px"}}
            >
                <Row>
                    <Col>
                        <h1>Tom Staples</h1>
                    </Col>
                </Row>
                <Row>
                    <Col><h2>Software Developer | Physics Enthusiast | Football Fanatic</h2></Col>
                </Row>
            </Container><br />
                <Container>
                    <Carousel 
                        style={{textAlign: "center"}}
                        pause="hover"
                        controls={!isHamburger}
                    >
                        <Carousel.Item>
                            <Link 
                                to="/projects"><img 
                                src={projectLogo} 
                                alt="projects"
                                className="images"
                            /></Link>
                            <h3>Check out my projects!</h3>
                            <p>From connect 4, to a calorie tracker. There's something for everyone!</p><br />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/about"><img 
                                src={about} 
                                alt="about"
                                className="images"
                            /></Link>
                            <h3>This part's all about me!</h3>
                            <p>Get to know all about the man behind the monitor.</p><br />
                        </Carousel.Item>
                    </Carousel>
                </Container><br />
        </div>
    )
}

export default Home;