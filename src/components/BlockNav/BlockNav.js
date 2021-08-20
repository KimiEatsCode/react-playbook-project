import React from 'react'
import {
  Card,
  Layout,
  Nav,
  NavItem,
  User  } from 'playbook-ui'

const BlockNav = (props) => {
  return (
    <div>
        <Layout
          layout="collection_detail"
          padding="lg"
      >
    <Card>
      {
    <Nav variant="subtle"
        link="#"
        title="Users"
        {...props}
    >
      <NavItem
          active
          iconRight="angle-right"
          link="#"
          {...props}
      >
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"

            name="Anna Black"
            orientation="horizontal"
            territory="PHL"
            title="Remodeling Consultant"
            {...props}
        />
      </NavItem>
      <NavItem link="#">
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/45.jpg"
            name="Julie Hamilton"
            orientation="horizontal"
            territory="PHL"
            title="Inside Sales Agent"
            {...props}
        />
      </NavItem>
      <NavItem link="#">
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/men/44.jpg"
            name="Dennis Wilks"
            orientation="horizontal"
            territory="PHL"
            title="Senior Remodeling Consultant"
            {...props}
        />
      </NavItem>
      <NavItem link="#">
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/men/46.jpg"
            name="Ronnie Martin"
            orientation="horizontal"
            territory="PHL"
            title="Customer Development Representative"
            {...props}
        />
      </NavItem>
    </Nav>
}
    </Card>
    </Layout>
    </div>
  )
}

export default BlockNav