import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './components/NavBar';
import Routes from './components/Routes';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  @media (min-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Content = styled.div`
  flex-direction: column;
  width: 100vw;
  height: 100vw;
  margin-top: 10%;

  @media (min-width: 600px) {
    width: 80%;
  }
`;

const MenuContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    this.setState({ show: true });
  }

  closeMenu() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Container className="App">
        <MenuContext.Provider
          value={{ show: this.showMenu, status: this.state.show }}
        >
          <NavBar />
        </MenuContext.Provider>
        <Content onClick={this.closeMenu}>
          <Routes />
        </Content>
      </Container>
    );
  }
}

export default App;
export { MenuContext };
