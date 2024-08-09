import React from 'react';
import { useState, useEffect } from 'react'

function Tickets() {
  const [ticket, setTicket] = useState([]);


  useEffect(() => {
      TicketFetcher();

  }, []);

  const TicketFetcher = async (ticketNum) => {
    try {
      const response = await fetch(`http://localhost:8080/`);
      const data = await response.json();
      setTicket(data);

    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
  };
  const TicketDisplay =  () => {
        return (<>
          {ticket.length > 0 ?
            ticket.map((x) => (
              <div key = {x.ticketnumber}>
                <h5>{x.ticketnumber}</h5>
                <h5>{x.customer}</h5>
                <h5>{x.workflow}</h5>
                <h5>{x.tickettype}</h5>
                </div>
            )):(
              <p>no ticket</p>
            )
         }
         </>
        )
      }

  return (
    <section id="home">
      <h2>Tickets</h2>
    <TicketDisplay/>
    </section>
  );
}

export default Tickets;