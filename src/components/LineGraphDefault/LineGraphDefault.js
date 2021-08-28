import React, { useContext } from "react";
import {
  Card,
  LineGraph,
} from "playbook-ui";
import { GraphContext  } from "../GraphProvider/GraphProvider";


const LineGraphDefault = (props) => {
  const graph = useContext(GraphContext);
  const data = [{
    name: 'Number of Installations',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  }]
 
return (

  <div>

        <Card padding="sm">
        {graph.dataState[0].name}
          <LineGraph
            chartData={data}
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
