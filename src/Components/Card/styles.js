import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
  }

  > img {
    border-radius: 20px;
    border: 1px solid green;
    background-image: linear-gradient(to left, #000a0f, #001119, #0d1d25);
  }

  > section {
    width: 800px;
    height: auto;
    line-height: 50px;
    padding: 20px;
    border-radius: 20px;
    font-family: sans-serif;
    border: 1px solid #4f8d40;
    background-image: linear-gradient(to right, #000a0f, #001119, #0d1d25);

    > p {
      > span {
        color: ${({ theme }) => theme.COLORS.GREEN_100};
      }
    }
  }

  .social-network {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: end;
  }

  @media only screen and (max-width: 920px) {
    > img {
      width: 250px;
      height: 250px;
      margin-bottom: 50px;
    }

    > section {
      width: 85%;
    }
  }

  @media only screen and (min-width: 920px) {
    img {
      width: 250px;
      height: 250px;
    }

    section {
      width: 70%;
      height: auto;
    }
  }

  @media only screen and (min-width: 1200px) {
    img {
      border-radius: 20px;
      border: 1px solid green;
      width: 350px;
      height: 350px;
    }

    section {
      width: 800px;
      height: auto;
      line-height: 50px;
      padding: 20px;
      border-radius: 20px;
      font-family: sans-serif;
      border: 1px solid #4f8d40;
    }
  }

  section {
    animation-duration: 3s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 5%;
      width: 100%;
    }
  }
`;
