import React from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex } from 'playbook-ui'


const TicketCardSection = () => (


<div class="container-fluid p-0">

  <Flex orientation="row" justify="center">
  <Caption>This Weeks Ticket Esculations</Caption>
  </Flex>

<div class="row">
     <TicketColumn pillColor="info"></TicketColumn>
     <TicketColumn pillColor="primary"></TicketColumn>
     <TicketColumn pillColor="warning"></TicketColumn>
     <TicketColumn pillColor="error"></TicketColumn>
     <TicketColumn pillColor="success"></TicketColumn>
     </div>

  </div>

);


export default TicketCardSection;
