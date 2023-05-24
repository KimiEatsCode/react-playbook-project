import React, { createContext, useState } from "react";

export const GraphContext = createContext();

const GraphProvider = ({ children }) => {
  const dataObject = [
    {
      name: "Data 0",
      data: [0, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },

    {
      name: "Data 1",
      data: [1, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
    {
      name: "Data 2",
      data: [2, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
    {
      name: "Data 3",
      data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
    {
      name: "Data 4",
      data: [4, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
    {
      name: "Data 5",
      data: [5, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
  ];

  const [data, setData] = useState(dataObject[0]);

  return (
    <GraphContext.Provider
      value={{
        dataObject,
        data,
        setData,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;
