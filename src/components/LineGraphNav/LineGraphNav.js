import React, { useState } from "react";

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


const DyanmicList = ({ navData, selected, propThatHasFunction }) => {

  return (
    <>
<Flex>
   <Nav orientation="vertical">
   {navData.map((item, index) => (
     <NavItem className={selected === index ? "sideBorder" : ""} onClick={()=> propThatHasFunction(index)}>
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

  const handleActiveItem = index => {
    console.log(selected)
    return setSelected(index);
  };

return (
<div> {selected}
  <DyanmicList
  items={[1,2,3]}
  selected={selected}
  propThatHasFunction={handleActiveItem}
  {...lineGraphNavJSON}
/>
</div>
  // <Flex>{selected2}

  //   <Nav orientation="vertical">
  //     <NavItem active onClick={()=> setSelected(handleActiveItem)}>
  //     <Flex spacing="between">
  //           <Title size={4} text="Revenue" />
  //           <StatChange change="decrease" value="2" />
  //         </Flex>
  //     </NavItem>
  //     <NavItem onClick={()=> setSelected(handleActiveItem)}>
  //       <Flex spacing="between">
  //         <Title size={4} text="Orders" />
  //         <StatChange change="decrease" value="2" />
  //       </Flex>
  //     </NavItem>
  //     <NavItem>
  //     <Flex spacing="between">
  //           <Title size={4} text="Orders" />
  //           <StatChange change="decrease" value="2" />
  //         </Flex>

  //     </NavItem>
  //     <NavItem>
  //     <Flex spacing="between">
  //           <Title size={4} text="Profit" />
  //           <StatChange change="decrease" value="2" />
  //         </Flex>

  //     </NavItem>
  //     <NavItem>
  //     <Flex spacing="between">
  //           <Title size={4} text="Average Check" />
  //           <StatChange change="decrease" value="2" />

  //       </Flex>
  //     </NavItem>
  //     <NavItem>
  //     <Flex spacing="between">
  //           <Title size={4} text="Canceled" />
  //           <StatChange change="decrease" value="2" />

  //       </Flex>
  //     </NavItem>
  //     <NavItem>
  //     <Flex spacing="between">
  //           <Title size={4} text="Repeat Sales" />
  //           <StatChange change="decrease" value="2" />

  //       </Flex>
  //     </NavItem>
  //   </Nav>
  // </Flex>
);
}
export default LineGraphNav;
