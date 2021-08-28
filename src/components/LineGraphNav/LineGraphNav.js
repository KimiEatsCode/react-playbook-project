import React, { useState, useContext } from "react";

import {
  Flex,
  Nav,
  NavItem,
  StatChange,
  Title,
} from "playbook-ui";
import { GraphContext } from '../MyProvider/MyProvider';


const lineGraphNavJSON = {
  title: "Pipeline Chart",
  navData: [
    { label: "Revenue", percent: 26, change: "increase" },
    { label: "Orders", percent: 2, change: "decrease" },
    { label: "Profit", percent: "", change: "" },
    { label: "Average Check", percent: 5, change: "increase" },
    { label: "Canceled", percent: 18, change: "decrease" },
    { label: "Repeat Sales", percent: "", change: "" },
  ],
};



const DyanmicList = ({ navData, selected, data, propThatHasFunction, changeDataSetFunction }) => {

  return (
    <>
<Flex>
   <Nav orientation="vertical">
   {navData.map((item, index) => (
     <NavItem key={index} className={selected === index ? "sideBorder" : ""} onClick={()=> {
       propThatHasFunction(index); changeDataSetFunction(index);}
     }
      >
      <Flex spacing="between">
            <Title size={4} text={item.label} />
            <StatChange change={item.change} value={item.percent} />
          </Flex>
      </NavItem>
   ))}
</Nav>
</Flex>
    </>
  );
  }

  const data0 = [
    {
      name: "Data 0",
      data: [3, 52503, 57177, 3, 3, 119931, 137133, 154175],
    },
  ];

  const data1 = [
    {
      name: "Data 1",
      data: [2, 2, 2, 69658, 97031, 4, 137133, 154175],
    },
  ];

  const data2 = [
    {
      name: "Data 2",
      data: [2, 2, 2, 69658, 97031, 4, 137133, 154175],
    },
  ];


  const data3 = [
    {
      name: "Data 3",
      data: [2, 2, 2, 69658, 97031, 4, 137133, 154175],
    },
  ];


  const data4 = [
    {
      name: "Data 4",
      data: [322, 43, 57177, 69658, 97031, 4, 137133, 154175],
    },
  ];

  const data5 = [
    {
      name: "Data 5",
      data: [2, 2, 2, 69658, 97031, 4, 137133, 154175],
    },
  ];


const LineGraphNav = (props) => {

  const [selected, setSelected] = useState(0);
  const graph = useContext(GraphContext);

  const handleActiveItem = index => {
    return setSelected(index);
  };

  const dataSets = index => {
    switch(index) {
      case 0:
        return graph.setData(data0);
      case 1:
       return graph.setData(data1);
      case 2:
        return graph.setData(data2);
      case 3:
        return graph.setData(data3);
      case 4:
        return graph.setData(data4);
      case 5:
        return graph.setData(data5);
      default:
      console.log("dataSets default data")
    }
  };


return (
<div>

  <DyanmicList
  selected={selected}
  changeDataSetFunction={dataSets}
  propThatHasFunction={handleActiveItem}
  {...lineGraphNavJSON}
/>
</div>

);
}
export default LineGraphNav;
