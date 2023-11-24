import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0% 100px 0%;

  @media only screen and (max-width: 768px) {
  }

  > h1 {
    font-size: 50px;
    font-family: cursive;
    color: ${({ theme }) => theme.COLORS.GREEN_100};
  }
  > p {
    margin-top: 10px;
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    p {
      text-align: center;
    }
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

  @media only screen and (max-width: 768px) {
    > section {
      display: flex;
      > div {
        > img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .icons {
    margin-top: 70px;
  }

  .icons:hover .icons-slide {
    animation-play-state: paused;
  }

  .icons-slide {
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to bottom, #000a0f, #001119, #0d1d25);
    gap: 15px;
    padding-top: 20px;
    animation: 10s slide infinite linear;
  }
`;
