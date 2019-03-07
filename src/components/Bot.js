import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import pssLogo from '../static/pss_logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: black;
`;

const Technologies = styled.h5`
  font-size: 0.5rem;
  font-style: italic;
  font-weight: lighter;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  align-self: flex-start;
`;

const Category = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  align-self: flex-start;
`;

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

class Bot extends Component {
  render() {
    return (
      <Container className="Bot">
        <Title>Discord Bots</Title>
        <Technologies>
          Python, discord.py, requests, fuzzy-wuzzy (fuzzy searching)
        </Technologies>
        <ImgContainer>
          <Img src={pssLogo} />
        </ImgContainer>
        <p>
          Pixel Starships was the game that started it for me. It had me program
          AI commands for crew and dispelled this idea that programming would be
          too difficult for me. I ended up making two bots to serve the PSS
          Discord community Relevant game mechanics:
        </p>
        <Category>Character Prestige</Category>
        <p>
          Two characters could be combined to form a higher grade character.
          Outcomes changed with game versions, and a complete list of
          combinations was unavailable
        </p>
        <Category>Character Stats / Equipment</Category>
        <p>
          Characters had differing stats and differing equipment slots. A
          character with slightly inferior stats may end up being superior for a
          role due to available best-in-slot equipment and/or training potential
        </p>
        <Category>Alliance Politics</Category>
        <p>
          End-of-season ladder scoring was based on total trophy count of all
          alliance members. An emergent feature of this environment was an
          end-of-season rush to make pacts with high-trophy players to assemble
          the team with the highest trophies. It did not reward loyalty to a
          faction
        </p>

        <Heading>PSS Bot</Heading>

        <Category>Character / Equipment Information</Category>

        <p>
          This bot addressed the character and equipment problems. It did one
          round of API queries on starting, and kept the information in memory.
          This information could be refreshed with the correct user input. From
          the comfort of the Discord channel, a player could query a character
          and get information regarding all prestige combinations using or
          resulting in that character. It would also give base stats as well as
          all possible stats given the current best-in-slot gear and a
          reasonable amount of training
        </p>
        <p>Under construction</p>
        <p>
          In the meantime, you can look at the
          <a href="https://github.com/DT-1236/pss_bots">{' pss_bots Github'}</a>
        </p>
      </Container>
    );
  }
}

export default Bot;
