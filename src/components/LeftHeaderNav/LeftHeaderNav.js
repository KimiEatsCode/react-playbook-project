import React from 'react'

import { Nav, NavItem } from 'playbook-ui'

const HorizontalNav = (props) => {
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
          text="Case Studies"
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

export default HorizontalNav