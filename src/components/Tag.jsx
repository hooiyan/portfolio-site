import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TagStyles = styled(Link)`
  background-color: var(--color-primary-grayish-blue-hex);
  border: none;
  border-radius: 25px;
  color: var(--color-secondary-very-light-gray-hex);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0rem 1.5rem;
  text-decoration: none;
`;

const Tag = ({ text, to }) => <TagStyles to={to}>{text}</TagStyles>;

export default Tag;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
