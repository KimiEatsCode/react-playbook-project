import React, { useContext } from "react";
import {
  Card,
  Flex,
  FlexItem,
  Layout,
  LineGraph,
  SectionSeparator,
} from "playbook-ui";
import { GraphContext  } from "../MyProvider/MyProvider";



const LineGraphDefault = (props) => {
  const graph = useContext(GraphContext);
  // const data2 = [
  //   {
  //     name: "Data 2",
  //     data: [69658, 43, 57177, 69658, 97031, 4, 137133, 154175],
  //   },
  // ];

  // const data3 = [
  //   {
  //     name: "Data 2",
  //     data: [322, 43, 57177, 69658, 97031, 4, 137133, 154175],
  //   },
  // ];



return (
  <div>
 {graph.dataState[0].name} {graph.dataState[0].data}
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
