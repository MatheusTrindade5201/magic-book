import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${props => props.theme.settings.bg__image});
        background-size:  100vw 100vh;
        background-repeat: no-repeat;
        background-attachment: fixed
    }

`;

export default GlobalStyle
