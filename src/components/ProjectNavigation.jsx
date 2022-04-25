import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import IconLeftArrow from './icons/IconLeftArrow';
import IconRightArrow from './icons/IconRightArrow';
import device from '../styles/Breakpoints';
import VerticalDivider from './VerticalDivider';

const NavigationWrapperStyles = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: calc(11.5rem - 1.6rem);
  height: 100%;

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
    border-left: 0;
    border-right: 0;

    @media ${device.tabletM} {
      flex-direction: column;
      align-items: flex-start;
      border-top: 1px solid rgba(51, 50, 61, 0.15);
      border-bottom: 1px solid rgba(51, 50, 61, 0.15);
    }
  }

  &.next-wrapper {
    /* border-left: 0; */
    border-right: 0;
    justify-content: flex-end;

    @media ${device.tabletM} {
      border-bottom: 1px solid rgba(51, 50, 61, 0.15);
      flex-direction: column-reverse;
      align-items: flex-end;
    }
  }

  .previous-text {
    margin-left: 3.2rem;
    margin-right: 1.6rem;

    @media ${device.tabletM} {
      margin-left: 0;
      margin-top: 1.6rem;
    }
  }

  .next-text {
    margin-right: 3.2rem;
    margin-left: 1.6rem;
    text-align: right;

    @media ${device.tabletM} {
      margin-right: 0;
      margin-top: 1.6rem;
    }
  }

  p {
    opacity: 0.5;
  }
`;

const ProjectNavigation = () => (
  <NavigationWrapperStyles>
    <ChildStyles to="/portfolio/" className="previous-wrapper">
      <IconLeftArrow />
      <div className="previous-text">
        <h3>Todo</h3>
        <p>Previous Project</p>
      </div>
    </ChildStyles>
    {/* <VerticalDivider /> */}
    <ChildStyles to="/portfolio/" className="next-wrapper">
      <div className="next-text">
        <h3>Entertainment</h3>
        <p>Next Project</p>
      </div>
      <IconRightArrow />
    </ChildStyles>
  </NavigationWrapperStyles>
);

export default ProjectNavigation;
