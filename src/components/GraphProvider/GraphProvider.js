import React, { createContext, useState } from "react";

export const GraphContext = createContext();

 const GraphProvider = ({ children }) => {

  const dataObject = {
    data0 :
      {
        name: "Data 0",
        data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
      },

    data1 :
      {
        name: "Data 0",
        data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
      },

  }
  // const data0 = [
  //   {
  //     name: "Data 0",
  //     data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
  //   },
  // ];

  // const data23 = [
  //   {
  //     name: "Data 0",
  //     data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
  //   },
  // ];

  const [data, setData] = useState(dataObject);

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