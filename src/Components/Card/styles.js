import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;

  > img {
    height: 100%;
    border-radius: 20px;
    width: 300px;
    height: 300px;
    background: blue;
    border-radius: 20px;
  }

  > section {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: 800px;
    height: 250px;
    padding: 70px;
    line-height: 25px;
    font-size: 20px;
    border-radius: 20px;
    font-family: sans-serif;
  }
`;
