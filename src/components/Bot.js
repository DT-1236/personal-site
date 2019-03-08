import React, { Component } from 'react';

import PT from './ProjectTemplate';

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

class Bot extends Component {
  render() {
    return (
      <PT.Container className="Bot">
        <PT.Title>Discord Bots</PT.Title>
        <PT.ImgContainer style={{ marginBottom: '5vh' }}>
          <PT.Img src={pssLogo} />
        </PT.ImgContainer>
        <p>
          Pixel Starships (PSS) was the game that started it. By programming AI
          commands for crew, I was able to dispel the idea that programming
          would be too difficult for me. I made two bots to serve the PSS
          Discord community. Here are some relevant game mechanics to provide
          context:
        </p>
        <PT.Subheading>Character Prestige</PT.Subheading>
        <p>
          Two characters could be combined to form a higher grade character.
          Outcomes changed with game versions, and a complete list of
          combinations was unavailable. It took a significant amount of
          resources to prestige, so having an unexpected outcome could be
          catastrophic
        </p>
        <PT.Subheading>Character Stats / Equipment</PT.Subheading>
        <p>
          Characters had differing base stats and differing equipment slots. A
          character with slightly inferior base stats may end up being superior
          for a role due to available best-in-slot equipment and/or training
          potential. Because of these possible differences, choosing the optimal
          crew was challenging
        </p>
        <PT.Subheading>Character Borrowing</PT.Subheading>
        <p>
          Players can lend some of their crew to the alliance pool and allow
          other members to use them. There was no way to assign a recipient.
          Since a specific crew member might be core to a particular build,
          accidentally taking the wrong crew member could cripple an alliance
          member
        </p>
        <PT.Subheading>Alliance Politics</PT.Subheading>
        <p>
          End-of-season ladder scoring was based on total trophy count of all
          alliance members. As such, there was an end-of-season rush to make
          'pacts' with high-trophy players and assemble the best scoring team.
          It was often difficult to assess trustworthiness and/or trophy-scoring
          potential - especially since players could change their ship names
        </p>

        <PT.Heading>PSS Bot</PT.Heading>
        <PT.Technologies>
          Python, discord.py, requests, fuzzy-wuzzy (fuzzy searching)
        </PT.Technologies>

        <PT.Subheading>Character / Equipment Information</PT.Subheading>

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
        <PT.ImgContainer>
          <PT.Img src={recipes1} alt="Possible prestige routes" />
          <PT.Img src={recipes2} alt="Possible ways to obtain this crew" />
        </PT.ImgContainer>
        <PT.ImgContainer>
          <PT.Img src={recipes3} alt="Legend" />
        </PT.ImgContainer>
        <p>
          From the comfort of the Discord channel, a player could query a
          character and get information regarding all prestige combinations
          using or resulting in that character
        </p>
        <PT.ImgContainer>
          <PT.Img src={gearBestInSlot} alt="Stats with best-in-slot gear" />
          <PT.Img src={baseStats} alt="Base stats of a crew member" />
        </PT.ImgContainer>

        <p>
          It would also give base stats as well as all possible stats given the
          current best-in-slot gear and a reasonable amount of training
        </p>
        <PT.ImgContainer>
          <PT.Img src={comparisons1} alt="Comparing base stats" />
          <PT.Img
            src={comparisons2}
            alt="Comparing stats with best-in-slot gear"
          />
        </PT.ImgContainer>

        <p>
          If two characters were given, it would offer a comparison of base
          stats and best stats with best-in-slot gear
        </p>

        <PT.Heading>Council Bot</PT.Heading>
        <PT.Technologies>
          Python, discord.py, requests, fuzzy-wuzzy, MS SQL, pyodbc, Matplotlib
        </PT.Technologies>

        <PT.Subheading>Alliance / Trophy Information</PT.Subheading>
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
        <PT.ImgContainer>
          <PT.Img src={history} alt="Player alliance history" />
        </PT.ImgContainer>
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

        <PT.ImgContainer>
          <PT.Img src={trophies} alt="Trophy count over time for player(s)" />
          <PT.Img
            src={averages}
            alt="Average player trophy count in alliance(s) over time"
          />
        </PT.ImgContainer>

        <p>
          The trophy count over time helped leadership determine a candidate's
          approximate trophy contribution at the end of the season. Average
          player trophy count
        </p>

        <PT.Subheading>Crew Recipient</PT.Subheading>

        <PT.ImgContainer>
          <PT.Img src={recipient} alt="Receiving members of loaned crew" />
        </PT.ImgContainer>

        <p>
          Council Bot could take a given ShipID and identify the receiving
          player for loaned crew members. It did so by querying the PSS API for
          every ship in the alliance, looking through their crew, and matching
          the originating ID to the supplied ID. This helped leadership try to
          correct errant behavior either by verbal advice or outright ejection
        </p>

        <p>
          For a closer look, check out the
          <a href="https://github.com/DT-1236/pss_bots">{' repository'}</a>
        </p>
      </PT.Container>
    );
  }
}

export default Bot;
