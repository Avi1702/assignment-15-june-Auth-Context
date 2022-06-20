import React from "react";

export const IsAuth = React.createContext();

//IsAuth.Provider - Component

// useState, useReducer

export function IsAuthProvider({ children }) {
  const [status, setStatus] = React.useState("Login");

  const handlestatus = () => {
    //+2
    setStatus(status==="Login"?"Logout":"Login");
  };

  // boolean, string, array, object, function ....

  return (
    <IsAuth.Provider value={{ status, handlestatus }}>
      {children}
    </IsAuth.Provider>
  );
}