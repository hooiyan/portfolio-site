import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const CardImage = ({ alt, src }) => (
  <GatsbyImage
    alt={alt}
    image={getImage(src)}
    className="image-wrapper"
    imgClassName="image"
  />
);

export default CardImage;

CardImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.object.isRequired,
};
