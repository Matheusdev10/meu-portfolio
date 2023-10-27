import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 110px;
  background-image: linear-gradient(to left, #000a0f, #001119, #0d1d25);

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
      color: ${({ theme }) => theme.COLORS.GREEN_100};
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
