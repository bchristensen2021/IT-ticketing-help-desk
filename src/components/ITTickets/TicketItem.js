import React from "react";
import Card from "../UI/Card";
import "./TicketItem.css";
import TicketDate from "./TicketDate";

function TicketItem(props) {
  return (
    <div>
      <Card className="ticket-item">
        <TicketDate date={props.date} />
        <h2>{props.notes}</h2>
        <div className="ticket-item__description">
          <h2>Submitted by {props.submitter}</h2>
          <div className="ticket-item__technician">{props.tech}</div>
        </div>
      </Card>
    </div>
  );
}

export default TicketItem;
