import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h4 {
    font-size: 50px;
    color: ${({ theme }) => theme.COLORS.GREEN_100};
    font-family: cursive;
  }
  > p {
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 70px;

    > span {
      color: #8a2be2;
      font-weight: bold;
    }
  }

  .certificate {
    border: 1px solid green;
    margin-bottom: 100px;
    height: 379px;
  }
`;
