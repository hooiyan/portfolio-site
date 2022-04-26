import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${(props) =>
    props.isDark ? 'var(--color-primary-dark-blue-hex)' : 'transparent'};
  border: 1px solid var(--color-primary-grayish-blue-hex);
  color: ${(props) =>
    props.isDark ? 'var(--white)' : 'var(--color-primary-grayish-blue-hex)'};
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  height: 4.8rem;
  width: 17.8rem;

  &:hover {
    background-color: ${(props) =>
      props.isDark
        ? 'var(--color-secondary-very-light-gray-hex)'
        : 'var(--color-primary-grayish-blue-hex)'};
    color: ${(props) =>
      props.isDark
        ? 'var(--color-primary-grayish-blue-hex)'
        : 'var(--color-secondary-very-light-gray-hex)'};
  }
`;

const Button = ({ to, value }) => <ButtonStyles to={to}>{value}</ButtonStyles>;

export default Button;

Button.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
