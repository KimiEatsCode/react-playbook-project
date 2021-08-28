import React from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Flex, FlexItem, Layout } from 'playbook-ui'


const TicketCardSection = () => (
  <>
<Flex orientation="row" wrap>
     <TicketColumn></TicketColumn>
  </Flex>

  </>
);


export default TicketCardSection;
