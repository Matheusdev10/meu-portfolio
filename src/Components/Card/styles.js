import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 100vw;
  height: 100vh; */

  > img {
    height: 100%;
    border-radius: 20px;
    width: 300px;
    height: 300px;
    background: blue;
    border-radius: 20px;
  }

  > section {
    width: 800px;
    height: auto;
    line-height: 50px;
    padding: 20px;
    border-radius: 20px;
    font-family: sans-serif;
    border: 1px solid #4f8d40;
  }
`;
