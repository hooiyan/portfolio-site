import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import device from '../styles/Breakpoints';
import Logo from './icons/Logo';
import Nav from './Nav';

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--lg-global-spacing-vertical);
  padding-bottom: calc(var(--lg-global-spacing-vertical) - 1rem);
  padding-right: var(--lg-global-spacing-horizontal);
  padding-left: calc(var(--lg-global-spacing-horizontal) + 0.1rem);
  margin: 0 auto;
  max-width: var(--max-width);

  @media ${device.laptop} {
    padding-top: var(--md-global-spacing-vertical);
    padding-bottom: calc(var(--md-global-spacing-vertical) - 1.7rem);
    padding-right: var(--md-global-spacing-horizontal);
    padding-left: var(--md-global-spacing-horizontal);
  }

  @media ${device.tabletS} {
    padding-top: var(--sm-global-spacing-vertical);
    padding-bottom: calc(var(--sm-global-spacing-vertical) + 0.8rem);
    padding-right: var(--sm-global-spacing-horizontal);
    padding-left: var(--sm-global-spacing-horizontal);
  }

  .logo {
    color: var(--color-primary-grayish-blue-hex);
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderStyles className="header-wrapper">
    <Link to="/" className="logo">
      {/* <Logo fill="var(--color-primary-grayish-blue-hex)" /> */}
      HY
    </Link>
    <Nav />
  </HeaderStyles>
);

export default Header;
