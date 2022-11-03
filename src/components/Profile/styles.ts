/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-profile']};
  padding: 3.2rem 4rem;
  margin-top: -90px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  align-items: flex-start;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileCntent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
  padding-left: 3.2rem;
`

export const Profiles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 2.4rem;
    line-height: 3.1rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    text-decoration: none;
    text-transform: uppercase;

    font-size: 1.2rem;
    font-weight: bold;
    
    color: ${({ theme }) => theme.colors['base-blue']};
    border: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid  ${({ theme }) => theme.colors['base-blue']};
    }
  }
`

export const Biography = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  span {
    color: ${({ theme }) => theme.colors['base-span']};
    line-height: 2.6rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding-top: 2.6rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.colors['base-subtitle']};

    svg {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
