import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;

  > h1 {
    flex-direction: column;
    margin-top: 150px;
    display: flex;

    color: ${({ theme }) => theme.COLORS.GREEN_100};

    font-size: 50px;
    align-items: center;
    justify-content: center;
  }
  .cards {
    display: flex;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
  }
`;
