import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuItemStyles = styled.li`
  font-size: var(--menu-item-size);
  letter-spacing: 2px;
  list-style: none;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }
`;

const MenuItem = ({ children }) => (
  <MenuItemStyles className="menu-item">{children}</MenuItemStyles>
);

export default MenuItem;

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
};
