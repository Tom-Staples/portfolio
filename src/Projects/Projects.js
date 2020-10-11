import React from 'react';
import projectList from './projectList';
import ProjectItem from './ProjectItem';
import { Container, Row} from 'react-bootstrap';

const Projects = () => {
    const projects = projectList.map(project => {
        return(
            <ProjectItem 
                key={project.id}
                name={project.name}
                img={project.img}
                id={project.id}
                description={project.description}
            />
        )
    })
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Projects</h1><br />
                    <Container fluid>
                        <Row>
                            {projects}
                        </Row>
                    </Container>
        </div>
    )
}

export default Projects;