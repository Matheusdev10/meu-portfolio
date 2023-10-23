import styled from 'styled-components';

export const Box = styled.div`
  width: 100vw;
  height: 110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 200px;

  > p {
    font-size: 50px;
    font-family: cursive;

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      font-family: sans-serif;
    }
  }
`;
