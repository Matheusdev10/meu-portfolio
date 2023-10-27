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
    border-right: 2px solid white;
    white-space: nowrap;
    overflow: hidden;
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
