import styled from 'styled-components';

export const CreatedPostContainer = styled.div``;

export const PostPublication = styled.button`
  min-width: 416px;
  max-width: 416px;
  min-height: 100px;
  border: none;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['base-label']};
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    margin-top: 2rem;
    max-height: 70px;
    min-height: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 2rem;
    line-height: 3.2rem;
    margin-top: -5px;
  }

  span {
    color: ${({ theme }) => theme.colors['base-span']};
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
`;
