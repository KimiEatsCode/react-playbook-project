import React, { Component } from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex } from 'playbook-ui'


 export default class TicketCardSection extends Component {
  state = {
    hasErrors: false,
    ticketnew: {}
  };
  componentDidMount(){
    fetch("http://localhost:3000/ticketnew")
      .then(res => res.json())
      .then(res => this.setState({ ticketnew: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

render () {

return (

<div className="container-fluid p-0">

  <Flex orientation="row" justify="center">

  <Caption >This Weeks Ticket Esculations</Caption>
   {JSON.stringify(this.state.ticketnew)}
  </Flex>

<div className="row">
     <TicketColumn pillColor="info"></TicketColumn>
     <TicketColumn pillColor="primary"></TicketColumn>
     <TicketColumn pillColor="warning"></TicketColumn>
     <TicketColumn pillColor="error"></TicketColumn>
     <TicketColumn pillColor="success"></TicketColumn>
     </div>

  </div>

)
}
 }

