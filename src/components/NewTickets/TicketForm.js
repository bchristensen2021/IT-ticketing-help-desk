import React, { useState } from "react";
import "./TicketForm.css";

const TicketForm = (props) => {
  const [generatedId, setId] = useState("100");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTech, setTechnician] = useState("");
  const [enteredResolved, setResolved] = useState(false);
  const [enteredNotes, setNotes] = useState("");
  const [enteredSubmitter, setSubmitter] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const dropdownChangeHandler = (event) => {
    setTechnician(event.target.value);
  };

  const resolvedChangeHandler = (event) => {
    setResolved(event.target.value);
  };

  const submitterChangeHandler = (event) => {
    setSubmitter(event.target.value);
  };
  const notesChangeHandler = (event) => {
    setNotes(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let currentId = parseInt(generatedId) + 1;

    const ticketData = {
      id: currentId,
      date: new Date(enteredDate),
      technician: enteredTech,
      resolved: enteredResolved,
      notes: enteredNotes,
      submitter: enteredSubmitter,
    };

    props.onSaveTicketData(ticketData);

    // currently this is putting 100 into id field on refresh
    setId(currentId);
    setEnteredDate("");
    setTechnician("");
    setResolved(false);
    setNotes("");
    setSubmitter("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-ticket__controls">
        <div className="new-ticket__control">
          <label>Ticket ID</label>
          <input type="number" readOnly={true} value={generatedId} />
        </div>
        <div className="new-ticket__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-ticket__control">
          <label>Assigned Technician</label>
          <select
            type="text"
            value={enteredTech}
            onChange={dropdownChangeHandler}
          >
            <option>Assign a Technician</option>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="Elizabeth">Elizabeth</option>
            <option value="Fred">Fred</option>
            <option value="Hannah">Hannah</option>
            <option value="James">James</option>
          </select>
        </div>
        <div className="new-ticket__control">
          <label>Resolved</label>
          <input
            type="checkbox"
            value={enteredResolved}
            onChange={resolvedChangeHandler}
          />
        </div>
        <div className="new-ticket__control">
          <label>Notes</label>
          <input
            type="text"
            value={enteredNotes}
            onChange={notesChangeHandler}
          />
        </div>
        <div className="new-ticket__control">
          <label>Submitted by</label>
          <input
            type="text"
            value={enteredSubmitter}
            onChange={submitterChangeHandler}
          />
        </div>
      </div>
      <div className="new-ticket__actions">
        <button type="submit">Create Ticket</button>
      </div>
    </form>
  );
};

export default TicketForm;
