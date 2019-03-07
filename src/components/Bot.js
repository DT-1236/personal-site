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
        <Category>Character Borrowing</Category>
        <p>
          Players can lend some of their crew to the alliance pool and allow
          other members to use them. There was no way to designate an intended
          recipient. Ship builds are highly specialized, and certain crew
          members are spectacular in certain roles. If a build is planned with
          certain lent crew-member in mind, the whole build could fall apart if
          someone accidentally takes a core crew member
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

        <Technologies>
          Python, discord.py, requests, fuzzy-wuzzy (fuzzy searching)
        </Technologies>
        <Category>Character / Equipment Information</Category>

        <p>
          This bot addressed the character and equipment problems. It did one
          round of API queries on starting, and kept the information in memory.
          This information could be refreshed with the correct user input.
        </p>
        <ImgContainer>{/* <Img src={characterInfo} /> */}</ImgContainer>

        <p>
          From the comfort of the Discord channel, a player could query a
          character and get information regarding all prestige combinations
          using or resulting in that character. It would also give base stats as
          well as all possible stats given the current best-in-slot gear and a
          reasonable amount of training. If two characters were given, it would
          offer a comparison of base stats and best stats with best-in-slot gear
        </p>

        <Heading>Council Bot</Heading>
        <Technologies>
          Python, discord.py, requests, fuzzy-wuzzy, MS SQL, pyodbc, Matplotlib
        </Technologies>

        <Category>Alliance / Trophy Information</Category>
        <p>
          Council bot helped in making decisions around alliance
          metrics/politics. It queried the PSS API for the current tropy count
          of every ship in every alliance in the top 50. At most it would do so
          once a day. Information was stored in an MS SQL database. Queries
          would be constructed based on inputs from the Discord channel.
        </p>
        <ImgContainer>{/* <Img src={pssTrophyCount} /> */}</ImgContainer>

        <p>
          Again, final scoring was based off of verbal agreements between
          players to join specific alliances at the end of the season.
          Frequently, such agreements were not honored or changed to serve
          various interests. Council Bot was able to provide a list of all known
          alliance affiliations to assist leadership in calculations and
          decisions. It also helped identify high-profile players by reporting a
          player's trophy count over time
        </p>

        <Category>Crew Recipient</Category>
        <p>
          Council Bot could take a given ShipID and identify the receiving
          player for loaned crew members. It did so by querying the PSS API for
          every ship in the alliance, looking through their crew, and matching
          the originating ID to the supplied ID.{' '}
        </p>

        <ImgContainer>{/* <Img src={pssCrewRecipient} /> */}</ImgContainer>

        <p>
          This helped leadership try to correct errant behavior either by verbal
          advice or outright ejection
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
