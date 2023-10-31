import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 300px;

  > h1 {
    margin-top: 150px;
    font-size: 50px;
    color: ${({ theme }) => theme.COLORS.GREEN_100};
  }

  > section {
    display: flex;
    > div {
      > img {
        width: 100px;
        height: 100px;
      }
    }
  }

  /* .icons {
    overflow: hidden;
  } */

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .icons-slide {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    padding: 30px;
    animation: 5s slide infinite linear;
    white-space: nowrap;
  }
`;
