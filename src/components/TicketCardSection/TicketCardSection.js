import React from 'react';
import BlockNav from '../BlockNav/BlockNav';
import { Flex } from 'playbook-ui'


const TicketCardSection = () => (
  <>
      <Flex orientation="row" marginTop="lg" spacing="between">
<BlockNav></BlockNav>
<BlockNav></BlockNav>
<BlockNav></BlockNav>
<BlockNav></BlockNav>
</Flex>
  </>
);



export default TicketCardSection;
