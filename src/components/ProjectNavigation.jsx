import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import IconLeftArrow from './icons/IconLeftArrow';
import IconRightArrow from './icons/IconRightArrow';

const ProjectNavigationStyles = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-bottom: calc(11.5rem - 1.6rem);

  @media ${device.tabletM} {
    flex-direction: column;
    justify-content: center;
    border: none;
  }
`;

const ChildStyles = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid rgba(51, 50, 61, 0.15);
  color: var(--color-primary-grayish-blue-hex);
  padding: 3.3rem 1.6rem 3.3rem 0;
  text-decoration: none;
  width: 50%;

  @media ${device.tabletM} {
    border: none;
    width: 100%;
  }

  &.previous-wrapper {
    border-right: 0;
    border-left: 0;

    @media ${device.tabletM} {
      align-items: flex-start;
      flex-direction: column;
      border-top: 1px solid rgba(51, 50, 61, 0.15);
      border-bottom: 1px solid rgba(51, 50, 61, 0.15);
    }
  }

  &.next-wrapper {
    border-right: 0;
    justify-content: flex-end;

    @media ${device.tabletM} {
      align-items: flex-end;
      flex-direction: column-reverse;
      border-bottom: 1px solid rgba(51, 50, 61, 0.15);
    }
  }

  .previous-text {
    margin-right: 1.6rem;
    margin-left: 3.2rem;

    @media ${device.tabletM} {
      margin-top: 1.6rem;
      margin-left: 0;
    }
  }

  .next-text {
    margin-right: 3.2rem;
    margin-left: 1.6rem;
    text-align: right;

    @media ${device.tabletM} {
      margin-top: 1.6rem;
      margin-right: 0;
    }
  }

  p {
    opacity: 0.5;
  }
`;

const ProjectNavigation = () => (
  <ProjectNavigationStyles>
    <ChildStyles to="/portfolio/" className="previous-wrapper">
      <IconLeftArrow />
      <div className="previous-text">
        <h3>Todo</h3>
        <p>Previous Project</p>
      </div>
    </ChildStyles>
    <ChildStyles to="/portfolio/" className="next-wrapper">
      <div className="next-text">
        <h3>Entertainment</h3>
        <p>Next Project</p>
      </div>
      <IconRightArrow />
    </ChildStyles>
  </ProjectNavigationStyles>
);

export default ProjectNavigation;
