import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  margin-top: 30px;

  .boxIcons {
    display: flex;
    gap: 20px;
    width: 50%;
    padding: 10px;
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
    margin-bottom: -40px;
  }

  > p {
    font-size: 25px;
  }

  > div {
    > a {
      > img {
      }
    }
  }
`;
