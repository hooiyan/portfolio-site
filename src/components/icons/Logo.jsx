import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
    <path
      fill={fill}
      fillRule="evenodd"
      d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
    />
  </svg>
);

export default Logo;

Logo.propTypes = {
  fill: PropTypes.string,
};
