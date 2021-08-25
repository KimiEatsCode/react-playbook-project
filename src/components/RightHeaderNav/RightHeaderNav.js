import React, { useState } from 'react';
import { Badge, Card, Collapsible, Flex, FlexItem, Icon, Nav, NavItem, User } from "playbook-ui"


const RightHeaderNav = (props) => {
const[inHover, setHover] = useState(false);
const testFunction = (testing) => {
  console.log('this is ' + testing)
}

return (
  <div>

 <Nav orientation="horizontal" padding="xs"  highlight={false}
        variant="subtle">
<NavItem>
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
</NavItem>
<NavItem>
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
</NavItem>

 <div onClick={props.testFunction}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >  <User clickHandler={testFunction}
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
            name="Anna Black"
            orientation="horizontal"
            size="sm"
            {...props}
        />

        </div>

  </Nav>

{inHover &&
<Card padding="none" className="hoverNav">
  <Nav

      padding="none"
      link="#"
      orientation="vertical"
      {...props}
  >
    <NavItem
        link="#"
        text="Profile"
        {...props}
    />
    <NavItem
        link="#"
        text="Settings"
        {...props}
    />
  </Nav>
  </Card>
}
  </div>
);
}

export default RightHeaderNav;
