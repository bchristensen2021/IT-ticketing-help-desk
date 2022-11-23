import React from "react";

import "./TicketDate.css";

const TicketDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "2-digit" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="ticket-date">
      <div className="ticket-date__mdy">
        {month}/{day}/{year}
      </div>
    </div>
  );
};

export default TicketDate;
