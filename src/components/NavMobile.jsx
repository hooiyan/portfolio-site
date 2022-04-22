import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import IconClose from './icons/IconClose';
import IconHamburger from './icons/IconHamburger';
import NavMenuItem from './NavMenuItem';

const MobileWrapperStyles = styled.div`
  cursor: pointer;
  display: none;
  position: relative;
  z-index: 999;

  @media ${device.tabletS} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const MenuListStyles = styled.ul`
  display: none;

  @media ${device.tabletS} {
    background-color: var(--color-primary-grayish-blue-hex);
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    row-gap: 3.2rem;
    padding: var(--mobile-menu-spacing-vertical)
      var(--mobile-menu-spacing-horizontal);
    text-align: center;
    position: absolute;
    top: calc(3.2rem + 2.4rem);
    width: 22.3rem;
    /* height: 18.6rem; */
  }

  a {
    color: var(--white);
  }
`;

const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    const isOutside = !e.target.closest('.menu-list');
    return isOutside && setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <MobileWrapperStyles className="mobile-nav">
      <div
        className="toggle-button"
        onClick={() => {
          toggleMenu();
        }}
        onKeyDown={toggleMenu}
        role="button"
        tabIndex={0}
      >
        {!isOpen ? <IconHamburger /> : <IconClose />}
      </div>
      {isOpen && (
        <MenuListStyles className="menu-list">
          <NavMenuItem>
            <Link
              to="/"
              activeStyle={{
                color: `var(--color-primary-cyan-hex)`,
              }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </NavMenuItem>
          <NavMenuItem>
            <Link
              to="/portfolio/"
              activeStyle={{
                color: `var(--color-primary-cyan-hex)`,
              }}
              partiallyActive
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </NavMenuItem>
          <NavMenuItem>
            <Link
              to="/contact/"
              activeStyle={{
                color: `var(--color-primary-cyan-hex)`,
              }}
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </NavMenuItem>
        </MenuListStyles>
      )}
    </MobileWrapperStyles>
  );
};

export default NavMobile;
