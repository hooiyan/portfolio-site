import React from 'react';
import styled from 'styled-components';

const VerticalDividerStyles = styled.div`
  background-color: rgba(51, 50, 61, 0.15);
  color: rgba(51, 50, 61, 0.15);
  width: 20px;
  height: 100%;
  border: 100% solid black;
  /* height: 10px; */
`;

const VerticalDivider = () => <VerticalDividerStyles />;

export default VerticalDivider;
