import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const HeroImage = () => (
  <StaticImage
    alt="latest project screenshot"
    className="image-wrapper"
    imgClassName="image"
    layout="fullWidth"
    placeholder="TRACED_SVG"
    src="../images/hero.png"
  />
);

export default HeroImage;
