import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 110px;
  scroll-behavior: smooth;
  background-image: linear-gradient(to left, #000a0f, #001119, #0d1d25);
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    .logo {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    section {
      display: none;
    }

    .avatar {
      display: none;
    }

    > .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      width: 100vw;

      > .iconCloseAndMenu {
        opacity: 1;

        > .modalMobile {
          li {
            list-style: none;
            display: flex;
          }
          position: fixed;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          background-image: linear-gradient(to left, #000a0f, #001119, #0d1d25);
          font-size: 20px;
          gap: 40px;
          left: 0;
          width: 100%;
          top: -1px;
          z-index: 1;
          padding: 2rem 1.5rem 2rem;
          border-radius: 5px;
          transition: 0.3s;
        }
      }
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

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
    @media only screen and (max-width: 768px) {
      img {
        width: 60px;
        height: 60px;
      }
    }
    > p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.GREEN_100};
    }
    @media only screen and (max-width: 768px) {
      p {
        font-size: 20px;
      }
    }
  }

  > section {
    > ul {
      cursor: pointer;
      scroll-behavior: smooth;
      display: flex;
      font-size: 1.5rem;
      gap: 50px;
      list-style: none;
    }

    ul li {
      position: relative;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    ul li::after {
      content: ' ';
      width: 0%;
      height: 3px;
      background: ${({ theme }) => theme.COLORS.GREEN_100};
      position: absolute;
      bottom: -5px;
      left: 0;
      transition: 0.5s ease-in-out;
    }

    ul li:hover {
      transform: scale(1.24, 1.24);
    }

    ul li:hover::after {
      width: 100%;
    }
  }
`;
