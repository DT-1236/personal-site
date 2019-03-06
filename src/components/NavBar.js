import React, { Component } from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import resume from '../static/resume.pdf';
import { MenuContext } from '../App';

const Nav = styled.nav`
  height: 5%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: lightgray;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow 1px 1px 18px #4683b451;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
  color: black;
  &.active {
    font-weight: bold;
  }
`;

const PortfolioLink = styled.div`
  margin: 10px;
  color: black;
  &.active {
    font-weight: bold;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 10px;
`;

const ItemContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  @media (min-width: 600px) {
    width: 70vw;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  box-shadow 1px 1px 18px #4683b451;

`;

const MenuItem = styled(Link)`
  margin: 0;
  text-decoration: none;
  background-color: gray;
  font-weight: normal;
  color: black;
  padding: 5%;
  width: 120%;
  &.active {
    font-weight: bold;
  }
`;

class NavBar extends Component {
  handleClick() {
    this.setState({ show: true });
  }

  render() {
    const location = this.props.location.pathname;
    const inPortfolio = ['bot', 'jobly', 'hos'].find(item =>
      location.includes(item)
    );
    return (
      <Nav className="NavBar">
        <ItemContainer>
          <NavItem exact to="/">
            Home
          </NavItem>
          <NavItem exact to="/about">
            About
          </NavItem>
          <MenuContext.Consumer>
            {({ show, status }) => (
              <PortfolioLink
                onClick={show}
                className={inPortfolio ? 'active' : ''}
              >
                Portfolio
                {status ? (
                  <Menu>
                    <MenuItem
                      className={inPortfolio === 'bot' ? 'active' : ''}
                      to="/bot"
                    >
                      PSS Bots
                    </MenuItem>
                    <MenuItem
                      className={inPortfolio === 'jobly' ? 'active' : ''}
                      to="jobly"
                    >
                      Jobly
                    </MenuItem>
                    <MenuItem
                      className={inPortfolio === 'hos' ? 'active' : ''}
                      to="hos"
                    >
                      "Hack-or-Snooze"
                    </MenuItem>
                  </Menu>
                ) : null}
              </PortfolioLink>
            )}
          </MenuContext.Consumer>

          <ResumeLink href={resume}>Resume</ResumeLink>
        </ItemContainer>
      </Nav>
    );
  }
}

export default withRouter(NavBar);
