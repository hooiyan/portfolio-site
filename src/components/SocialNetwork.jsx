import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import IconGitHub from './icons/IconGitHub';
import IconLinkedIn from './icons/IconLinkedIn';
import IconTwitter from './icons/IconTwitter';

const SocialNetworkStyles = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  .icon-twitter {
    height: 1.8rem;
  }
`;

const OutsideLink = styled.a`
  cursor: pointer;
  height: 2.4rem;
  width: 2.4rem;
`;

const SocialNetwork = ({ fill }) => (
  // TODO: Add social media links
  <SocialNetworkStyles className="footer-social">
    <OutsideLink className="outside-link icon-github">
      <IconGitHub fill={fill} />
    </OutsideLink>
    <OutsideLink className="outside-link icon-twitter">
      <IconTwitter fill={fill} />
    </OutsideLink>
    <OutsideLink className="outside-link icon-linkedin">
      <IconLinkedIn fill={fill} />
    </OutsideLink>
  </SocialNetworkStyles>
);
export default SocialNetwork;

SocialNetwork.propTypes = {
  fill: PropTypes.string.isRequired,
};
