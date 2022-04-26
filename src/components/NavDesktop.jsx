import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import NavMenuItem from './NavMenuItem';

const NavDesktopStyles = styled.ul`
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
  <NavDesktopStyles className="desktop-nav">
    <NavMenuItem>
      <Link to="/" activeStyle={{ color: `var(--color-primary-cyan-hex)` }}>
        Home
      </Link>
    </NavMenuItem>
    <NavMenuItem>
      <Link
        to="/portfolio/"
        activeStyle={{ color: `var(--color-primary-cyan-hex)` }}
        partiallyActive
      >
        Portfolio
      </Link>
    </NavMenuItem>
    <NavMenuItem>
      <Link
        to="/contact/"
        activeStyle={{ color: `var(--color-primary-cyan-hex)` }}
      >
        Contact Me
      </Link>
    </NavMenuItem>
  </NavDesktopStyles>
);

export default NavDesktop;
