import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Heading1Styles = styled.h3`
  color: var(--color-primary-grayish-blue-hex);
  margin-bottom: 2.8rem;
`;

const ParagraphStyles = styled.p`
  color: rgba(51, 50, 61, 0.8);
  margin-bottom: 4rem;
`;

const OrderedListStyles = styled.ol`
  color: rgba(51, 50, 61, 0.8);
  margin-bottom: 4rem;
  margin-left: 2rem;

  li {
    margin-bottom: 1rem;
  }
`;

const UnorderedListStyles = styled.ul`
  color: rgba(51, 50, 61, 0.8);
  margin-bottom: 4rem;
  margin-left: 2rem;

  li {
    margin-bottom: 1rem;
  }
`;

const ExternalLinkStyles = styled.a`
  color: var(--color-primary-dark-blue-hex);
`;

const InlineCodeStyles = styled.code`
  background-color: var(--color-primary-grayish-blue-hex);
  border-radius: 5px;
  color: var(--color-secondary-light-gray-hex);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  padding: 0.1rem 0.5rem;
`;

const components = {
  h3: (props) => <Heading1Styles {...props} />,
  p: (props) => <ParagraphStyles {...props} />,
  ol: (props) => <OrderedListStyles {...props} />,
  ul: (props) => <UnorderedListStyles {...props} />,
  a: (props) => <ExternalLinkStyles {...props} />,
  inlineCode: (props) => <InlineCodeStyles {...props} />,
};

const MDXComponents = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXComponents;

MDXComponents.propTypes = {
  children: PropTypes.node.isRequired,
};
