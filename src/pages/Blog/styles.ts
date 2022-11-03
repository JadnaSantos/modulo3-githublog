/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const BlogContainer = styled.div`
  width: 864px;
  margin: 0 auto;
`
export const PublicationsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 7.2rem;

  input {
    height: 50px;
    border: none;
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-span']};
    padding: 1.2rem 1.6rem;
    
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    
    margin-bottom: 4.8rem;
    
    &:focus {
      border: 1px solid ${({ theme }) => theme.blue};
    }

    &::placeholder {
      color: ${({ theme }) => theme['base-span']};
    }

  }
`
export const Publications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.8rem;
    line-height: 2.9rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  span {
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme['base-span']};
  }
`
