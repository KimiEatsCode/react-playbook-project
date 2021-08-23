import React from "react";
import {  Flex, FlexItem, Icon, Nav, NavItem, Pill, User } from "playbook-ui";

const RightHeadNav = (props) => (
  <div>
    <Flex orientation="row" justify="end">
      <FlexItem>
      <Icon fixedWidth icon="bell" {...props} />{" "}
      <Pill text="4" variant="primary" />
      <Icon fixedWidth icon="inbox" {...props} />{" "}
      <Pill text="2" variant="primary" />
      </FlexItem>

      <FlexItem>
      <Nav>
      <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"

            orientation="horizontal"

            {...props}
        />
      <NavItem
          iconRight="angle-down"
          text="Julie Tanner"
          {...props}
      />

    </Nav>
      </FlexItem>
    </Flex>
  </div>
);

export default RightHeadNav;
