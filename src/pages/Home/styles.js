import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
  height: 100vh;
  scroll-behavior: smooth;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0% 100px 0%;

  > p {
    font-size: 50px;
    font-family: cursive;
    border-right: 2px solid white;
    white-space: nowrap;
    overflow: hidden;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 27px;
    }
  }

  .typing-animation {
    animation: blinkCursor 500ms infinite, normal, typing 4s steps(40) 1s normal;

    > span {
      color: ${({ theme }) => theme.COLORS.GREEN_100};
      font-family: sans-serif;
    }
  }

  @keyframes blinkCursor {
    from {
      border-right-color: white;
    }
    to {
      border-right-color: transparent;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 12em;
    }
  }
`;
