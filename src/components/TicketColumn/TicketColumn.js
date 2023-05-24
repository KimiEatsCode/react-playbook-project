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
    document
      .querySelectorAll("h3.pb_title_kit_4")
      .forEach((element) => {
        element.classList.add("truncate");
      });
  });

    return (
      <div className="col-xs-12  mb-xs-2 col-sm mt-sm-3 col-md col-lg-3 mt-lg-3 col-xl-3">
          <Card padding="none" marginRight="sm">
            <Card.Body className="sideBorder">
              <Flex spacing="between">
                <FlexItem>
                  <Title size={4}>{props.title}</Title>
                </FlexItem>
                <FlexItem marginLeft="xs">
                  <Pill text={props.count} variant={props.pillColor} />
                </FlexItem>
              </Flex>
            </Card.Body>
            <SectionSeparator variant="card"></SectionSeparator>
            {
              <div className="ticketCards" >
              <Nav orientation="vertical"  >

                <NavItem
                 iconRight="angle-right"  {...props}>
                  <User
                    align="left"
                    avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                    name="Missing part"
                    orientation="horizontal"
                  />
                </NavItem>

                <NavItem
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
              </div>
            }
          </Card>


      </div>
    );
  };


export default TicketColumn;
