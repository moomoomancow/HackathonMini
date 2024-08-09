import phoneimg from './media/rtaImage.jpeg'
import React from 'react';
import handleTicketNumberChange from './App.js'


const BotRedirect = ({ url, message }) => {


  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

// const ticketFetch = (x) => {
//   return
// }



const botSteps = (onTicketNumberChange, ticket) => [

  ////Start
  {
    id: "1",
    message: `Hello! I'm Cypher! Your helpful Cyber-bot!`,
    trigger: "2"
  },
  {
    id: "2",
    message: "Is there anything I can help you with?",
    trigger: "3"
  },
  {
    id: "3",
    options: [
      { value: 1, label: "Phone issues", trigger: "phoneIssue" },
      { value: 2, label: "Computer issues", trigger: 'computerIssue'},
      { value: 3, label: "Account issues", trigger: "accountIssue" },
      { value: 4, label: "Check existing ticket", trigger: "checkTicket" }

    ]
  },

  // Phones///////////////
  {
    id:'phoneIssue',
    message: "What seems to be wrong with your phone?",
    trigger: 'phoneOptions'
  },
  {
    id:'phoneOptions',
    options: [
      { value: 1, label: `Won't power on`, trigger: "phonePower" },
      { value: 2, label: `Can't dial/make calls`, trigger: "phoneCalls" },
      { value: 3, label: "Adjust speed dials/number", trigger: "speedDials" },
      { value: 4, label: "Something else", trigger: "ticketOption1" }
    ]
  },
  {
    id: "phonePower",
    component:(
      <div>
        <text>Your phone is provided power through the ethernet cable running from the wall port.</text>
        <br /><br />
        <text>The phone then passes internet connection through to your computer.</text>
        <h3>Please ensure that the cables are plugged in the proper orientation and that the cables on both the phone and at the wall are fully inserted.</h3>
      </div>
    ),
    trigger:'phonePorts'
  },
  {
    id: 'phonePorts',
    component:(
      <div>Example image of phone ports
      <img src={phoneimg} alt='phone ports' width='300px'/>
      </div>
    ),
    trigger:'7'
  },
  {
    id:'phoneCalls',
    component: (
      <div>
        <text> Occasionally, phones may need to be reset in order to restore functionality </text>
      </div>
    ),
    trigger:'phoneWaterfall'
  },
  {
    id: 'phoneWaterfall',
    component: (
      <div>Please try the steps outlined for reseting your phone at this link:
      <BotRedirect
        message="Reset Cisco IP Phone"
        url="https://www.cisco.com/c/en/us/support/docs/smb/collaboration-endpoints/cisco-ip-phone-7800-series/smb5233-reset-cisco-ip-phone-7800-series-and-cisco-ip-phone-8800-ser.html"
      />
      </div>
    ),
    trigger: '7'
  },
  {
    id:'speedDials',
    message:'To change speed dials/phone number, you will first need to submit a trouble ticket.',
    trigger: 'ticketOption2'
  },



  {
    id: "checkTicket",
    message: "Please enter your ticket number:",
    trigger: "getTicketNumber"
  },
  {
  id: "getTicketNumber",
  user: true,
  trigger: ({ value }) => {
    onTicketNumberChange(value);
    return "showTicketInfo";
  }
},
{
  id: "showTicketInfo",
  component: (props) => {
    // Remove props that shouldn't be passed to DOM elements
    const { previousStep, triggerNextStep, ...restProps } = props;
    return (
      <div {...restProps}>
        {ticket.length > 0 ? (
          <div>
            <h4>Ticket Information:</h4>
            <p><strong>Customer:</strong> {ticket[0].customer}</p>
            <p><strong>Ticket Number:</strong> {ticket[0].ticketnumber}</p>
            <p><strong>Type:</strong> {ticket[0].tickettype}</p>
            <p><strong>Workflow:</strong> {ticket[0].workflow}</p>
            <p><strong>Created At:</strong> {new Date(ticket[0].created_at).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(ticket[0].updated_at).toLocaleString()}</p>
          </div>
        ) : (
          <p>No ticket found for the entered number.</p>
        )}
      </div>
    );
  },
  trigger:'7'
},


  //////Computer Issues

  {
    id:'computerIssue',
    message:"What seems to be wrong with your computer?",
    trigger:'computerOptions'
  },
  {
    id:'computerOptions',
    options: [
      { value: 1, label: "No power", trigger: "computerPower" },
      { value: 2, label: "No connection", trigger: "computerConnect" },
      { value: 3, label: 'Error screen', trigger: 'callHub'},
      { value: 4, label: 'Something else', trigger: 'ticketOption1'},
    ]
  },
  {
    id:'computerPower',
    component: (
      <div>
        <ul>For computer power issues:
          <li>Ensure wall outlet is delivering power</li>
          <li>Verify computer functionality with seperate outlet</li>
          <li>Ensure power cord is fully seated</li>
        </ul>
        <text>If these steps do not remedy your issue, please contact the Comm Squadron HUB at 555-5551, come by during the walk-in hours of M-F 0900-1600 or submit a ticket below.</text>
      </div>
    ),
    trigger: 'ticketOption2'
  },
  {
    id: 'computerConnect',
    component: (
      <div>
        <ul>
          If you are experiencing network issues, please first follow these steps:
          <li>Verify ethernet cable is plugged into computer</li>
          <li>Verify ethernet cable from computer is plugged into proper phone port</li>
          <li>Verify ethernet cable from phone is plugged into wall port</li>
        </ul>
        <text>If these steps do not remedy your issue, please contact the Comm Squadron HUB at 555-5551, come by during the walk-in hours of M-F 0900-1600 or submit a ticket below.</text>
      </div>
    ),
    trigger:'ticketOption2'
  },
  {
    id:'callHub',
    message:"If you are experiencing unresolved issues, please contact the Comm Squadron HUB at 555-5551 or come by during walk-in hours of M-F 0900-1600",
    trigger:'7'
  },



//////Accounts Issues
  {
    id:'accountIssue',
    message:'Which type of account are you experiencing issues with?',
    trigger:'accountTypeOption'
  },
  {
    id:'accountTypeOption',
    options:[
      { value: 1, label: "NIPR Account", trigger: "niprAccount" },
      { value: 2, label: "Software Account", trigger: "ticketOption1" },
      { value: 3, label: 'Email Issue', trigger: 'emailIssue'},
      { value: 4, label: 'Something else', trigger: 'ticketOption1'}
    ]
  },
  {
    id:'niprAccount',
    component:(
      <div>
        <ul>For NIPR Account issues, please first:
          <li>Contact your squadron CSL to verify your account is enabled and you are gained to your unit</li>
          <li>Verify with the DEERs office that your CAC is up to date.</li>
        </ul>
        <text>If you are still experiencing issues, please contact the CFP at 555-555 or submit a ticket below</text>
      </div>
    ),
    trigger: 'ticketOption2'
  },
  {
    id:'emailIssue',
    message:
    'For email issues, contact the HUB at 555-5551 or come by during walk-in hours of M-F 0900-1600',
    trigger:'7'
  },

  /////Ticket Check
  // {
  //   id:'ticketCheck',
  //   message:'To check an existing ticket, please type in your entire ticket number or say "no number" if you do not have it',
  //   trigger: 'ticketCheckBool'
  // },
  // {
  //   id:'ticketCheckBool',
  //   user:true,
  //   trigger:'ticketCheckFunc'
  // },
  // {
  //   id:'ticketCheckFunc',
  //   message:'One moment while I pull that up...',
  //   trigger: ticketFetch({previousValue})
  // },

  /////End
  {
    id:'ticketOption1',
    message: "For any other issues, please contact the CFP at 555-5555 or submit a ticket here:",
    trigger: 'ticketOption2'
  },
  {
    id:'ticketOption2',
    options: [
      { value: 1, label: "Submit a ticket?", trigger: "ticketForm" },
      { value: 2, label: "No thanks", trigger: "7" },
    ]
  },
  {
    id:'ticketForm',
    message:'ticket huh',
    trigger: '7'
  },
  {
    id: "7",
    message: "Was this helpful?",
    trigger: "8"
  },
  {
    id:'8',
    options: [
      { value: 1, label: "Yes", trigger: "end" },
      { value: 2, label: "No", trigger: "2" }
    ]
  },
  {
    id:'end',
    message:'Glad I could be of assistance, Wingman!',
    end:true
  }

];

export default botSteps;