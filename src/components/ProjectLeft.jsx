import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Border from './Border';
import CardImage from './CardImage';
import Button from './Button';
import Tag from './Tag';

const WrapperStyles = styled.section`
  margin-bottom: 4rem;
  width: 31.5%;

  @media ${device.tablet} {
    width: 100%;
  }

  .wrapper {
    padding: 4.8rem 0;
  }

  .upper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4.4rem;
  }

  .lower {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .title {
    color: var(--color-primary-grayish-blue-hex);
    margin-bottom: 3rem;
    text-transform: capitalize;
  }

  .summary {
    color: var(--color-primary-grayish-blue-hex);
    font-size: var(--body-2-size);
    line-height: var(--body-line-height);
    opacity: 0.8;
    margin-bottom: 2.4rem;
  }
`;

const ProjectLeft = () => (
  <WrapperStyles>
    <Border />
    <div className="wrapper">
      <h2 className="title">Manage</h2>
      <p className="summary">
        This project required me to build a fully responsive landing page to the
        designs provided. I used HTML5, along with CSS Grid and JavaScript for
        the areas that required interactivity, such as the testimonial slider.
      </p>
      <div className="upper">
        <Tag text="Next.js" to="/tag/nextjs" />
        <Tag text="TailwindCSS" to="/tag/tailwindcss" />
        <Tag text="API" to="/tag/api" />
        <Tag text="SWR" to="/tag/swr" />
        <Tag text="TMDB" to="/tag/tmdb" />
      </div>
      <div className="lower">
        <Button value="Visit Website" to="/" />
        <Button value="View Code" to="/" />
      </div>
    </div>
    <Border />
    {/* <CardImage /> */}
  </WrapperStyles>
);

export default ProjectLeft;
