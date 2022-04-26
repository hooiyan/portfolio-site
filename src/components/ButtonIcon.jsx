import React from 'react';
import styled from 'styled-components';
import IconDownArrow from './icons/IconDownArrow';

const ButtonIconStyles = styled.a`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary-dark-blue-hex);
  cursor: pointer;
  text-decoration: none;
  width: 20rem;

  .icon-outer-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-dark-blue-hex);
    background-color: transparent;
    height: 4.8rem;
    width: 4.8rem;
  }

  .icon-inner-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    height: 4.8rem;
    width: 4.8rem;
  }

  button {
    background-color: var(--color-primary-dark-blue-hex);
    background-color: transparent;
    border: none;
    color: var(--white);
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1.7rem 4rem 1.7rem 0;
    text-transform: uppercase;
  }
`;

const ButtonIcon = () => (
  <ButtonIconStyles href="#about" className="button-icon-wrapper">
    <div className="icon-outer-wrapper">
      <div className="icon-inner-wrapper">
        <IconDownArrow />
      </div>
    </div>
    <button type="button">About me</button>
  </ButtonIconStyles>
);

export default ButtonIcon;
