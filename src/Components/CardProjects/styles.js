import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;

  > section {
    .imgCard {
      background-image: linear-gradient(to bottom, #000a0f, #001119, #0d1d25);

      /* background: rgb(5, 255, 0);
      background: linear-gradient(
        90deg,
        rgba(5, 255, 0, 1) 0%,
        rgba(110, 179, 140, 1) 0%,
        rgba(174, 222, 195, 1) 66%
      ); */
      padding: 30px;

      > img {
        max-width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
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
    border-radius: 5px;

    > h3 {
      font-size: 50px;
    }

    > div {
      p {
        text-align: center;
        padding: 10px;
      }
    }
  }
`;
