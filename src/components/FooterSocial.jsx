import React from 'react';
import styled from 'styled-components';
import IconGitHub from './icons/IconGitHub';
import IconTwitter from './icons/IconTwitter';
import IconLinkedIn from './icons/IconLinkedIn';

const WrapperStyles = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  .icon-twitter {
    height: 1.8rem;
  }
`;

const OutsideLink = styled.a`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`;

const FooterSocial = () => {
  const fill = 'var(--white)';

  return (
    <WrapperStyles className="footer-social">
      <OutsideLink className="outside-link icon-github">
        <IconGitHub fill={fill} />
      </OutsideLink>
      <OutsideLink className="outside-link icon-twitter">
        <IconTwitter fill={fill} />
      </OutsideLink>
      <OutsideLink className="outside-link icon-linkedin">
        <IconLinkedIn fill={fill} />
      </OutsideLink>
    </WrapperStyles>
  );
};

export default FooterSocial;
