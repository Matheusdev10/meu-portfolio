import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: center;

  > section {
    .imgCard {
      background-color: white;

      > img {
        width: 400px;
        height: 300px;
      }
    }
    > .content {
      margin-top: 30px;
      display: flex;
      padding: 50px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    max-width: 400px;
    height: 100%;

    border: 1px solid green;
    border-radius: 5px;

    > h3 {
      font-size: 50px;
    }

    > div {
      p {
      }
    }
  }
`;
