import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
 const UserProvider = ({ children }) => {

  const [name, setName] = useState("William");
  const [location, setLocation] = useState("Mars");

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;