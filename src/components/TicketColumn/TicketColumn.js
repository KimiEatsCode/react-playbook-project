import React from "react";
import {
  Card,
  Flex,
  FlexItem,
  Nav,
  NavItem,
  Pill,
  SectionSeparator,
  Title,
  User,
} from "playbook-ui";

const TicketColumn = (props) => {
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.pb_nav_list_item_text .pb_title_kit_4').forEach((element) => {
      element.classList.add("truncate");
    });
  });

  return (
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
{/* <Flex orientation="row" spacing="between"> */}


        <Card padding="none">
          <Card.Body className="sideBorder">
            {}
            {/* <Flex spacing="between">
              <FlexItem> */}
                <Title size={4}>New</Title>
              {/* </FlexItem>
              <FlexItem marginLeft="xs"> */}
                <Pill text="25" variant="info" />
              {/* </FlexItem>
            </Flex> */}
          </Card.Body>
          <SectionSeparator variant="card"></SectionSeparator>

          {
            <Nav link="#" orientation="vertical" {...props}>
              <NavItem  iconRight="angle-right" link="#" {...props}>
                {/* <Flex> */}
                <User
                  align="left"
                  avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                  name="Missing part"
                  orientation="horizontal"
                  {...props}
                />
                {/* </Flex> */}
              </NavItem>
              <NavItem link="#" iconRight="angle-right">
                {/* <Flex> */}
                <User
                  align="left"
                  avatarUrl="https://randomuser.me/api/portraits/women/45.jpg"
                  name="Not performing"
                  orientation="horizontal"
                  {...props}
                />
                {/* </Flex> */}
              </NavItem>
              <NavItem link="#">
                <User
                  align="left"
                  avatarUrl="https://randomuser.me/api/portraits/men/44.jpg"
                  name="Unexpected error"
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


        {/* </Flex> */}

    </div>
  );
};

export default TicketColumn;
