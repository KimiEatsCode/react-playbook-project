import React, { useContext } from "react";
import {
  LineGraph,
} from "playbook-ui";
import { GraphContext  } from "../GraphProvider/GraphProvider";


const LineGraphDefault = (props) => {
  const graph = useContext(GraphContext);

  const data33 = [{
    name: 'Number of Installations',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  }]

return (

  <div>


        {JSON.stringify(graph.data)}
          <LineGraph
            chartData={graph.data}
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



  </div>

);
}

export default LineGraphDefault;
