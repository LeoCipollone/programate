import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
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

  const handleRoadmaps = () => {
    const botMessage = createChatBotMessage(
      "Roadmaps",
      {
        widget: "roadmaps",
        withAvatar: true
      }
    );
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
        widget: "html-css",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleFrameworks = () => {
    const botMessage = createChatBotMessage(
      "Frameworks",
      {
        widget: "frameworks",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFrontendFrameworks = () => {
    const botMessage = createChatBotMessage(
      "Front End Frameworks",
      {
        widget: "frontend-frameworks",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleReact = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre React JS",
      {
        widget: "react",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleVue = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Vue JS",
      {
        widget: "vue",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAngular = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Angular",
      {
        widget: "angular",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSvelte = () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Svelte",
      {
        widget: "svelte",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBackendFrameworks = () => {
    const botMessage = createChatBotMessage(
      "Back End Frameworks",
      {
        widget: "backend-frameworks",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDjango= () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Django",
      {
        widget: "django",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleExpress= () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Express",
      {
        widget: "express",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleLaravel= () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Laravel",
      {
        widget: "laravel",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSpring= () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Spring",
      {
        widget: "spring",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSymfony= () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Symfony",
      {
        widget: "symfony",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTools= () => {
    const botMessage = createChatBotMessage(
      "Herramientas",
      {
        widget: "tools",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleGit= () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Git",
      {
        widget: "git",
        withAvatar: true
      }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDocker= () => {
    const botMessage = createChatBotMessage(
      "Aqui puedes aprender más sobre Docker",
      {
        widget: "docker",
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
            handleRoadmaps,
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
            handleFrameworks,
            handleFrontendFrameworks,
            handleReact,
            handleAngular,
            handleVue,
            handleSvelte,
            handleBackendFrameworks,
            handleDjango,
            handleExpress,
            handleLaravel,
            handleSpring,
            handleSymfony,
            handleTools,
            handleGit,
            handleDocker,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
