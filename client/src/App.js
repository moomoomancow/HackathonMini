import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChatBotHelper from './chatbot';
import Home from './home';
import About from './about';
import Contact from './contact';
import Tickets from './tickets';
import './App.css';


function App() {
  const [ticket, setTicket] = useState([]);
  const [ticketNumber, setTicketNumber] = useState();

  useEffect(() => {
      TicketFetcher(ticketNumber);

  }, [ticketNumber]);

  const TicketFetcher = async (ticketNum) => {
    try {
      const response = await fetch(`http://localhost:8080/${ticketNumber}`);
      const data = await response.json();

        setTicket(data);

    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
  };

  const handleTicketNumberChange = (newTicketNumber) => {
    setTicketNumber(newTicketNumber);
    console.log(newTicketNumber)
  };

  return (


    <Router>
    <div>
    <ChatBotHelper onTicketNumberChange={handleTicketNumberChange} ticket={ticket} />
      <header>
        <h1>The Nth Comm Squadron</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/tickets">Tickets</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/tickets' element={<Tickets />}/>
        </Routes>
      </main>
      <footer>
      </footer>
    </div>
  </Router>
  );
}

export default App;
