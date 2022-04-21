import React from 'react';
import CardWrapper from '../components/CardWrapper';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const IndexPage = () => (
  <>
    <Hero />
    <CardWrapper
      alt="screenshot of project 1"
      id="project1"
      isAbout
      isEven={false}
      text=" I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices
      and writing clean JavaScript. When writing JavaScript code, I mostly use
      react, but I can adapt to whatever tools are required. I'm based in
      London, UK, but I'm happy working remotely and have experience in remote
      teams. When I'm not coding, you'll find me outdoors. I love being out in
      nature whether that's going for a walk, run or cycling. I'd love you to
      check out my work."
      title="About Me"
      to="/portfolio/manage/"
      value="Go to portfolio"
    />
    <Contact isHome />
  </>
);

export default IndexPage;
