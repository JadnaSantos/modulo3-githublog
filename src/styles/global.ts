import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body { 
    background:  ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-title']};
    -webkit-font-smoothing: antialiased
  }


  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors['base-label']};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:  ${({ theme }) => theme.colors['base-border']};
    border-radius: 1rem;
  }
`;
