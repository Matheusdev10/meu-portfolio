import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 100px 0% 100px 0%;
  .boxIcons {
    display: flex;
    gap: 20px;
    padding: 10px;
    margin-top: 70px;
    width: 85%;
    border-radius: 20px;

    align-items: center;
    justify-content: center;
    border: 1px solid green;
  }
  .gitIcon {
    background-image: linear-gradient(to top, #000a0f, #001119, #0d1d25);
    padding: 10px;
    border-radius: 5px;
  }
  .linkedinIcon {
    background-image: linear-gradient(to top, #000a0f, #001119, #0d1d25);
    padding: 10px;
    border-radius: 5px;
  }
  .whatsappIcon {
    background-image: linear-gradient(to top, #000a0f, #001119, #0d1d25);
    padding: 10px;
    border-radius: 5px;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.GREEN_100};
    font-size: 50px;
    font-family: cursive;
  }

  > p {
    margin-top: 10px;
    font-size: 20px;
  }

  > div {
    > a {
      > img {
      }
    }
  }
`;
