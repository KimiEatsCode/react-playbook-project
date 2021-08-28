import React, { useContext } from "react";
import {
  Card,
  LineGraph,
} from "playbook-ui";
import { GraphContext  } from "../GraphProvider/GraphProvider";


const LineGraphDefault = (props) => {
  const graph = useContext(GraphContext);
  const data0 = [
    {
      name: "Data 0",
      data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
  ];

  let x = graph.dataState[0].name;

return (

  <div>

        <Card padding="sm">
        {graph.dataState[0].name}
          <LineGraph
            chartData={data0}
            id="line-fixed-height"
            xAxisCategories={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            yAxisMin={0}
            {...props}
          />
        </Card>


  </div>

);
}

export default LineGraphDefault;
