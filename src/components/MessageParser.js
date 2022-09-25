import React from 'react';

const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    if (message.toLowerCase().includes('hola') ||
      message.toLowerCase().includes('buen') ||
      message.toLowerCase().includes('salud')
    ) {
      actions.handleHello();
    }

    if (message.toLowerCase().includes('empiezo') ||
      message.toLowerCase().includes('empezar') ||
      message.toLowerCase().includes('estudi') ||
      message.toLowerCase().includes('aprend')
    ) {
      actions.handleLanguage();
    }

    if (message.toLowerCase().includes('python') ||
      message.toLowerCase().includes('bot') ||
      message.toLowerCase().includes('ai') ||
      message.toLowerCase().includes('automation') ||
      message.toLowerCase().includes('scripting') ||
      message.toLowerCase().includes('analisis') ||
      message.toLowerCase().includes('matemáticas') ||
      message.toLowerCase().includes('matematicas') ||
      message.toLowerCase().includes('cálculo') ||
      message.toLowerCase().includes('calculo')
    ) {
      actions.handlePython();
    }

    if (message.toLowerCase().includes('javascript') ||
      message.toLowerCase().includes('web') ||
      message.toLowerCase().includes('landing')
    ) {
      actions.handleJavascript();
    }

    if (message.toLowerCase().includes('sql') ||
      message.toLowerCase().includes('base') ||
      message.toLowerCase().includes('data') ||
      message.toLowerCase().includes('datos')
    ) {
      actions.handleSQL();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;