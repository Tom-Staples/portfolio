import React from 'react';
import { Card, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectItem = (props) => {
    return(
        <Col 
            xl={3}
            lg={4}
            md={6}
            sm={6}
            xs={12} 
            style={{marginBottom: "25px"}}
        >
            <Card bg="dark" style={{height: "100%"}}>
                <Card.Body>
                    <Card.Title 
                        style={{textAlign: "center"}}
                    >{props.name}
                    </Card.Title>
                    <Card.Img 
                        variant="top" 
                        src={props.img} 
                    /><br />
                    <Card.Text 
                        style={{padding: "5px"}}
                    >
                    {props.description}
                    </Card.Text>
                </Card.Body>
                <Link 
                    to={"/projects/" + props.id} 
                    style={{textAlign: "center"}}>
                    <Button 
                        style={{backgroundColor: "#0066cc", marginBottom: "5px"}}
                    >Check it out!
                    </Button>
                </Link>
            </Card>
        </Col>
    );
}

export default ProjectItem;