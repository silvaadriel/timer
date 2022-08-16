import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }

  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 3px;
    cursor: move;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
