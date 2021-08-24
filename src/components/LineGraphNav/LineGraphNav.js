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

  const [selected, setSelected] = useState(0);

  const handleActiveItem = index => {
   setSelected({selected:index})

  }

  return (
    <ul className={test}>{index}
      {items.map((item, index) => (
        <li key={index} checked={selected === index}>
          <span
          className={selected === index ? "sideBorder" : ""}
            // onClick={() => propThatHasFunction(index)}
            onClick={()=> setSelected(handleActiveItem)}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
  }

const LineGraphNav = (props) => {

  const [selected, setSelected] = useState(0);

  const handleActiveItem = index => {
   setSelected({selected:index})

  }

return (
  <DyanmicList selected={}></DyanmicList>
  <Flex>{selected}
    <Nav orientation="vertical">
      <NavItem active onClick={()=> setSelected(handleActiveItem(5))}>
      <Flex spacing="between">
            <Title size={4} text="Revenue" />
            <StatChange change="decrease" value="2" />
          </Flex>
      </NavItem>
      <NavItem onClick={()=> setSelected(handleActiveItem)}>
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
}
export default LineGraphNav;
