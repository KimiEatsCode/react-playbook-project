import React, { Component } from 'react'
import {
  Flex,
  FlexItem,
  Icon,
  List,
  ListItem,
  StatChange,
  Title,
} from 'playbook-ui'


class ListLayoutRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sarah",
    }
  }
  render (props) {
  return  (
    <>
<Flex>
      <List

          layout="right"
          {...props}
      >
        <ListItem>
          <Title
              size={4}
              text={this.state.name}
              {...props}
          />
        <StatChange
          change="increase"
          value="26"
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Orders"
              {...props}
          />
          <StatChange
          change="decrease"
          value="2"
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Profit"
              {...props}
          />
         <StatChange
          change=""
          value=""
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Average Check"
              {...props}
          />
          <StatChange
          change="increase"
          value="5"
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Canceled"
          />
          <StatChange
          change="decrease"
          value="18"
          {...props}
      />
        </ListItem>
        <ListItem>
          <Title
              size={4}
              text="Repeat Sales"
          />
          <StatChange
          change=" "
          value=""
          {...props}
      />
        </ListItem>
      </List>
      </Flex>
    </>
  )
}
}

export default ListLayoutRight