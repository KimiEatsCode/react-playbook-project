import React from 'react'
import {
  Badge,
  Body,
  Card,
  Flex,
  FlexItem,
  Layout,
  Nav,
  NavItem,
  Pill,
  SectionSeparator,
  Title,
  User  } from 'playbook-ui'


const BlockNav = (props) => {

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[class="pb_title_kit_4"]').forEach((element) => {
      element.classList.add("truncate")
    })
  })

  return (
    <div>
<Layout layout="collection_detail">
   <Card
    padding="none">
         <Card.Body padding="md">
    {  }
    <Flex spacing="between">
    <FlexItem>
    <Title  size={4}>New</Title>
                      </FlexItem>
                      <FlexItem marginLeft="xs">
                        <Pill
                            text="25"
                            variant="info"
                        />
                      </FlexItem>
                    </Flex>



      </Card.Body>
      <SectionSeparator variant="card"></SectionSeparator>

{
    <Nav
    link="#"
    marginTop="sm"
        orientation="vertical"

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
            orientation="horizontal"

            {...props}
        />


      </NavItem>
      <NavItem link="#"  iconRight="angle-right">
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/45.jpg"
      name="Part of process incomplete"
            orientation="horizontal"
            {...props}
        />
      </NavItem>
      <NavItem link="#">
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/men/44.jpg"

            orientation="horizontal"

            {...props}
        />
      </NavItem>
      <NavItem link="#">
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/men/46.jpg"

            orientation="horizontal"

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