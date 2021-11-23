import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/NavBar";
import Ribbon from "./components/Ribbon";
import Articles from "./components/Articles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar></NavBar>
        <Ribbon></Ribbon>
        <Articles></Articles>
      </>
    </ThemeProvider>
  );
}

export default App;
