import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* width: 100vw;
  height: 100vh; */

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  > img {
    border-radius: 20px;
  }

  > section {
    width: 800px;
    height: auto;
    line-height: 50px;
    padding: 20px;
    border-radius: 20px;
    font-family: sans-serif;
    border: 1px solid #4f8d40;

    > p {
      > span {
        color: ${({ theme }) => theme.COLORS.GREEN_100};
      }
    }
  }

  .social-network {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: end;
  }

  @media only screen and (max-width: 768px) {
    > img {
      width: 250px;
      height: 250px;
      margin-bottom: 50px;
    }

    > section {
      /* width: 300px; */
      width: 85%;
    }
  }
`;
