import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/widgets/Options";
import CSharp from "./widgets/languages/CSharp";
import Frameworks from "./widgets/Frameworks";
import HtmlCss from "./widgets/languages/HtmlCss";
import Java from "./widgets/languages/Java";
import Javascript from "./widgets/languages/Javascript";
import Kotlin from "./widgets/languages/Kotlin";
import PHP from "./widgets/languages/PHP";
import Python from "./widgets/languages/Python";
import Roadmaps from "./widgets/languages/Roadmaps";
import SQL from "./widgets/languages/SQL";
import Swift from "./widgets/languages/Swift";
import Typescript from "./widgets/languages/Typescript";
import FrontendFrameworks from "./widgets/FrontendFrameworks";
import React from "./widgets/frameworks/frontend/React";
import Angular from "./widgets/frameworks/frontend/Angular";
import Vue from "./widgets/frameworks/frontend/Vue";
import Svelte from "./widgets/frameworks/frontend/Svelte";
import BackendFrameworks from "./widgets/BackendFrameworks";
import Django from "./widgets/frameworks/backend/Django";

const botName = 'PrograMate';

const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#e052a0',
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
      widgetName: "roadmaps",
      widgetFunc: (props) => <Roadmaps {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "frameworks",
      widgetFunc: (props) => <Frameworks {...props} />,
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
    {
      widgetName: "frontend-frameworks",
      widgetFunc: (props) => <FrontendFrameworks {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "react",
      widgetFunc: (props) => <React {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "angular",
      widgetFunc: (props) => <Angular {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "vue",
      widgetFunc: (props) => <Vue {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "svelte",
      widgetFunc: (props) => <Svelte {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "backend-frameworks",
      widgetFunc: (props) => <BackendFrameworks {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "django",
      widgetFunc: (props) => <Django {...props} />,
      mapStateToProps: ["messages"]
    },
  ],
}

export default config