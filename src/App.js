import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme } from "./theme";
import { GlobalStyles } from "./global";
import Footer from "./components/footer/Footer";

function App() {
  const themeMode = blueTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={themeMode} />
        </div>
        <Footer theme={themeMode} />
      </>
    </ThemeProvider>
  );
}

export default App;
