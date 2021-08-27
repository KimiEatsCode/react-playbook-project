import React, { createContext, useState } from "react";

export const GraphContext = createContext();

// This context provider is passed to any component requiring the context
 const GraphProvider = ({ children }) => {



  const data1 = [
    {
      name: "Number of Installations",
      data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
  ];

  const data2 = [
    {
      name: "Number of Installations",
      data: [322, 43, 57177, 69658, 97031, 4, 137133, 154175],
    },
  ];

  const [data, setData] = useState(data1);

  return (
    <GraphContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;