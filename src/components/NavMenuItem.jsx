import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NavMenuItemStyles = styled.li`
  font-size: var(--menu-item-size);
  letter-spacing: 2px;
  list-style: none;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }
`;

const MenuItem = ({ children }) => (
  <NavMenuItemStyles className="menu-item">{children}</NavMenuItemStyles>
);

export default MenuItem;

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
};
