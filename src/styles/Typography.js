import { createGlobalStyle } from 'styled-components';
import HeadingBold from '../fonts/IbarraRealNova-Bold.ttf';
import HeadingRegular from '../fonts/IbarraRealNova-Regular.ttf';
import BodyRegular from '../fonts/PublicSans-Regular.ttf';

const Typography = createGlobalStyle`
  :root {
    --font-bold: 700;
    --font-regular: 400;
    --h1-size: 5rem;
    --h1-line-height: 50px;
    --h1-letter-spacing: -0.45px;
    --h2-size: 4rem;
    --h2-line-height: 42px;
    --h2-letter-spacing: -0.36px;
    --h3-size: 3.2rem;
    --h3-line-height: 36px;
    --h3-letter-spacing: -0.29px;
    --body-1-size: 1.6rem;
    --body-2-size: 1.5rem;
    --body-line-height: 30px;
    --menu-item-size: 1.2rem;
  }

  @font-face {
    font-family: IbarraRealNovaBold;
    src: url(${HeadingBold});
    font-weight: 700;
  }

  @font-face {
    font-family: IbarraRealNovaRegular;
    src: url(${HeadingRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: PublicSans;
    src: url(${BodyRegular});
    font-weight: 400;
  }


  html {
    font-family: IbarraRealNovaBold, PublicSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 62.5%;
  }

  body {
    font-family: PublicSans;
    font-size: 1.6rem;
    line-height: var(--body-line-height);
  }

  button {
    font-family: PublicSans;
    letter-spacing: 2px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: IbarraRealNovaBold;
    font-weight: var(--font-bold);
  }

  h1 {
    font-size: var(--h1-size);
    letter-spacing: var(--h1-letter-spacing);
    line-height: var(--h1-line-height);
  }

  h2 {
    font-size: var(--h2-size);
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);
  }

  h3 {
    font-family: IbarraRealNovaRegular;
    font-size: var(--h3-size);
    font-weight: var(--font-regular);
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
  }
`;

export default Typography;
