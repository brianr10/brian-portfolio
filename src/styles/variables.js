import { css } from 'styled-components';

const variables = css`
  :root {
    --smoky-black: #161312;
    --onyx-gray: #161312; 
    --dark-gray: #5E6166; 
    --dark-red: #7A0000; 
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --light-gray: #E0E0E0; //TODO: Rename slate to <>. This controls the main paragraph text.
    --light-slate: #a8b2d1;
    --lightest-slate: #E0E0E0; //TODO: 
    --white: #e6f1ff;
    --green: #CC0000; //TODO: Rename green to dark-red, Handles some of the text in paragraph.
    --green-tint: rgba(204, 0, 0, 0.64);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
