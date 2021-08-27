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

const data1 = [
  {
    name: "Number of Installations",
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  },
];

const data2 = [
  {
    name: "Number of Installations",
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  },
];

const DyanmicList = ({ navData, selected, data, propThatHasFunction, changeDataSetFunction }) => {

  return (
    <>
<Flex>
   <Nav orientation="vertical">
   {navData.map((item, index) => (
     <NavItem key={index} className={selected === index ? "sideBorder" : ""} onMouseEnter={()=> propThatHasFunction(index)}

     onClick={()=> changeDataSetFunction(data)}>
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

const LineGraphNav = (props) => {

  const [selected, setSelected] = useState(0);
  const graph = useContext(GraphContext);

  const handleActiveItem = index => {
    console.log(selected)
    return setSelected(index);
  };



return (
<div>
  <DyanmicList
  selected={selected}
  changeDataSetFunction={graph.setData}
  propThatHasFunction={handleActiveItem}
  {...lineGraphNavJSON}
/>
</div>

);
}
export default LineGraphNav;
