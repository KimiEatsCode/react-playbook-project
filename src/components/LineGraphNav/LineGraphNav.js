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


const DyanmicList = ({ index, items, selected, onRemove, propThatHasFunction }) => {

  return (
    <ul>{index}
      {items.map((item, index) => (
        <li key={index}>
          <span
           style={
            selected === index
              ? {
                  color: "red",
                  fontWeight: "bold"
                }
              : {}
          }

            onClick={()=> propThatHasFunction(index)}
          >
       test
          </span>   <p> selected is {selected} and index is {index}</p>
        </li>

      ))}
    </ul>
  );
  }

const LineGraphNav = (props) => {

  const [selected, setSelected] = useState(0);

  const handleActiveItem = index => {
    console.log(selected)
    return setSelected({selected:index});
  };

return (
<div> {selected}
  <DyanmicList
  items={[1,2,3]}
  selected={selected}
  propThatHasFunction={handleActiveItem}
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
