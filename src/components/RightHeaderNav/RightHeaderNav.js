import React, { useState } from 'react';
import { Badge, Collapsible, Flex, FlexItem, Icon, Nav, NavItem, User } from "playbook-ui"


const RightHeaderNav = (props) => {
const[inHover, setHover] = useState(false)
return (
  <div>
  <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Hover over me!
      </button>
      {inHover && <p>Hi!</p>}
 <Nav orientation="horizontal" padding="xs">
<Icon
          fixedWidth
          icon="bell"
          {...props}
      />

<Badge
          text="4"
          variant="primary"
          {...props}
      />

<Icon
          fixedWidth
          icon="inbox"
          {...props}
      />
       <Badge
          text="2"
          variant="primary"
          {...props}
      />
 {inHover && <p>Hi!</p>}

    <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
            name="Anna Black"
            orientation="horizontal"
            size="sm"
            {...props}
        />

  </Nav>
  <Nav>
  {inHover && <p>Hi!</p>}
  </Nav>
  {/* </Flex> */}
  </div>
);
}

export default RightHeaderNav;
