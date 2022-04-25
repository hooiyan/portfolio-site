import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const HeroImage = () => (
  <StaticImage
    src="../images/wall.png"
    alt="hooiyan's latest project screenshot"
    className="image-wrapper"
    imgClassName="image"
    layout="fullWidth"
  />
);

export default HeroImage;
