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
import variables from "../../index.scss";


const CSS = {
  BackgroundColor: variables.test
}

const TicketColumn = (dataNewTickets) => {

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.pb_nav_list_item_text .pb_title_kit_4').forEach((element) => {
      element.classList.add("truncate");
    });
  });


  return (
    <div className="col-xs-12 mb-xs-2 col-sm mt-sm-3 col-md col-lg-4 mt-lg-3 col-xl-3">
{JSON.stringify(dataNewTickets.dataNewTickets)}

        <Card padding="none" marginRight="sm">
          <Card.Body className="sideBorder">

            <Flex spacing="between">
              <FlexItem>
                <Title size={4}>New</Title>
              </FlexItem>
              <FlexItem marginLeft="xs">
                <Pill text="25" variant="primary" />
              </FlexItem>
            </Flex>
          </Card.Body>
          <SectionSeparator variant="card"></SectionSeparator>

          {
            <Nav link="#" orientation="vertical">

              <NavItem
               iconRight="angle-right" link="#">
                <User
                  align="left"
                  avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                  name="Missing part"
                  orientation="horizontal"

                />
              </NavItem>

              <NavItem link="#"
              iconRight="angle-right">

                <User
                  align="left"
                  avatarUrl="https://randomuser.me/api/portraits/women/45.jpg"
                  name="Not performing"
                  orientation="horizontal"

                />

              </NavItem>
              <NavItem link="#"
              iconRight="angle-right" >
                   <Flex >
                <User
                  align="left"
                  avatar
                  name="Unexpected error"
                  orientation="horizontal"

                />
                </Flex>
              </NavItem>
              <NavItem link="#"
              iconRight="angle-right" >
                <Flex justify="stretch">
                <User
                  align="left"
                  avatarUrl="https://randomuser.me/api/portraits/men/46.jpg"
                  orientation="horizontal"
                  name="Not performing"

                />
                </Flex>
              </NavItem>
            </Nav>
          }
        </Card>


    </div>
  );
};

export default TicketColumn;
