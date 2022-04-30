import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import Logo from './icons/Logo';
import NavMenuItem from './NavMenuItem';

const FooterNavStyles = styled.section`
  display: flex;
  column-gap: 4.8rem;

  @media ${device.tabletM} {
    column-gap: 2rem;
  }

  @media ${device.tabletS} {
    align-items: center;
    flex-direction: column;
    row-gap: 4rem;
  }

  ul {
    display: flex;
    column-gap: 4.2rem;

    @media ${device.tabletM} {
      column-gap: 2.6rem;
    }

    @media ${device.tabletS} {
      flex-direction: column;
      row-gap: 3.2rem;
    }
  }

  a {
    color: var(--white);
  }

  .logo {
    color: var(--color-secondary-very-light-gray-hex);
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
  }
`;

const FooterNav = () => (
  <FooterNavStyles className="footer-nav">
    {/* <Logo fill="var(--white)" /> */}
    <ul>
      <NavMenuItem>
        <Link to="/">Home</Link>
      </NavMenuItem>
      <NavMenuItem>
        <Link to="/portfolio/">Portfolio</Link>
      </NavMenuItem>
      <NavMenuItem>
        <Link to="/contact/">Contact Me</Link>
      </NavMenuItem>
    </ul>
  </FooterNavStyles>
);

export default FooterNav;
