import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 7vh;
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

const Subheading = styled.h4`
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

class ProjectTemplate extends PureComponent {
  static Container = class extends PureComponent {
    render() {
      return <Container {...this.props} />;
    }
  };

  static Title = class extends PureComponent {
    render() {
      return <Title {...this.props} />;
    }
  };

  static Heading = class extends PureComponent {
    render() {
      return <Heading {...this.props} />;
    }
  };

  static Technologies = class extends PureComponent {
    render() {
      return <Technologies {...this.props} />;
    }
  };

  static Subheading = class extends PureComponent {
    render() {
      return <Subheading {...this.props} />;
    }
  };

  static ImgContainer = class extends PureComponent {
    render() {
      const { children, ...props } = this.props;
      return <ImgContainer {...props}>{children}</ImgContainer>;
    }
  };

  static Img = class extends PureComponent {
    render() {
      return <Img {...this.props} />;
    }
  };
}

export default ProjectTemplate;
