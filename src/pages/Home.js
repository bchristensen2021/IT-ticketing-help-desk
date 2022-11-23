import React, { useState } from "react";
import Tickets from "../components/ITTickets/Tickets";
import { DUMMY_TICKETS } from "../tools/dummyData";

function Home() {
  const tickets = DUMMY_TICKETS;

  return (
    <div className="home">
      <Tickets tickets={tickets}></Tickets>
    </div>
  );
}

export default Home;
