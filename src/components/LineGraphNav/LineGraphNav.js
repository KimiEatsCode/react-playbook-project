import React from 'react'

import {  Icon, Nav, NavItem } from 'playbook-ui'

const DefaultNav = (props) => (
  <Nav
      orientation="vertical"
      justify="left"
      {...props}
  >
    <NavItem
        active
        iconRight="angle-right"
        align="start"
        link="#"
        text="Revenue"
        label="Caption"
        {...props}
    />
     
    <NavItem
        link="#"
        text="Orders"
        {...props}
    />
    <NavItem
        iconRight="angle-right"
        link="#"
        text="Profit"
        {...props}
    />
    <NavItem
        iconRight="angle-right"
        link="#"
        text="Average Check"
        {...props}
    />
     <NavItem
        iconRight="angle-right"
        link="#"
        text="Canceled"
        {...props}
    />
     <NavItem
        iconRight="angle-right"
        link="#"
        text="Repeat Sales"
        {...props}
    />
  </Nav>
)

export default DefaultNav