// app.js
const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());
app.use(cors())

app.get('/:ticketNumber', function(req, res) {
  const ticket_number = req.params.ticketNumber
  knex('tickets')
    .select('*')
    .where('ticketnumber', ticket_number)
    .then(data => res.status(200).json(data))
    .catch(err =>
      {console.log(err)
        return res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
      }
    );
});

app.get('/', function(req, res) {
  knex('tickets')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      {console.log(err)
        return res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
      }
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});