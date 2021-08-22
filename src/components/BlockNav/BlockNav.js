import React from 'react'
import {
  Card,
  Layout,
  Nav,
  NavItem,
  SectionSeparator,
  Title,
  User  } from 'playbook-ui'
  import styled from 'styled-components'


// .truncate div {
//   max-width: 49%;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

//do what news stories does if know class name in component override styling by pointing to  element with style


const BlockNav = (props) => {

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[class="pb_user_kit_left_horizontal_sm"]').forEach((element) => {
      element.classList.add("truncate")
    })
  })

//   const GraphTitle = styled.p `
// color:#242b42;
// font-weight:bold;
// padding:10px 20px;
// text-align:left;
// `;

  return (
    <div>
<Layout layout="collection_detail">
   <Card
    padding="none">
         <Card.Body padding="md">
     {/* <GraphTitle>Key Performance Indicators</GraphTitle> */}
    { <Title size={4}>New</Title>}
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
<span className="truncate">
        <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"

            name="Anna Black"
            orientation="horizontal"
            territory="PHL"
            title="Remodeling Consultant"
            {...props}
        />
  </span>

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