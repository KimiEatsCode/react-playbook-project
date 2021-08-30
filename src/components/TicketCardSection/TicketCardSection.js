import React from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex } from 'playbook-ui'


const TicketCardSection = () => (


<div class="container-fluid">

  {/* <Flex orientation="row" justify="center">
  <Caption marginBottom="xs">This Weeks Ticket Esculations</Caption></Flex>
<Flex orientation="row" wrap marginTop="xs"> */}

<div className="row">
     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>
     <TicketColumn></TicketColumn>
     </div>
  {/* </Flex> */}
  </div>

);


export default TicketCardSection;
