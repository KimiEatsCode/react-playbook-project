import React from 'react';
import BlockNav from '../BlockNav/BlockNav';
import { Flex, FlexItem } from 'playbook-ui'


const TicketCardSection = () => (
  <>
      <Flex orientation="row" marginTop="lg" spacing="between">
        <FlexItem fixedSize="200px"><BlockNav></BlockNav></FlexItem>
        <FlexItem fixedSize="200px"><BlockNav></BlockNav></FlexItem>
        <FlexItem fixedSize="200px"><BlockNav></BlockNav></FlexItem>
        <FlexItem fixedSize="200px"><BlockNav></BlockNav></FlexItem>

</Flex>
  </>
);



export default TicketCardSection;
