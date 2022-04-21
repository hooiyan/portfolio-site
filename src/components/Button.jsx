import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled(Link)`
  background-color: transparent;
  border: 1px solid var(--color-primary-grayish-blue-hex);
  color: var(--color-primary-grayish-blue-hex);
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 1.6rem 3.6rem 1.6rem 3.2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  flex-shrink: 0;

  &:hover {
    background-color: var(--color-primary-grayish-blue-hex);
    color: var(--color-secondary-very-light-gray-hex);
  }
`;

const Button = ({ to, value }) => <ButtonStyles to={to}>{value}</ButtonStyles>;

export default Button;

Button.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
