import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --primary: #19bbee;
    --secondary: #fd7e14;
    --yellow: #f5ec11;
    --pink: hotpink;

    --gray_300: #ededed;
    --gray_500: #8d8d8d;
    --gray_800: #262626;
    --gray_900: #121414;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: var(--gray_900);
    color: var(--gray_300);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--primary);
  }
`
