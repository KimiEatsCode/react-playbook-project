import React from 'react'

import { Nav, NavItem } from 'playbook-ui'

const LeftHeaderNav = (props) => {
  return (

    <Nav
        link="#"
        orientation="horizontal"
        {...props}
    >
      <NavItem
          link="#"
          text="About"
          {...props}
      />
      <NavItem
          active
          link="#"
          text="Stats"
          {...props}
      />
      <NavItem
          link="#"
          text="Service"
          {...props}
      />
      <NavItem
          link="#"
          text="Contacts"
          {...props}
      />
    </Nav>

  )
}

export default LeftHeaderNav