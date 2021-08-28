import React, { createContext, useState } from "react";

export const GraphContext = createContext();

 const GraphProvider = ({ children }) => {

  const data0 = [
    {
      name: "Data 0",
      data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
  ];


  const [dataState, setData] = useState(data0);

  return (
    <GraphContext.Provider
      value={{
        dataState,
        setData,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;