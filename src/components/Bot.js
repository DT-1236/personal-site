import React, { Component } from 'react';
import styled from 'styled-components';

import pssLogo from '../static/projectBots/pss_logo.png';
import averages from '../static/projectBots/averages.png';
import baseStats from '../static/projectBots/baseStats.png';
import gearBestInSlot from '../static/projectBots/gearBestInSlot.png';
import history from '../static/projectBots/history.png';
import comparisons1 from '../static/projectBots/comparisons1.png';
import comparisons2 from '../static/projectBots/comparisons2.png';
import recipes1 from '../static/projectBots/recipes1.png';
import recipes2 from '../static/projectBots/recipes2.png';
import recipes3 from '../static/projectBots/recipes3.png';
import recipient from '../static/projectBots/recipient.png';
import trophies from '../static/projectBots/trophies.png';

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

const Heading = styled.h3`
  font-size: 1.5rem;
  align-self: flex-start;
`;

const Technologies = styled.h5`
  align-self: flex-start;
  font-size: 0.5rem;
  font-style: italic;
  font-weight: lighter;
`;

const Category = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  align-self: flex-start;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vh;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
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
        <ImgContainer style={{ marginBottom: '5vh' }}>
          <Img src={pssLogo} />
        </ImgContainer>
        <p>
          Pixel Starships (PSS) was the game that started it. By programming AI
          commands for crew, I was able to dispel the idea that programming
          would be too difficult for me. I made two bots to serve the PSS
          Discord community. Here are some relevant game mechanics to provide
          context:
        </p>
        <Category>Character Prestige</Category>
        <p>
          Two characters could be combined to form a higher grade character.
          Outcomes changed with game versions, and a complete list of
          combinations was unavailable. It took a significant amount of
          resources to prestige, so having an unexpected outcome could be
          catastrophic
        </p>
        <Category>Character Stats / Equipment</Category>
        <p>
          Characters had differing base stats and differing equipment slots. A
          character with slightly inferior base stats may end up being superior
          for a role due to available best-in-slot equipment and/or training
          potential. Because of these possible differences, choosing the optimal
          crew was challenging
        </p>
        <Category>Character Borrowing</Category>
        <p>
          Players can lend some of their crew to the alliance pool and allow
          other members to use them. There was no way to assign a recipient.
          Since a specific crew member might be core to a particular build,
          accidentally taking the wrong crew member could cripple an alliance
          member
        </p>
        <Category>Alliance Politics</Category>
        <p>
          End-of-season ladder scoring was based on total trophy count of all
          alliance members. As such, there was an end-of-season rush to make
          'pacts' with high-trophy players and assemble the best scoring team.
          It was often difficult to assess trustworthiness and/or trophy-scoring
          potential - especially since players could change their ship names
        </p>

        <Heading>PSS Bot</Heading>
        <Technologies>
          Python, discord.py, requests, fuzzy-wuzzy (fuzzy searching)
        </Technologies>

        <Category>Character / Equipment Information</Category>

        <p>
          PSS Bot did an initial round of API queries on starting and kept the
          information in memory. This information could be refreshed with the
          correct user input. Fuzzy matching was also implemented, so users
          could give an approximation of crew spelling and get the desired
          results
        </p>
        <p>
          Overall, it made decisions regarding crew optimization and prestige
          significantly easier
        </p>
        <ImgContainer>
          <Img src={recipes1} alt="Possible prestige routes" />
          <Img src={recipes2} alt="Possible ways to obtain this crew" />
        </ImgContainer>
        <ImgContainer>
          <Img src={recipes3} alt="Legend" />
        </ImgContainer>
        <p>
          From the comfort of the Discord channel, a player could query a
          character and get information regarding all prestige combinations
          using or resulting in that character
        </p>
        <ImgContainer>
          <Img src={gearBestInSlot} alt="Stats with best-in-slot gear" />
          <Img src={baseStats} alt="Base stats of a crew member" />
        </ImgContainer>

        <p>
          It would also give base stats as well as all possible stats given the
          current best-in-slot gear and a reasonable amount of training
        </p>
        <ImgContainer>
          <Img src={comparisons1} alt="Comparing base stats" />
          <Img
            src={comparisons2}
            alt="Comparing stats with best-in-slot gear"
          />
        </ImgContainer>

        <p>
          If two characters were given, it would offer a comparison of base
          stats and best stats with best-in-slot gear
        </p>

        <Heading>Council Bot</Heading>
        <Technologies>
          Python, discord.py, requests, fuzzy-wuzzy, MS SQL, pyodbc, Matplotlib
        </Technologies>

        <Category>Alliance / Trophy Information</Category>
        <p>
          Council bot helped in making decisions around alliance
          metrics/politics. It queried the PSS API for the current trophy count
          of every ship in every alliance in the top 50. At most it would do so
          once a day. Information was stored in an MS SQL database. Queries
          would be constructed based on inputs from the Discord channel
        </p>
        <p>
          Overall, Council Bot services made leadership decisions easier by
          giving metrics that could evaluate playing ability and/or
          trustworthiness
        </p>
        <ImgContainer>
          <Img src={history} alt="Player alliance history" />
        </ImgContainer>
        <p>
          Again, final scoring was based off of <b>verbal</b> agreements between
          players to join specific alliances at the end of the season. The
          alliance history was used as a sort of metric for trustworthiness
          given the meta. At the time of this example, any affiliation with
          D.R.A.G.O.N almost guaranteed that the player would act against the
          interests of Dark Matter Heroes. Thus, if this player had changed
          their name and approached Dark Matter Heroes for an end-of-season
          agreement, leadership in Dark Matter Heroes would know to take that
          intention with a grain of salt
        </p>

        <ImgContainer>
          <Img src={trophies} alt="Trophy count over time for player(s)" />
          <Img
            src={averages}
            alt="Average player trophy count in alliance(s) over time"
          />
        </ImgContainer>

        <p>
          The trophy count over time helped leadership determine a candidate's
          approximate trophy contribution at the end of the season. Average
          player trophy count
        </p>

        <Category>Crew Recipient</Category>

        <ImgContainer>
          <Img src={recipient} alt="Receiving members of loaned crew" />
        </ImgContainer>

        <p>
          Council Bot could take a given ShipID and identify the receiving
          player for loaned crew members. It did so by querying the PSS API for
          every ship in the alliance, looking through their crew, and matching
          the originating ID to the supplied ID. This helped leadership try to
          correct errant behavior either by verbal advice or outright ejection
        </p>

        <p>
          If you want to look deeper into it, you can take a look at the
          <a href="https://github.com/DT-1236/pss_bots">
            {' pss_bots repository'}
          </a>
        </p>
      </Container>
    );
  }
}

export default Bot;
