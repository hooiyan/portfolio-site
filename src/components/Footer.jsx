import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import FooterNav from './FooterNav';
import SocialNetwork from './SocialNetwork';

const FooterStyles = styled.footer`
  background-color: var(--color-primary-grayish-blue-hex);
  color: var(--white);
  margin: 0 auto;
  max-width: var(--max-width);
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  padding-right: var(--lg-global-spacing-horizontal);
  padding-left: var(--lg-global-spacing-horizontal);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptop} {
    padding-right: var(--md-global-spacing-horizontal);
    padding-left: var(--md-global-spacing-horizontal);
  }

  @media ${device.tabletS} {
    padding-top: 5.6rem;
    padding-bottom: 5.6rem;
    padding-right: var(--sm-global-spacing-horizontal);
    padding-left: var(--sm-global-spacing-horizontal);
    text-align: center;
    flex-direction: column;
    row-gap: 4rem;
  }
`;

const Footer = () => (
  <FooterStyles className="footer-inner-wrapper">
    <FooterNav />
    <SocialNetwork fill="var(--white)" />
  </FooterStyles>
);

export default Footer;
