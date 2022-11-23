import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewTicketPage from "./pages/NewTicketPage";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/newTicket" exact element={<NewTicketPage />} />
          {/* <Route path="/mailbox" exact element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
