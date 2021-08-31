import React from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex } from 'playbook-ui'


const TicketCardSection = (props) => {


return (


<div className="container-fluid p-0">

  <Flex orientation="row" justify="center">
  {props.ticketNewFunc}
  <Caption>This Weeks Ticket Esculations</Caption>
  </Flex>

<div className="row">
     <TicketColumn pillColor="info"></TicketColumn>
     <TicketColumn pillColor="primary"></TicketColumn>
     <TicketColumn pillColor="warning"></TicketColumn>
     <TicketColumn pillColor="error"></TicketColumn>
     <TicketColumn pillColor="success"></TicketColumn>
     </div>

  </div>

);
}

export default TicketCardSection;
