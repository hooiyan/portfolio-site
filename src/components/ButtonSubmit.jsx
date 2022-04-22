import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  background-color: ${(props) =>
    props.isDark ? 'var(--color-primary-dark-blue-hex)' : 'transparent'};
  border: 1px solid var(--color-primary-grayish-blue-hex);
  color: ${(props) =>
    props.isDark ? 'var(--white)' : 'var(--color-primary-grayish-blue-hex)'};
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 1.6rem 3.6rem 1.6rem 3.2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  flex-shrink: 0;

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

const ButtonSubmit = ({ isDark, to, value }) => (
  <ButtonStyles type="submit" isDark={isDark} to={to}>
    {value}
  </ButtonStyles>
);

export default ButtonSubmit;

ButtonSubmit.propTypes = {
  isDark: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
