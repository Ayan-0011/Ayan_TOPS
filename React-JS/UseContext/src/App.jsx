import { useState } from "react";


import "./index.css";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
      <Navbar/>
      <Home/>
      </div>
    </ThemeContext.Provider>
  
  );
}

export default App;
