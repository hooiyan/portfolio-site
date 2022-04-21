import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const CardImage = ({ alt }) => (
  // TODO: Change to a real image
  <StaticImage
    src="https://source.unsplash.com/random"
    alt={alt}
    className="image-wrapper"
    imgClassName="image"
  />
);

export default CardImage;

CardImage.propTypes = {
  alt: PropTypes.string.isRequired,
};
