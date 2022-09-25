import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/widgets/Options";
import Javascript from "./widgets/languages/Javascript";
import Python from "./widgets/languages/Python";
import SQL from "./widgets/languages/SQL";

const botName = 'PrograMate';

const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#e6375a',
    },
  },
  initialMessages: [
    createChatBotMessage(`Bienvenido a ${botName}!`),
    createChatBotMessage(
      "Aquí hay una descripción general en lo que te puedo ayudar.",
      {
        withAvatar: true,
        delay: 700,
        widget: 'options',
      }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "python",
      widgetFunc: (props) => <Python {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "javascript",
      widgetFunc: (props) => <Javascript {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "sql",
      widgetFunc: (props) => <SQL {...props} />,
      mapStateToProps: ["messages"]
    },
  ],
}

export default config