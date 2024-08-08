import React from 'react';
import ChatBotHelper from './chatbot';
import { useState, useEffect } from 'react';

function App() {
  const [ticket, setTicket] = useState([]);
  const [ticketNumber, setTicketNumber] = useState(2)

  useEffect(() => {
    TicketFetcher()
   }, [])

  const TicketFetcher = async () => {
    try {
      const response = await fetch(`http://localhost:8080/${ticketNumber}`);
      const data = await response.json();
      setTicket(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
    if(ticket.length === 0){
      return <h1>Wait</h1>
    }
  }
    return (
        <>
        {console.log(ticket)}
        <ChatBotHelper/>
        {ticket.length > 0 ?
        ticket.map((x) => (
          <div key = {x.ticketnumber}>
            <h5>{x.customer}</h5>
            </div>
        )):(
          <p>no ticket</p>
        )
     }
        </>
    );
}

export default App;

