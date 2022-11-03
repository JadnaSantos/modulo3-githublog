import styled from "styled-components";

export const PostContentContainer = styled.div`
  padding: 4rem 3.2rem;
  color: ${({ theme }) => theme['base-title']};
  
  ul, li {
    list-style: none;
    display: block;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  blockquote p {
    margin-bottom: 1rem;
  }

  ul li p, h4 {
    color: ${({ theme }) => theme["base-span"]}
  }

  strong {
    color: ${({ theme }) => theme.blue};
  }

  h1 {
    color: ${({ theme }) => theme.blue};
    margin-bottom: 1rem;
  }

  h3, h4 {
    margin-bottom: 1rem;
  }

  > p  {
    margin-bottom: 2rem;
  }

  > h2 {
    color: ${({ theme }) => theme["blue"]};
    margin-bottom: 2rem;
  }


  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    text-decoration: underline;
  }

  p {
    color: ${({ theme }) => theme['base-text']};
  }
`
