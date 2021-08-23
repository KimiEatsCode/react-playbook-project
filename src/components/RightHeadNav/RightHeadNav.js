import React from 'react';
import { Collapsible, Flex, FlexItem, Icon, Pill, User } from "playbook-ui"


const RightHeadNav = (props) => (
  <div>
    <Flex >
<Icon
          fixedWidth
          icon="bell"
          {...props}
      /> <Pill
      text="4"
      variant="primary"
  />

<Icon
          fixedWidth
          icon="inbox"
          {...props}
      /> <Pill
      text="2"
      variant="primary"
  />

  <Collapsible padding="none">
    <Collapsible.Main padding="none">
    <User
            align="left"
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
            name="Anna Black"
            orientation="horizontal"
            size="sm"
            {...props}
        />
    </Collapsible.Main >
    <Collapsible.Content padding="none">
      <div>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel erat sed purus hendrerit viverra. Duis et vestibulum metus. Sed consequat ut ante non vehicula. Etiam nunc massa, pharetra vel'
        }
      </div>
    </Collapsible.Content>
  </Collapsible>
  </Flex>
  </div>
);


export default RightHeadNav;
