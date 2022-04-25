import React from 'react';
import styled from 'styled-components';

const BorderStyles = styled.hr`
  border-top: 1px solid rgba(32, 58, 76, 0.15);
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  height: 1px;
  width: 100%;
`;

const Border = () => <BorderStyles />;

export default Border;
