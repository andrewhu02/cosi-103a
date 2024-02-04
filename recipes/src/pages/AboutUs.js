import React from 'react';
import './AboutUs.css';
import placeholder from '../img/team/placeholder.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
function AboutUs() {
  return (
    <div>
      <h1>About Us</h1> 
      <Container>
        <Card>
          <h2>Team Member 1</h2>
          <img class="team_img"src={placeholder}/>
          <p>Description</p>
        </Card>
        <Card>
          <h2>Team Member 2</h2>
          <img class="team_img"src={placeholder}/>
          <p>Description</p>
        </Card>
        <Card>
          <h2>Team Member 3</h2>
          <img class="team_img"src={placeholder}/>
          <p>Description</p>
        </Card>
        <Card>
          <h2>Team Member 4</h2>
          <img class="team_img"src={placeholder}/>
          <p>Description</p>
        </Card>
      </Container>
    </div>
  );
}

export default AboutUs;
