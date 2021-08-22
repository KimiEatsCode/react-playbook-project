import React from 'react'

import { Nav, NavItem } from 'playbook-ui'

const DefaultNav = (props) => (
  <Nav
      orientation="vertical"
      {...props}
  >
    <NavItem
        link="#"
        text="Photos"
        {...props}
    />
    <NavItem
        link="#"
        text="Music"
        {...props}
    />
    <NavItem
        active
        link="#"
        text="Video"
        {...props}
    />
    <NavItem
        link="#"
        text="Files"
        {...props}
    />
  </Nav>
)

export default DefaultNav