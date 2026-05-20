import { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  let themChange = () => {
    let dark = {
      backgroundColor: "black",
      color: "white",
      padding: "20px",
      height: "100vh",
    };

    let white = {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
      height: "100vh",
    };

    return theme === "dark" ? dark : white;
  };

  let themeChangeValue = (data) => {
    setTheme(data);
  };

  return (
    <themeContext.Provider value={{ themeChangeValue, themChange, theme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;