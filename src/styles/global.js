import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.COLORS.WHITE}
}


body{
    background-image:linear-gradient(to right, #000a0f, #001119, #0D1D25);
    height: 100vh;
    -webkit-font-smoothing: antialiased;
}

body, input, button, textarea{
    font-size: 1rem;
    outline: none;
}

a{
    text-decoration: none;
}


button, a{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9);
}

`;
