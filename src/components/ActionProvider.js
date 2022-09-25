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
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
