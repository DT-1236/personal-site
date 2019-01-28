import React, { Component } from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 50vw;
  max-width: 90%;
  object-fit: contain;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class About extends Component {
  render() {
    return (
      <Container className="About">
        <p>The text from my old, long about section is hidden</p>
        <p hidden>
          I was born in the Philippines and emigrated to the US in 1990. I
          occasionally visit, but I have few memories from there. I grew up in
          the Chicago area and studied chemistry at a small liberal arts
          institution called Knox College in Galesburg, IL. There, I met my
          future wife, Naomi, in the choir.
        </p>
        <ImgContainer>
          <Img
            src="https://www.knox.edu/images/_News/news_media/img/2018/old-main-sky-158393.jpg"
            alt="Old Main"
          />
        </ImgContainer>
        <p hidden>
          After graduation, I worked in a medical research laboratory in
          Chicago, developing Pancreatic Cancer models. I managed the lab and
          ran experiments for 5 years. I experienced many aspects of the
          scientific process. In 2014, Naomi was accepted to medical school at
          the Medical College of Wisconsin, so we moved to Milwaukee!
        </p>
        <ImgContainer>
          <Img
            src="https://stadiumjourney.com/wp-content/uploads/2016/07/Miller-Park-Exterior.jpg"
            alt="Miller Park"
          />
        </ImgContainer>
        <p hidden>
          There, I worked as a medical scribe alongside MDs as they treated
          patients in the Emergency Department. I wrote medical notes from
          scratch and learned to type very quickly. It was around then that I
          found I enjoy working with computer science logic constructs. In time,
          decided to pick up Python and find a job in the medical tech sector.
        </p>
        <p hidden>
          I started working for DART Chart helping nursing homes interpret
          patient contracts and bill Aboutropriate amounts from insurance
          companies. There, I developed tools to help analysts be more
          efficient, and assist integrations with increasing our information
          base. Then, in the summer of 2018, Naomi graduated medical school...
          So we drove our '93 Camry out to San Francisco!
        </p>
        <ImgContainer>
          <Img
            src="https://lh3.googleusercontent.com/328uDPLv8cSq_yLh3BL72BTUTdNZf20hv_wYpO4oHTTD1O1RJqOykJ6---H8QGqtn4VcExgHILgp--VsVt_4lGHhA0l4bFdvij_YbUPdfjZyyWBUH6_qRUvWSa7hEyObGuxxUzjPcwV_4SEMQc4DNmmK9vAi02cm3muXuz2BjwaPhjlOx3huhDgudva0zeU9k400yf19SJdwHjXk9Fc5cc2eSZZIGO3OE5F0lu0ytEaiiUJCIi5LW9ixq2uDyc9EPhtTDwlPKLNocu1NtmPXszLguovBNNjgMIuN6CBqB32u5WPCUtgZrXJnpXZLlNE8eAcKKLimX1kYBJfAKqNHplzSO-DjDFK5YNNNbRtgIcccibm7DTYlIZnap5OVJrBUrlQQmIJ_6DQZXJuQIjfpSyrGVcFcgztWMSJBwG0uU9znn44DjILgcG6Y_V_jMD7BAsvGo03WItywhNN50Lf-MplsTNIHxVFnJVz4ZRmDGHpwv4AfqDPqHGt22v4uDT0a_vHFavOK7VDOVRWVrZdAbj0JLtA3tJKJhwjif8454utIlDMbds3fkzfD3Bj3TrN0Q9Hf-GEhEhEV0_OmlbJmZvvDrQzYx3dkQNvvtTk6ocAVIikEAwg9PC94iZM6gSYgqXvqyuLPg3aSTMNPUBIIevrk=w1228-h921-no"
            alt="Naomi and Ame"
          />
        </ImgContainer>
        <p hidden>
          I worked remotely with DART Chart for a smooth transition to the Bay
          Area. Moving forward, I seek to solidify my foundations as a software
          developer with Rithm, and leverage my experience in medicine and
          research to find a solid role in Health IT
        </p>
      </Container>
    );
  }
}

export default About;
