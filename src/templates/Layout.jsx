import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainStyles = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  padding-right: var(--lg-global-spacing-horizontal);
  padding-bottom: var(--lg-global-spacing-bottom);
  padding-left: var(--lg-global-spacing-horizontal);

  @media ${device.laptop} {
    padding-right: var(--md-global-spacing-horizontal);
    padding-bottom: var(--md-global-spacing-bottom);
    padding-left: var(--md-global-spacing-horizontal);
  }

  @media ${device.tabletS} {
    padding-right: var(--sm-global-spacing-horizontal);
    padding-bottom: var(--sm-global-spacing-bottom);
    padding-left: var(--sm-global-spacing-horizontal);
  }
`;

const FooterOuterStyles = styled.div`
  background-color: var(--color-primary-grayish-blue-hex);
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header />
    <MainStyles className="main-wrapper">{children}</MainStyles>
    <FooterOuterStyles className="footer-outer-wrapper">
      <Footer />
    </FooterOuterStyles>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
