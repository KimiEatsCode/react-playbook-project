import React from 'react'
import { Flex, FlexItem, Nav, NavItem } from 'playbook-ui'

const LeftHeaderNav = (props) => {
  return (
    <Flex orientation="row">


      <FlexItem>
    <Nav
        link="#"
        orientation="horizontal"
        {...props}
    >
      <NavItem
          link="#"
          text="Dashboard"
          {...props}
      />
      <NavItem
          active
          link="#"
          text="Products"
          {...props}
      />
      <NavItem
          link="#"
          text="In Progress"
          {...props}
      />
      <NavItem
          link="#"
          text="Settings"
          {...props}
      />
    </Nav>
    </FlexItem>
    </Flex>
  )
}

export default LeftHeaderNav