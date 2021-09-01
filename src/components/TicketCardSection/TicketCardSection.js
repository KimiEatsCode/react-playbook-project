import React, { Component } from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex } from 'playbook-ui'


 export default class TicketCardSection extends Component {
  state = {
    hasErrors: false,
    mergedData: {},
    ticketNewData: {},
    ticketFeedbackData: {}
  };

  //refactor use useEffect in a functional component

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3000/ticketNew")
      .then(ticketNewData => ticketNewData.json()),
      fetch("http://localhost:3000/ticketFeedback")
      .then(ticketFeedbackData => ticketFeedbackData.json()),
      fetch("http://localhost:3000/ticketProcessing")
      .then(ticketProcessingData => ticketProcessingData.json()),
      fetch("http://localhost:3000/ticketAwaiting")
      .then(ticketAwaitingData => ticketAwaitingData.json()),
      fetch("http://localhost:3000/ticketApproved")
      .then(ticketApprovedData => ticketApprovedData.json())
    ]).then(([ticketNewData, ticketFeedbackData, ticketProcessingData, ticketAwaitingData, ticketApprovedData]) => {
        this.setState({
            mergedData:[ticketNewData, ticketFeedbackData, ticketProcessingData, ticketAwaitingData, ticketApprovedData]
        });
    }).catch(() => this.setState({ hasErrors: true }));
}

render () {
 const mergedData = this.state.mergedData;

return (

<div className="container-fluid p-0">

  <Flex orientation="row" justify="center">

  <Caption >This Weeks Ticket Esculations</Caption>

  </Flex>

<div className="row">
     {/* <TicketColumn title="New" count="25" pillColor="info"></TicketColumn>
     <TicketColumn title="Manager Feedback" count="5"  pillColor="primary"></TicketColumn>
     <TicketColumn title="Processing"  count="3"  pillColor="warning"></TicketColumn>
     <TicketColumn title="Awaiting Feedback"  count="2"  pillColor="error"></TicketColumn>
     <TicketColumn title="Approved"  count="15"  pillColor="success"></TicketColumn> */}

     <TicketColumn dataTickets = {mergedData[0]} ></TicketColumn>
     <TicketColumn dataTickets = {mergedData[1]} ></TicketColumn>
     <TicketColumn dataTickets = {mergedData[2]} ></TicketColumn>
     <TicketColumn dataTickets = {mergedData[3]} ></TicketColumn>
     <TicketColumn dataTickets = {mergedData[4]} ></TicketColumn>
     </div>

  </div>

)
}
 }

