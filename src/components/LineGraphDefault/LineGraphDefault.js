import React, { useContext } from "react";
import {
  Card,
  Flex,
  FlexItem,
  LineGraph,
} from "playbook-ui";
import { GraphContext  } from "../MyProvider/MyProvider";


const LineGraphDefault = (props) => {
  const graph = useContext(GraphContext);


return (

  <div>
    <Flex flex={4}>
      <FlexItem>
        <Card padding="20%">
          <LineGraph
            chartData={graph.dataState}
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
      </FlexItem>
    </Flex>

  </div>

);
}

export default LineGraphDefault;
