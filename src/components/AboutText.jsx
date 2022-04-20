import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Button from './Button';

const WrapperStyles = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(32, 58, 76, 0.15);
  border-bottom: 1px solid rgba(32, 58, 76, 0.15);
  color: var(--color-primary-grayish-blue-hex);
  padding: 5rem 0;
  margin-left: 12.5rem;
  width: 50%;

  @media ${device.laptopM} {
    margin-left: 10rem;
  }

  @media ${device.laptopS} {
    margin-left: 8rem;
  }

  @media ${device.tablet} {
    width: 50%;
    margin-left: 4rem;
  }

  @media (max-width: 762px) {
    width: 100%;
    margin-top: 3.2rem;
    margin-left: 0;
  }

  .about-title {
    margin-bottom: 2.8rem;
    text-transform: capitalize;
  }

  .about-text {
    margin-bottom: 2.4rem;
    opacity: 0.8;
  }
`;

const AboutText = () => (
  <WrapperStyles className="about-text-wrapper">
    <h2 className="about-title">About me</h2>
    <p className="about-text">
      I'm a junior front-end developer looking for a new role in an exciting
      company. I focus on writing accessible HTML, using modern CSS practices
      and writing clean JavaScript. When writing JavaScript code, I mostly use
      react, but I can adapt to whatever tools are required. I'm based in
      London, UK, but I'm happy working remotely and have experience in remote
      teams. When I'm not coding, you'll find me outdoors. I love being out in
      nature whether that's going for a walk, run or cycling. I'd love you to
      check out my work.
    </p>
    <Button to="/portfolio/" value="Go to portfolio" />
  </WrapperStyles>
);

export default AboutText;
