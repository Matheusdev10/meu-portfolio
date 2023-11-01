import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;

  img {
    width: 10px;
  }

  > section {
    /* background-color: blue;
    border: 2px solid green;
    width: 400px;
    height: 400px;
    padding: 20px;
    display: flex;
    
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px; */
    border: 1px solid green;
    width: 360px;
    height: 460px;
    > h3 {
      font-size: 50px;
    }
  }
`;
