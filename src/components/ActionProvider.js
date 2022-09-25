import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children, state }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hola. ¿Cómo puedo ayudarte?");
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  
  const handleLanguage = () => {
    const botMessage = createChatBotMessage("¿Qué te gustaría crear?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePython = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Python",
      {
        widget: "python",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleJavascript = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre JavaScript",
      {
        widget: "javascript",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSQL = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre SQL",
      {
        widget: "sql",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleJava = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Java",
      {
        widget: "java",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSwift = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Swift",
      {
        widget: "swift",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleKotlin = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Kotlin",
      {
        widget: "kotlin",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCSharp = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre C#",
      {
        widget: "csharp",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlePHP = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre PHP",
      {
        widget: "php",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTypescript = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre TypeScript",
      {
        widget: "typescript",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHtmlCss = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre HTML y CSS",
      {
        widget: "html/css",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleLanguage,
            handlePython,
            handleJavascript,
            handleSQL,
            handleJava,
            handleSwift,
            handleKotlin,
            handleCSharp,
            handlePHP,
            handleTypescript,
            handleHtmlCss,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
