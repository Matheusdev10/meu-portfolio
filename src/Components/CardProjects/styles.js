import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;

  > section:hover {
    transform: scale(1.1);
    margin: 30px 0 30px 0;
  }

  > section {
    height: 550px;

    .imgCard {
      display: flex;
      height: 300px;
      cursor: pointer;

      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to bottom, #000a0f, #001119, #0d1d25);
      > a {
        height: 100%;
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    > .content {
      margin-top: 30px;
      display: flex;
      padding-bottom: 30px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    max-width: 350px;

    border: 1px solid green;

    > div {
      h3 {
        color: ${({ theme }) => theme.COLORS.GREEN_100};
        font-size: 25px;
      }
    }

    > div {
      p {
        text-align: center;
        padding: 10px;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        line-height: 20px;
      }
    }
  }
`;
