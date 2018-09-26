import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  .isvg.loaded svg {
    width: 30px;
  }

  .isvg.loaded.separator svg {
    width: 10px;
    margin-left: 10px;
  }

  .auth0-lock.auth0-lock {
    .auth0-lock-header {
      height: unset !important;
    }

    .auth0-lock-header-logo {
      display: none !important;
    }
  }
`;
