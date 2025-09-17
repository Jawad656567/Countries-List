import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./style.css";
import "./App.css";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      {/* yai ham is ka liye use karty hai taky kisipage ko apne hi page per dikany chty hai  */}
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
