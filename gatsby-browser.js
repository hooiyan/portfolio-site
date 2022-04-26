import React from 'react';
import Layout from './src/templates/Layout';

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export { wrapPageElement };
