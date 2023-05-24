import React, { useState, useContext } from "react";

import {
  Flex,
  Nav,
  NavItem,
  StatChange,
  Title,
} from "playbook-ui";
import { GraphContext } from '../GraphProvider/GraphProvider';


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
    <NavItem key={index} className={selected === index ? "sideBorder" : ""}

    onClick={()=> {
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


const LineGraphNav = (props) => {

  const [selected, setSelected] = useState(0);
  const graph = useContext(GraphContext);

  const handleActiveItem = index => {
    return setSelected(index);
  };

  const dataSets = index => {
    console.log(graph.data + 'the graph dataobject')
    return index ? graph.setData(graph.dataObject[index]) : null;
  }


return (
<div>
<Flex orientation="row">
{/* {JSON.stringify(graph.data)} */}
  <DyanmicList
  selected={selected}
  changeDataSetFunction={dataSets}
  propThatHasFunction={handleActiveItem}
  {...lineGraphNavJSON}
/>
</Flex>
</div>

);
}
export default LineGraphNav;
