import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/widgets/Options";
import CSharp from "./widgets/languages/CSharp";
import HtmlCss from "./widgets/languages/HtmlCss";
import Java from "./widgets/languages/Java";
import Javascript from "./widgets/languages/Javascript";
import Kotlin from "./widgets/languages/Kotlin";
import PHP from "./widgets/languages/PHP";
import Python from "./widgets/languages/Python";
import SQL from "./widgets/languages/SQL";
import Swift from "./widgets/languages/Swift";
import Typescript from "./widgets/languages/Typescript";

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
    {
      widgetName: "java",
      widgetFunc: (props) => <Java {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "swift",
      widgetFunc: (props) => <Swift {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "kotlin",
      widgetFunc: (props) => <Kotlin {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "csharp",
      widgetFunc: (props) => <CSharp {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "php",
      widgetFunc: (props) => <PHP {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "typescript",
      widgetFunc: (props) => <Typescript {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "html/css",
      widgetFunc: (props) => <HtmlCss {...props} />,
      mapStateToProps: ["messages"]
    },
  ],
}

export default config