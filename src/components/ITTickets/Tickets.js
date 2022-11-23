import React, { useState } from "react";
import "./Tickets.css";
import Card from "../UI/Card";
import TicketItem from "./TicketItem.js";
import TicketFilter from "./TicketFilter";
import TicketDate from "./TicketDate";

const Tickets = (props) => {
  const [filteredResolved, setFilteredResolve] = useState(false);

  const filterChangeHandler = (selectedResolved) => {
    setFilteredResolve(selectedResolved);
  };

  const filteredTickets = props.tickets.filter((ticket) => {
    return ticket.resolved === filteredResolved;
  });

  let ticketsContent = <p>No tickets found.</p>;
  // need handler in order to change between open and closed tickets
  if (filteredTickets.length > 0) {
    console.log(filteredTickets);
    ticketsContent = filteredTickets.map((ticket) => (
      //   if (filteredResolved.length > 0) {
      //     console.log("print tickets");
      //     ticketsContent = filteredResolved.map((ticket) => (
      <TicketItem
        key={ticket.id}
        date={ticket.date}
        tech={ticket.technician}
        notes={ticket.notes}
        submitter={ticket.submitter}
        resolved={ticket.resovled}
      ></TicketItem>
    ));
  }

  return (
    <div>
      <Card className="tickets">
        <TicketFilter
          selected={filteredResolved}
          onChangeFilter={filterChangeHandler}
        ></TicketFilter>
        <Card className="ticket-item">
          <h2>Date</h2>
          <h2>Notes</h2>

          <h2 style={{ textAlign: "right" }}>Submitted by</h2>
          <h2 style={{ textAlign: "right" }}>Technician</h2>

          {/* <div className="ticket-item__technician">Technician</div> */}
        </Card>
        {ticketsContent}
      </Card>
    </div>
  );
};

export default Tickets;
