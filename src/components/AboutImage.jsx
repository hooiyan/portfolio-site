import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutImage = () => (
  // TODO: Change to a real image
  <StaticImage
    // src="https://picsum.photos/1110/600"
    src="https://source.unsplash.com/random"
    alt="this is hooi yan"
    className="image-wrapper"
    imgClassName="image"
  />
);

export default AboutImage;
