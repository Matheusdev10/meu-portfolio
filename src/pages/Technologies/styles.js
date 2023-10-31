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
  > p {
    margin-top: 10px;
    font-size: 20px;
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

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .icons:hover .icons-slide {
    animation-play-state: paused;
  }

  .icons-slide {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    background-image: linear-gradient(to bottom, #000a0f, #001119, #0d1d25);
    padding-top: 20px;
    gap: 15px;
    animation: 10s slide infinite linear;
  }
`;
