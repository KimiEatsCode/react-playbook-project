import React from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex, FlexItem} from 'playbook-ui'


const TicketCardSection = () => (
  <>

  <Flex orientation="row" justify="center">
  <Caption marginBottom="xs">This Weeks Ticket Esculations</Caption></Flex>
<Flex orientation="row" wrap marginTop="xs">


     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>

  </Flex>

  </>
);


export default TicketCardSection;
