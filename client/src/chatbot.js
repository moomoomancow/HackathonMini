import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import botSteps from './botsteps'


const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "blue",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "lightblue",
  botFontColor: "black",
  botFontSize: '15px',
  userBubbleColor: "#FFBFB5",
  userFontColor: "#black",
  userFontSize: '15px'

};
const ChatBotHelper = () => {

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot headerTitle='Cypher' steps={botSteps} floating={true} />
      </ThemeProvider>
    </>
  );
};
export default ChatBotHelper;