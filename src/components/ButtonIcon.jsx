import React from 'react';
import styled from 'styled-components';
import IconDownArrow from './icons/IconDownArrow';

const WrapperStyles = styled.a`
  background-color: var(--color-primary-dark-blue-hex);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: 20rem;

  .icon-outer-wrapper {
    width: 4.8rem;
    height: 4.8rem;
    background-color: var(--color-primary-dark-blue-hex);
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-inner-wrapper {
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
  }

  button {
    background-color: var(--color-primary-dark-blue-hex);
    background-color: transparent;
    border: none;
    color: var(--white);
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1.7rem 4rem 1.7rem 0;
  }
`;

const ButtonIcon = () => (
  <WrapperStyles href="#about" className="button-icon-wrapper">
    <div className="icon-outer-wrapper">
      <div className="icon-inner-wrapper">
        <IconDownArrow />
      </div>
    </div>
    <button type="button">About me</button>
  </WrapperStyles>
);

export default ButtonIcon;
