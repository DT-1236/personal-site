import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './components/NavBar';
import Routes from './components/Routes';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;

  @media (min-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  width: 100vw;
  height: 100vw;
  margin-top: 10%;

  @media (min-width: 600px) {
    width: 80%;
  }
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <NavBar />
        <Content>
          <Routes />
        </Content>
      </Container>
    );
  }
}

export default App;
