import React, { Component } from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex } from 'playbook-ui'


 export default class TicketCardSection extends Component {
  state = {
    hasErrors: false,
    ticketnewData: {}
  };
  componentDidMount(){
    fetch("http://localhost:3000/ticketnew")
      .then(res => res.json())
      .then(res => this.setState({ ticketnewData: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }

render () {

return (

<div className="container-fluid p-0">

  <Flex orientation="row" justify="center">

  <Caption >This Weeks Ticket Esculations</Caption>

  </Flex>

<div className="row">
     <TicketColumn dataNewTickets = {this.state.ticketnewData} ></TicketColumn>

     </div>

  </div>

)
}
 }

