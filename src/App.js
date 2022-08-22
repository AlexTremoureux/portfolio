import "./App.css";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Router } from "./utils/Router";
import { theme } from "./utils/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
          <Header />
          <Router />
          <Footer />
        
      </ThemeProvider>
    </div>
  );
}

export default App;
