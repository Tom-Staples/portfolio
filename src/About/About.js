import React from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import tomProfile from '../Images/profile.png';

const About = () => {
  const paraStyle = {
    paddingBottom: "10px",
    borderBottom: "solid #0066cc 2px",
    textAlign: "left"
  }
  const titleStyle = {
    textAlign: "left",
    color: "#0066cc"
  }
    return(
          <Container style={{marginTop: "30px", textAlign: "center", fontSize: "110%"}} fluid>
            <Row>
              <Col>
              <img 
                src={tomProfile} 
                alt="Tom profile" 
                style={{margin: "0px 5px 10px 5px"}}
                className="images"
              />
              </Col>
              <Col xl={8} lg={7} md={12} sm={12} xs={12}>
              <h1 style={{textAlign: "center", marginBottom: "50px"}}>About me</h1>
              <h3 style={titleStyle}>Biography</h3>
              <p style={paraStyle}>
                Hi! I'm Tom Staples, a front end software developer from Nottingham. Experienced in HTML, CSS, Javascript, and React.js. 
                I enjoy finding solutions to complex problems through code, creating dynamic and responsive webpages for all users, and
                replicating classic computer games.
              </p>
              <h3 style={titleStyle}>Motivation</h3>
              <p style={paraStyle}>
                I was first exposed to computer programming during my first year of university as a physics student. My very first project was to
                create a model of a pendulum using the visual programming language LabView. My passion for programming remained with projects in C++
                and MATLAB. However, it wasn't until 4 years after university that I began my self-taught journey. 
              </p>
              <h3 style={titleStyle}>Journey</h3>
              <p style={paraStyle}>
                With advice from the Youtuber Andy Sterkowitz, I picked up the <em><q>Head First</q></em> collection of programming books. I began with HTML and CSS
                and quickly moved on to Javascript. The interactive exercises in the books helped to reinforce the key concepts of the respective languages.
                I began to work on my own <q>real life</q> projects that I was passionate about. After a recommendation from a personal friend of mine, Sam Godwin
                (Software Engineer, IBM), I decided to learn and incorporate the React.js library in to future projects.
              </p>
              <h3 style={titleStyle}>Hobbies</h3>
              <p style={paraStyle}>
                When I'm not coding, you'll probably find me watching football with the boys, heading down a youtube rabbit hole on some truly obscure topics, or keeping
                up to date on my DIY skills by finishing those tasks around the house that I always seem to put off!
              </p>
              </Col>
              </Row>
          </Container>
    )
}

export default About;