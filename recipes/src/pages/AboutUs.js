import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ava1 from '../img/avatars/ava1.png';
import ava2 from '../img/avatars/ava2.png';
import ava3 from '../img/avatars/ava3.png';
import ava4 from '../img/avatars/ava4.png';

function AboutUs() {
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Charles Sullivan',
      description: 'Description',
      avatar: ava1,
    },
    {
      id: 2,
      name: 'Andrew Hu',
      description: "I'm Andrew, a senior majoring in Biology and minoring in Computer Science. I enjoy cooking with my friends in groups, so I've provided some of the more savory recipes here.",
      avatar: ava2,
    },
    {
      id: 3,
      name: 'Aimuan Erhabor',
      description: 'Description',
      avatar: ava3,
    },
    {
      id: 4,
      name: 'Nhi Le',
      description: "I'm currently in my first year of the MSCS program. I'm from Vietnam and I think our cuisine is probably one of the healthiest out there! We incorporate lots of fresh herbs and vegetables in our dishes.",
      avatar: ava4,
    },
  ];

  return (
    <Container>
      <h1 className="text-center my-4">About Us</h1>
      <Row className="d-flex flex-wrap justify-content-center">
        {teamMembers.map((member) => (
          <Col key={member.id} className="text-center mb-4">
            {/* Avatar */}
            <img
              src={member.avatar}
              alt={`${member.name}'s Avatar`}
              className="img-fluid rounded-circle mb-2"
              style={{ width: '50%' }}
            />
            {/* Name and Description */}
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutUs;
