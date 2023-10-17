import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 110px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    > img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    > p {
      font-size: 1.5rem;
    }
  }
  > section {
    > ul {
      cursor: pointer;
      display: flex;
      font-size: 1.5rem;
      gap: 50px;
      list-style: none;
    }
  }
`;
