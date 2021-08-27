import React, { createContext, useState } from "react";

export const GraphContext = createContext();

// This context provider is passed to any component requiring the context
 const GraphProvider = ({ children }) => {

  const revenueData = [
    {
      name: "Number of Installations",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
  ];
  
const [name, setName] = useState("cheers");
  const [data, setData] = useState(revenueData);

  return (
    <GraphContext.Provider
      value={{
        name,
        data,
        setName,
        setData,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;