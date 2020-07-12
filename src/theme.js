import { createGlobalStyle } from "styled-components";

export const themeData = {
  colors: {
    primary: "#458FF6",
    light: "#7D7987",
    dark: "#000",
    link: "#1F1534",
  },
};

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Muli', sans-serif;
    font-size: 16px;
    background: white;
    color: red;
}

*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
`;
