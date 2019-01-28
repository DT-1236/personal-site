import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import resume from '../resume.pdf';

const Nav = styled.nav`
  height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  align-items: center;
  font-size: 105%;
  position: fixed;
  z-index: 1;
  box-shadow 1px 1px 18px #4683b451;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  margin: 10px;

  &.active {
    color: olive;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
`;

class NavBar extends Component {
  render() {
    return (
      <Nav className="NavBar">
        <NavItem exact to="/">
          Home
        </NavItem>
        <NavItem exact to="/about">
          About
        </NavItem>
        {/* <NavItem exact to="/portfolio">
          Portfolio
        </NavItem> */}
        <NavItem exact to="/contact">
          Contact
        </NavItem>
        <ResumeLink href={resume}>Resume</ResumeLink>
      </Nav>
    );
  }
}

export default NavBar;
