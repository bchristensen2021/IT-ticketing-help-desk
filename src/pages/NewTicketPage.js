import React, { useState } from "react";
import NewTicket from "../components/NewTickets/NewTicket";
import { DUMMY_TICKETS } from "../tools/dummyData";

const NewTicketPage = () => {
  const [tickets, setTickets] = useState(DUMMY_TICKETS);

  const addTicketHandler = (ticket) => {
    setTickets((prevTickets) => {
      DUMMY_TICKETS.push(ticket);
      console.log(DUMMY_TICKETS);
      return [ticket, ...prevTickets];
    });
  };

  return (
    <div className="newTicket">
      <NewTicket onAddTicket={addTicketHandler} />
    </div>
  );
};

export default NewTicketPage;
