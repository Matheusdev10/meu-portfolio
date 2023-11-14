import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0% 100px 0%;

  > h1 {
    flex-direction: column;

    display: flex;
    font-family: cursive;
    color: ${({ theme }) => theme.COLORS.GREEN_100};

    font-size: 50px;
    align-items: center;
    justify-content: center;
  }
  > p {
    margin-top: 10px;
    font-size: 20px;
  }

  .cards {
    display: flex;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
  }
`;
