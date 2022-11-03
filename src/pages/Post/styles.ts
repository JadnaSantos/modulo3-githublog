/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 846px;
  margin: 0 auto;
`

export const PostProfile = styled.div`
  background: ${({ theme }) => theme['base-profile']};
  padding: 3.2rem 4rem;
  margin-top: -90px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  strong {
    font-size: 2.4rem;
    color: ${({ theme }) => theme['base-title']};
  }
  `

export const LinksMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  color: ${({ theme }) => theme.blue};

  a {
    display: flex;
    align-items: center;
    gap: 0.8;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    border: 2px solid transparent;
    
    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.blue};
    }
  }

`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-top: 0.8rem;

  span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`