import React, { Component } from 'react';

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

export class DefaultNav extends Component {
constructor(props) {
    super(props);
    this.state = {
        name:"Sarah"
    }
}

nameChange = () => {
    this.setState({name:"test"})
}

render(props) {
    return (
    <Flex>
         <div className="App">
      <button onClick={this.nameChange}>Change Name</button>
    </div>
  <Nav orientation="vertical">
    <NavItem active>
      <List layout="right">
        <ListItem {...props}>
          <Title  size={4} text={this.state.name} />
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
    }
}

export default DefaultNav;
