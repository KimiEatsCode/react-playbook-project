import React, { useState, useContext } from "react";

import {
  Flex,
  FlexItem,
  Icon,
  List,
  ListItem,
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
  const graph = useContext(GraphContext);
  return (
    <>
<Flex>
  {graph.data}
   <Nav orientation="vertical">
   {navData.map((item, index) => (
     <NavItem key={index} className={selected === index ? "sideBorder" : ""} onMouseEnter={()=> propThatHasFunction(index)}

     onClick={()=> changeDataSetFunction(index)}>
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

  const data1 = [
    {
      name: "Number of Installations",
      data: [2, 2, 2, 69658, 97031, 4, 137133, 154175],
    },
  ];

  const data2 = [
    {
      name: "Number of Installations",
      data: [322, 43, 57177, 69658, 97031, 4, 137133, 154175],
    },
  ];

const LineGraphNav = (props) => {

  const [selected, setSelected] = useState(0);
  const graph = useContext(GraphContext);

  const handleActiveItem = index => {
    console.log(selected)
    return setSelected(index);
  };

  const test = x => {
    switch(x) {
      case 1:
      return graph.setData(data1);
      case 2:
      return graph.setData(data2);
      default:
      console.log(graph.data)
    }
  };

  const test2 = x => {
    switch(x) {
      case 1:
      return graph.setName("Joseph");
      case 2:
      return graph.setName("Charles");
      default:
      console.log(graph.name)
    }
  };

return (
<div>

  <DyanmicList
  selected={selected}
  changeDataSetFunction={test2}
  propThatHasFunction={handleActiveItem}
  {...lineGraphNavJSON}
/>
</div>

);
}
export default LineGraphNav;
