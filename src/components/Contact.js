import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CLink = styled(Link)`
  text-decoration: null;
`;

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <CLink to="WEMascarinas@gmail.com">WEMascarinas@gmail.com</CLink>
        <CLink to="https://github.com/DT-1236">GitHub</CLink>
        Mobile: (630) 267-8899
      </div>
    );
  }
}

export default Contact;
