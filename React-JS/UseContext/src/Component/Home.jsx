import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home">
      <h1>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h1>
      <p>This page changes theme using useContext.</p>
    </div>
  );
}

export default Home;
