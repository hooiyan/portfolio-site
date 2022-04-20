import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const HeroImage = () => (
  // TODO: Change to a real image
  <StaticImage
    src="https://picsum.photos/1110/600"
    alt="hero"
    className="image-wrapper"
    imgClassName="image"
    layout="fullWidth"
  />
);

export default HeroImage;
