import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: block;
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    width: 100%;
    min-width: 0;
    overflow-x: hidden;
    background-attachment: fixed;
  }

  #root {
    width: 100%;
    min-width: 0;
  }

  ::selection {
    background: #14B8A6;
    color: #FFFFFF;
  }`;
