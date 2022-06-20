import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [theme, setTheme] = React.useState("dark"); // "light", "dark"

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AuthContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </AuthContext.Provider>
  );
}
