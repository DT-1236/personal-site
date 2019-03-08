import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import dart from '../static/about/dart.jpg';
import bust from '../static/about/smiling_bust.jpg';
import pss from '../static/about/pss_collage.png';
import game from '../static/about/pss_ss.jpg';
import rithm from '../static/about/rithm_logo.svg';
import groupmuse from '../static/about/groupmuse_logo.png';
import bonus from '../static/about/ame_and_naomi.jpg';

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 25vh;
  margin-top: 5vh;
  align-items: center;
  @media (min-width: 600px) {
    height: 50%;
  }
`;

const Img = styled.img`
  max-height: 35vh;
  max-width: 90%;
  object-fit: contain;
  border-radius: 5px;
`;

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  text-align: justify;
`;

const Blurb = styled.p`
  margin-top: 7vh;
  margin-bottom: 7vh;
  @media (min-width: 600px) {
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
`;

class About extends Component {
  render() {
    return (
      <Container className="About">
        <ImgContainer>
          <Img
            src={bust}
            alt="Me"
            style={{ borderRadius: '50%', boxShadow: '1px 1px 18px #4683b451' }}
          />
        </ImgContainer>

        <Blurb>
          I'm a full-stack engineer who really enjoys the problem-solving aspect
          of software development. Career-wise, I'm quite interested in adding
          new skills to my repertoire and improving my work by learning best
          practices or advanced patterns
        </Blurb>
        <ImgContainer>
          <Img
            src={game}
            alt="Pixel Starships!"
            style={{ boxShadow: '1px 1px 18px #4683b451' }}
          />
        </ImgContainer>

        <Blurb>
          A little more about me - after 4 years in cancer research and 2 years
          writing medical notes in hospital emergency departments, I wanted a
          change of pace. It just so happened that my friends and I wanted a
          Discord bot to give us game-data, so I ended up going down a rabbit
          hole. I taught myself Python and got{' '}
          <Link to="/bot">a taste for programming</Link>
        </Blurb>
        <ImgContainer>
          <Img
            src={pss}
            alt="Council Bot Screenshot"
            style={{ boxShadow: '1px 1px 18px #4683b451' }}
          />
        </ImgContainer>

        <Blurb>
          The community received the bot well. I was really proud of my work, so
          I showed it to a startup in Milwaukee (DARTChart) and got a job.
          Though it wasn't initially a technical role, I was able to leverage my
          newfound Python skills to vastly increase my efficiency. The concepts
          behind those scripts laid out plans for new features/services, and I
          got moved to the technical side of the house.
        </Blurb>
        <ImgContainer>
          <Img src={dart} alt="DART Logo" />
        </ImgContainer>

        <Blurb>
          While I was over there, I supported largely undocumented systems for
          10+ clients. I even on-boarded 4 new clients and created several novel
          integrations using Python, sftp, and our existing processes. After a
          little over a year at DART, I got married and moved to San Francisco.
          The change in location got me thinking about next steps. After working
          with some of the more experienced developers at DART, I understood
          just how, shall we say, unstructured my code could be
        </Blurb>
        <ImgContainer>
          <Img src={rithm} alt="Rithm Logo" />
        </ImgContainer>
        <Blurb>
          I decided to beef up on best practices and overall coding ability by
          enrolling in Rithm School. As part of the course, I completed an
          internship at Groupmuse. Their mobile app had been around for about a
          year and a half, and in that time the ubiquitous focus on speed had
          accrued quite a bit of tech debt. Our primary goal for this internship
          was to refactor the codebase for readability and maintainability
        </Blurb>
        <ImgContainer>
          <Img
            src={groupmuse}
            alt="Groupmuse Logo"
            style={{
              borderRadius: '80px',
              boxShadow: '1px 1px 18px #4683b451'
            }}
          />
        </ImgContainer>
        <Blurb>
          I can concretely say that I got exactly what I wanted out of my time
          at Rithm. By the end of the internship, we had learned several
          advanced patterns in React and implemented them in the production
          codebase. Before our changes, it took us about a day and a half just
          to nudge a button a few pixels. After our changes, the process was cut
          down to several minutes - tops. We impressed the CTO with our work,
          and he's optimistic that any future adjustments to layout can leverage
          our changes and proceed smoothly
        </Blurb>
        <ImgContainer>
          <Img src={bonus} alt="My family" />
        </ImgContainer>

        <Blurb>
          So that's that. I'm excited to move forward from here. Thanks for
          making it all the way to the bottom. Here's a picture of my family!
        </Blurb>
      </Container>
    );
  }
}

export default About;
