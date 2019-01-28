import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './components/NavBar';
import Routes from './components/Routes';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 60px 20px;
  font-weight: bold;
  border-radius: 20px
  width: 70%;
  align-self: center;
  background-color: rebeccapurple;
  color: lightgray;
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
