import { useContext, useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import FontContext, { FontProvider } from "./context/FontContext";
import SearchWord from "./components/SearchWord";

import { SearchProvider } from "./context/SearchWordContext";
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const { font } = useContext(FontContext);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <FontProvider>
        <div className="app" id={theme}>
          <div className="app" id={font}>
            <NavBar />
            <SearchProvider>
              <Search />
              <SearchWord />
            </SearchProvider>
          </div>
        </div>
      </FontProvider>
    </ThemeContext.Provider>
  );
}

export default App;
