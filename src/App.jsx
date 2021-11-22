import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/NavBar";
import Ribbon from "./components/Ribbon";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar></NavBar>
        <Ribbon></Ribbon>
      </>
    </ThemeProvider>
  );
}

export default App;
