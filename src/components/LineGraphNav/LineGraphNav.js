import React from 'react';

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
} from 'playbook-ui';

const DefaultNav = props => (
    <Flex>
  <Nav orientation="vertical">
    <NavItem active>
      <List layout="right">
        <ListItem {...props}>
          <Title  size={4} text="Revenue" />
          <StatChange change="decrease" value="2" />
        </ListItem>
      </List>
    </NavItem>
    <NavItem>
      <List layout="right">
        <ListItem {...props}>
          <Title size={4} text="Orders" />
          <StatChange change="decrease" value="2" />
        </ListItem>
      </List>
    </NavItem>
    <NavItem>
      <List layout="right">
        <ListItem {...props}>
          <Title size={4} text="Profit" />
          <StatChange change="decrease" value="2" />
        </ListItem>
      </List>
    </NavItem>
    <NavItem>
      <List layout="right">
        <ListItem {...props}>
          <Title size={4} text="Average Check" />
          <StatChange change="decrease" value="2" />
        </ListItem>
      </List>
    </NavItem>
    <NavItem>
      <List layout="right">
        <ListItem {...props}>
          <Title size={4} text="Canceled" />
          <StatChange change="decrease" value="2" />
        </ListItem>
      </List>
    </NavItem>
    <NavItem>
      <List layout="right">
        <ListItem {...props}>
          <Title size={4} text="Repeat Sales" />
          <StatChange change="decrease" value="2" />
        </ListItem>
      </List>
    </NavItem>
  </Nav>
  </Flex>
);

export default DefaultNav;
