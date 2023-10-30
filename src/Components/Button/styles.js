import styled from 'styled-components';

export const Container = styled.button`
  /* background: ${({ theme }) => theme.COLORS.RED_200}; */
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 0.3125rem;
  border: 0;
  padding: 0.5rem 2rem;
  margin-top: 1.5rem;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;
  @media (max-width: 768px) {
    padding: 0.2rem 0.9rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
