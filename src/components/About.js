import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 50vw;
  max-width: 90%;
  object-fit: contain;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class About extends Component {
  render() {
    return (
      <Container className="About">
        <p>
          I'm a full-stack engineer (React.js, Flask/Express, Postgres) who
          really enjoys the problem-solving aspect of software development.
          Career-wise, I'm quite interested in adding new skills to my
          repertoire or improving my work by learning best practices or advanced
          patterns
        </p>
        <p>
          A little more about me - after 4 years in cancer research and 2 years
          writing medical notes in hospital emergency departments, I wanted a
          change of pace. It just so happened that my friends and I wanted a
          Discord bot to give us game-data, so I ended up going down a rabbit
          hole. I taught myself Python and got{' '}
          <Link to="/bot">a taste for programming</Link>
        </p>
        <p>
          I was proud enough about it that I showed it to a startup in Milwaukee
          (DARTChart) and got a job. Though it wasn't initially a technical
          role, I was able to leverage my newfound Python skills to vastly
          increase my efficiency. The concepts behind those scripts laid out
          plans for new features/services, and I got moved to the technical side
          of the house.
        </p>

        <p>
          While I was over there, I supported largely undocumented systems for
          10+ clients. I even on-boarded 4 new clients and created several novel
          integrations using Python, sftp, and our existing processes. After a
          little over a year at DART, I got married and moved to San Francisco.
          The change in location got me thinking about next steps. After working
          with some of the more experienced developers at DART, I understood
          just how, shall we say, unstructured my code could be
        </p>
        <p>
          I decided to beef up on best practices and overall coding ability by
          enrolling in Rithm School. As part of the course, I completed an
          internship at Groupmuse. Their mobile app had been around for about a
          year and a half, and in that time the ubiquitous focus on speed had
          accrued quite a bit of tech debt. Our primary goal for this internship
          was to refactor the codebase for readability and maintainability
        </p>
        <p>
          I can concretely say that I got exactly what I wanted out of my time
          at Rithm. By the end of the internship, we had learned several
          advanced patterns in React and implemented them in the production
          codebase. Before our changes, it took us about a day and a half just
          to nudge a button a few pixels. After our changes, the process was cut
          down to several minutes - tops. We impressed the CTO with our work,
          and he's optimistic that any future adjustments to layout can leverage
          our changes and proceed smoothly
        </p>
        <p>
          So that's that. Thanks for making it all the way to the bottom. I'm
          excited to move forward from here. Here's a bonus picture of my wife
          and dog for making it here
        </p>
        <ImgContainer>
          <Img
            src="https://www.knox.edu/images/_News/news_media/img/2018/old-main-sky-158393.jpg"
            alt="Old Main"
          />
        </ImgContainer>
      </Container>
    );
  }
}

export default About;
