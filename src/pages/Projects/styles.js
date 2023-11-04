import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  max-width: 300px;

  > h1 {
    flex-direction: column;
    margin-top: 150px;
    display: flex;
    width: 100vw;
    color: ${({ theme }) => theme.COLORS.GREEN_100};

    font-size: 50px;
    align-items: center;
    justify-content: center;
  }
  .cards {
    display: flex;
    padding-left: 60px;
    gap: 30px;

    width: 100vw;
  }
`;
