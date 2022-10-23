import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./AppRouter";
import GlobalStyle from "./assets/Styles/GlobalStyles";
import dark from "./assets/Styles/Themes/dark";
import light from "./assets/Styles/Themes/light";
import Header from "./Components/Header";

function App() {

  const [theme, setTheme] = useState(light);
  const [themeName, setThemeName] = useState('Nox')

  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
        themeName={themeName}
        toggleTheme={()=> {
          setTheme(theme.title == 'light' ? dark : light);
          setThemeName(themeName == 'Nox' ? 'Lumos' : 'Nox')
        }}/>
        <AppRouter />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
