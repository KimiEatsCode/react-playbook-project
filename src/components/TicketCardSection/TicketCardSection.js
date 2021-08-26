import React from 'react';
import BlockNav from '../BlockNav/BlockNav';
import { Caption, Flex, FlexItem, Layout } from 'playbook-ui'


const TicketCardSection = () => (
  <>
<Flex orientation="row" wrap>
<Caption>This weeks ticket esculations</Caption>
     <BlockNav></BlockNav>

  </Flex>

  </>
);



export default TicketCardSection;
