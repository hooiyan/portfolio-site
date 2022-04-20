import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Logo from './icons/Logo';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: calc(var(--lg-global-spacing-vertical) - 1rem);
`;

const Header = () => (
  <HeaderStyles className="header-wrapper">
    <Logo />
    <Nav />
  </HeaderStyles>
);

export default Header;
