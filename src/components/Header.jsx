import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Logo from './icons/Logo';
import Nav from './Nav';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: var(--lg-global-spacing-vertical);
  padding-bottom: calc(var(--lg-global-spacing-vertical) - 1rem);
  padding-right: var(--lg-global-spacing-horizontal);
  padding-left: var(--lg-global-spacing-horizontal);
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
`;

const Header = () => (
  <HeaderStyles className="header-wrapper">
    <Logo />
    <Nav />
  </HeaderStyles>
);

export default Header;
