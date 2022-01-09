import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    background-color: #333;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h1 {
    background-image: linear-gradient(180deg, white, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(5px 5px #0085a3);
    font-size: 4.375rem;
    text-align: center;
    margin: 1.25rem;
  }

  .start,
  .next {
    cursor: pointer;
    background-image: linear-gradient(white, #ff6b0f);
    box-shadow: 0px 5px 10px #0004;
    border-radius: 0.625rem;
    height: 2.5rem;
    margin: 1.25rem 0;
    padding: 0 2.5rem;
    font-size: 1rem;

    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .start {
    max-width: 12.5rem;
  }
`
