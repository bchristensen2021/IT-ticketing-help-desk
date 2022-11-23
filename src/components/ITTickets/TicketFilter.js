import React from "react";
import "./TicketFilter.css";

const TicketFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(JSON.parse(event.target.value.toLowerCase()));
  };

  return (
    <div className="tickets-filter">
      <div className="tickets-filter__control">
        <label></label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="false">Open</option>
          <option value="true">Closed</option>
        </select>
      </div>
    </div>
  );
};

export default TicketFilter;
