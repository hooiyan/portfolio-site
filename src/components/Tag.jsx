import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TagStyles = styled.div`
  background-color: var(--color-primary-grayish-blue-hex);
  border: none;
  border-radius: 25px;
  color: var(--color-secondary-very-light-gray-hex);
  font-size: 1.2rem;
  padding: 0rem 1.5rem;
  text-decoration: none;
`;

const Tag = ({ text }) => <TagStyles>{text}</TagStyles>;

export default Tag;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};
