import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class Bot extends Component {
  render() {
    return (
      <Container className="Bot">
        <p>Under construction</p>
        <p>
          In the meantime, you can look at the Github{' '}
          <a href="https://github.com/DT-1236/pss_bots">here</a>
        </p>
      </Container>
    );
  }
}

export default Bot;
