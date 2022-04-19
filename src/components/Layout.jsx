import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
