import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';

const HeroImage = ({ isProject, src }) =>
  !isProject ? (
    <StaticImage
      alt="latest project screenshot"
      className="image-wrapper"
      imgClassName="image"
      layout="fullWidth"
      placeholder="TRACED_SVG"
      src="../images/hero.png"
    />
  ) : (
    <GatsbyImage
      alt="project screenshot"
      className="image-wrapper"
      image={getImage(src)}
      imgClassName="image"
    />
  );

export default HeroImage;

HeroImage.propTypes = {
  isProject: PropTypes.bool,
  src: PropTypes.object,
};
