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
  const data0 = [
    {
      name: "Data 0",
      data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
  ];

return (

  <div>

    <Flex flex={4}>
      <FlexItem>
        <Card padding="20%">
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
      </FlexItem>
    </Flex>

  </div>

);
}

export default LineGraphDefault;
