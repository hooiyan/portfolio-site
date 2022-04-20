import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import MenuItem from './NavMenuItem';

const DesktopWrapperStyles = styled.ul`
  display: flex;
  column-gap: 4.2rem;

  @media ${device.tabletS} {
    display: none;
  }

  a {
    color: var(--color-primary-grayish-blue-hex);
  }
`;

const NavDesktop = () => (
  <DesktopWrapperStyles className="desktop-nav">
    <MenuItem>
      <Link to="/" activeStyle={{ color: `var(--color-primary-cyan-hex)` }}>
        Home
      </Link>
    </MenuItem>
    <MenuItem>
      <Link
        to="/portfolio/"
        activeStyle={{ color: `var(--color-primary-cyan-hex)` }}
      >
        Portfolio
      </Link>
    </MenuItem>
    <MenuItem>
      <Link
        to="/contact/"
        activeStyle={{ color: `var(--color-primary-cyan-hex)` }}
      >
        Contact Me
      </Link>
    </MenuItem>
  </DesktopWrapperStyles>
);

export default NavDesktop;
