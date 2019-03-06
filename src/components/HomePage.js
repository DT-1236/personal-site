import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faAngellist
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ame from '../static/Ame_bust.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: black;
`;

const Header = styled.div`
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: 10%;

  @media (max-width: 600px) {
    margin-top: 5%;
    margin-left: 5%;
  }
`;

const Blurb = styled.p`
  align-self: center;
  font-size: 1.2rem;
  width: 75%;
  margin: 0;
`;

const Descriptor = styled.p`
  font-size: 0.7rem;
  text-align: justify;
  padding: 5%;
  @media (min-width: 600px) {
    width: 40%;
  }
`;

const ProjectName = styled(Link)`
  margin-top: 10%;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  align-self: center;
  @media (min-width: 600px) {
    align-self: flex-end;
  }
`;

const Ame = styled.img`
  border-radius: 50%;
  width: 50%;
  opacity: 0.15;
  top: 10%;
  right: 5%;
  position: fixed;
  @media (min-width: 600px) {
    position: absolute;
    width: 30%;
    opacity: 0.8;
  }
`;

const Icons = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  justify-content: space-around;
  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const Icon = styled.button`
  height: 2.5rem;
  width: 2.5rem;
`;

const FAIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
`;

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Ame src={ame} />
        <Header>
          <Title>Emman</Title>
          <Title>Mascariñas</Title>
          <Icons>
            <Icon>
              <FAIcon icon={faGithub} />
            </Icon>
            <Icon>
              <FAIcon icon={faLinkedin} />
            </Icon>
            <Icon>
              <FAIcon icon={faAngellist} />
            </Icon>
            <Icon>
              <FAIcon icon={faEnvelope} />
            </Icon>
          </Icons>
        </Header>
        <Blurb>Full-stack software developer</Blurb>
        <Blurb>from the Midwest</Blurb>
        <ProjectName to="/bot">PSS Bot/Council Bot</ProjectName>
        <Descriptor>
          My first ever coding project. A tool for me and my buddies to help us
          out in-game. PSS Bot gives out general game data to the wider
          community, and Council Bot gives out metrics about the alliance
        </Descriptor>
        <ProjectName to="/jobly">Jobly</ProjectName>
        <Descriptor>
          A full-stack application for hosting job applications. The front end
          uses React and interacts with an Express.js/Postgres backend. A
          pending branch showcases use of Compound Components and Render Props.
        </Descriptor>
        <ProjectName to="/hos">"Hack-or-Snooze"</ProjectName>
        <Descriptor>
          Our first sprint at Rithm - written entirely using jQuery and the
          Callback Pattern. It's an article posting app made to be similar in
          functionality to the famed "Hacker News". My partner and I built out a
          lightweight ORM to interact with an existing API
        </Descriptor>
      </Container>
    );
  }
}

export default HomePage;
