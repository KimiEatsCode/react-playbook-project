import React, { useContext } from "react";
import {
  LineGraph,
} from "playbook-ui";
import { GraphContext  } from "../GraphProvider/GraphProvider";


const LineGraphDefault = (props) => {
  const graph = useContext(GraphContext);


return (

  <div>
        {/* {JSON.stringify(graph.data)} */}
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
