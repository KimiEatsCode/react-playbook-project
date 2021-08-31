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
  BackgroundColor: variables.test,
};

const TicketColumn = (dataNewTickets) => {
  window.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll(".pb_nav_list_item_text .pb_title_kit_4")
      .forEach((element) => {
        element.classList.add("truncate");
      });
  });

    const data = dataNewTickets.dataNewTickets[0].users;
  return (
    <div className="col-xs-12 mb-xs-2 col-sm mt-sm-3 col-md col-lg-4 mt-lg-3 col-xl-3">
      {/* {JSON.stringify(dataNewTickets.dataNewTickets[0].users)} */}

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
            {data.map((item, index) => (
              <NavItem iconRight="angle-right" link="#">
                <User
                  avatar
                  align="left"
                  avatarUrl={item.avatarUrl}
                  name={item.name}
                  orientation="horizontal"
                />
              </NavItem>
            ))}

          </Nav>
        }
      </Card>
    </div>
  );
};

export default TicketColumn;
