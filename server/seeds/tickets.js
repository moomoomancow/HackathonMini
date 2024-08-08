/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tickets').del()
  await knex('tickets').insert([
    { customer: 'Major Pain', workflow: 'Awaiting technician review', tickettype: 'phone'},
    { customer: 'Corporal Punishment', workflow: 'Completed', tickettype: 'computer'},
    { customer: 'Admiral Bulltraits', workflow: 'Awaiting technician review', tickettype: 'computer'},
    { customer: 'Private Eyes', workflow: 'Account restored', tickettype: 'account'},
    { customer: 'Captain Officer', workflow: 'Brought to HUB', tickettype: 'computer'},
    { customer: 'Sergeant Sargent', workflow: 'Awaiting new parts', tickettype: 'something else'},
    { customer: 'Captain Crunch', workflow: 'Ticket in progress', tickettype: 'computer'},
    { customer: 'SSgt Afraid-of-lightening', workflow: 'Awaiting customer response', tickettype: 'phone'}


  ]);
};
