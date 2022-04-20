import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import device from '../styles/Breakpoints';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Header from './Header';

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  padding-bottom: var(--lg-global-spacing-bottom);
  padding-right: var(--lg-global-spacing-horizontal);
  padding-left: var(--lg-global-spacing-horizontal);

  @media ${device.laptop} {
    padding-bottom: var(--md-global-spacing-bottom);
    padding-right: var(--md-global-spacing-horizontal);
    padding-left: var(--md-global-spacing-horizontal);
  }

  @media ${device.tabletS} {
    padding-bottom: var(--sm-global-spacing-bottom);
    padding-right: var(--sm-global-spacing-horizontal);
    padding-left: var(--sm-global-spacing-horizontal);
  }
`;

const FooterOuterWrapper = styled.div`
  background-color: var(--color-primary-grayish-blue-hex);
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header />
    <MainWrapper>{children}</MainWrapper>
    <FooterOuterWrapper className="footer-outer-wrapper">
      <Footer />
    </FooterOuterWrapper>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
