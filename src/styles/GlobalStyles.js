import { createGlobalStyle } from 'styled-components';
import device from './Breakpoints';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;

    --color-primary-cyan-hex: #5fb4a2;
    --color-primary-cyan-rgb: rgb(95, 180, 162);
    --color-primary-cyan-hsl: hsl(167, 36%, 54%);

    --color-primary-dark-blue-hex: #203a4c;
    --color-primary-dark-blue-rgb: rgb(32, 58, 76);
    --color-primary-dark-blue-hsl: hsl(205, 41%, 21%);

    --color-primary-grayish-blue-hex: #33323d;
    --color-primary-grayish-blue-rgb: rgb(51, 50, 61);
    --color-primary-grayish-blue-hsl: hsl(245, 10%, 22%);

    --color-secondary-very-light-gray-hex: #fafafa;
    --color-secondary-very-light-gray-rgb: rgb(250, 250, 250);
    --color-secondary-very-light-gray-hsl: hsl(0, 0%, 98%);

    --color-secondary-light-gray-hex: #eaeaeb;
    --color-secondary-light-gray-rgb: rgb(234, 234, 235);
    --color-secondary-light-gray-hsl: hsl(240, 2%, 92%);

    --color-secondary-bright-red-hex: #f43030;
    --color-secondary-bright-red-rgb: rgb(244, 48, 48);
    --color-secondary-bright-red-hsl: hsl(0, 90%, 57%);

    --sm-global-spacing-vertical: 3.2rem;
    --sm-global-spacing-horizontal: 3.2rem;
    --md-global-spacing-vertical: 6.4rem;
    --md-global-spacing-horizontal: 4rem;
    --lg-global-spacing-vertical: 6.4rem;
    --lg-global-spacing-horizontal: 16.4rem;

    --mobile-menu-spacing-vertical: 4rem;
    --mobile-menu-spacing-horizontal: 4rem;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    margin: 0 auto;
    max-width: 1440px;
  }

  body {
    background-color: var(--color-secondary-very-light-gray-hex);
    margin: var(--lg-global-spacing-vertical) var(--lg-global-spacing-horizontal) 0 var(--lg-global-spacing-horizontal);

    @media ${device.laptop} {
      margin: var(--md-global-spacing-vertical) var(--md-global-spacing-horizontal) 0 var(--md-global-spacing-horizontal);
    }

    @media ${device.tabletS} {
      margin: var(--sm-global-spacing-vertical) var(--sm-global-spacing-horizontal) 0 var(--sm-global-spacing-horizontal);
    }
  }
`;

export default GlobalStyles;
