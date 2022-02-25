import React from 'react';
import { Container } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import projectList from '../Projects/projectList';
import { SocialIcon } from 'react-social-icons';

const Project = () => {
  const match = useRouteMatch();
  const project = projectList.filter(project => project.id === match.params.id);
  return (
    <Container style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1 style={{ marginBottom: '30px' }}>{project[0].name}</h1>
      <video
        width='1000px'
        height='auto'
        controls
        className='videos'
        style={{ padding: '5x', marginBottom: '20px' }}
      >
        <source src={project[0].vid} type='video/mp4' />
      </video>
      <p style={{ padding: '5px', textAlign: 'left' }}>{project[0].message}</p>
      <SocialIcon url={project[0].gitRepo} />
      <p>{project[0].name}</p>
    </Container>
  );
};

export default Project;
