import React, { useState } from "react";
import { Badge, Card, Icon, Nav, NavItem, User } from "playbook-ui";

const RightHeaderNav = (props) => {
  const [inHover, setHover] = useState(false);

  return (
    <div>
      <Nav
        orientation="horizontal"
        padding="xs"
        highlight={false}
        variant="subtle"
      >
        <NavItem>
          <Icon fixedWidth icon="bell" {...props} />

          <Badge text="4" variant="primary" {...props} />
        </NavItem>
        <NavItem>
          <Icon fixedWidth icon="inbox" {...props} />
          <Badge text="2" variant="primary" {...props} />
        </NavItem>
        <NavItem>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(true)}
          >
            <User
              align="left"
              avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
              name="Anna Black"
              orientation="horizontal"
              size="sm"
              {...props}
            />
          </div>
        </NavItem>
      </Nav>

      {inHover && (
        <Card
          padding="none"
          className="hoverNav"
          onMouseLeave={() => setHover(false)}
        >
          <Nav padding="none" link="#" orientation="vertical" {...props}>
            <NavItem link="#" text="Profile" {...props} />
            <NavItem link="#" text="Settings" {...props} />
          </Nav>
        </Card>
      )}
    </div>
  );
};

export default RightHeaderNav;
