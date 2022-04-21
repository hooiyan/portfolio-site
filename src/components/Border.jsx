import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BorderStyles = styled.hr`
  border-top: 1px solid rgba(32, 58, 76, 0.15);
  border-bottom-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  height: 1px;
  width: 100%;
  top: ${(props) => (props.top ? '0' : null)};
  bottom: ${(props) => (props.bottom ? '0' : null)};
`;

const Border = ({ bottom, top }) => <BorderStyles bottom={bottom} top={top} />;

export default Border;

Border.propTypes = {
  bottom: PropTypes.bool,
  top: PropTypes.bool,
};
