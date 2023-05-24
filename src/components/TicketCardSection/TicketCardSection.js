import React, { Component } from 'react';
import TicketColumn from '../TicketColumn/TicketColumn';
import { Caption, Flex, Title } from 'playbook-ui'


 export default class TicketCardSection extends Component {
  state = {
    hasErrors: false,
    mergedData: {},
    ticketNewData: {},
    ticketFeedbackData: {}
  };

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

return (

<div className="container-fluid p-0 mt-5">
<hr></hr>
  <div className="row">
  <Caption >This Week's Ticket Stats</Caption>
    <Title
          size={3}
          tag="h1"
          text="Team Members"></Title>

</div>
<div className="row">
     <TicketColumn title="New" count="25" pillColor="info"></TicketColumn>
     <TicketColumn title="Processing"  count="3"  pillColor="warning"></TicketColumn>
     <TicketColumn title="Awaiting Feedback"  count="2"  pillColor="error"></TicketColumn>
     <TicketColumn title="Approved"  count="15"  pillColor="success"></TicketColumn>
     </div>
  </div>

)
}
 }

