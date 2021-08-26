<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> parent of 90b578f (Removing comp that are no Header comp related; using div wrap around Nav for onMouseEnter event show hide profile nav)

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

<<<<<<< HEAD

const DyanmicList = ({ index, items, selected, onRemove, propThatHasFunction }) => {

  return (
    <>
<Flex>
   <Nav orientation="vertical">
   {items.map((item, index) => (
     <NavItem className={selected === index ? "sideBorder" : ""} onClick={()=> propThatHasFunction(index)}>
=======
const LineGraphNav = (props) => (
  <Flex>
    <Nav orientation="vertical">
      <NavItem active>
>>>>>>> parent of 90b578f (Removing comp that are no Header comp related; using div wrap around Nav for onMouseEnter event show hide profile nav)
      <Flex spacing="between">
            <Title size={4} text="Revenue" />
            <StatChange change="decrease" value="2" />
          </Flex>
      </NavItem>
<<<<<<< HEAD
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
=======
      <NavItem>
        <Flex spacing="between">
          <Title size={4} text="Orders" />
          <StatChange change="decrease" value="2" />
        </Flex>
      </NavItem>
      <NavItem>
      <Flex spacing="between">
            <Title size={4} text="Orders" />
            <StatChange change="decrease" value="2" />
          </Flex>

      </NavItem>
      <NavItem>
      <Flex spacing="between">
            <Title size={4} text="Profit" />
            <StatChange change="decrease" value="2" />
          </Flex>

      </NavItem>
      <NavItem>
      <Flex spacing="between">
            <Title size={4} text="Average Check" />
            <StatChange change="decrease" value="2" />

        </Flex>
      </NavItem>
      <NavItem>
      <Flex spacing="between">
            <Title size={4} text="Canceled" />
            <StatChange change="decrease" value="2" />

        </Flex>
      </NavItem>
      <NavItem>
      <Flex spacing="between">
            <Title size={4} text="Repeat Sales" />
            <StatChange change="decrease" value="2" />

        </Flex>
      </NavItem>
    </Nav>
  </Flex>
);

>>>>>>> parent of 90b578f (Removing comp that are no Header comp related; using div wrap around Nav for onMouseEnter event show hide profile nav)
export default LineGraphNav;
