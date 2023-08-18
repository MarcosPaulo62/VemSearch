import { RoutesVemSearch } from "./Routes";
import { Login } from "./pages/Login/Login";
import react from "react"
import { GlobalStyle } from "./styles/global";
import { CardBackground } from "./components/CardBackground/CardBackground";
import { Inicio } from "./pages/Inicio/Inicio";


function App() {
  return (
    <>
      <RoutesVemSearch/>
      <GlobalStyle />
    </>
  );
}

export default App;
