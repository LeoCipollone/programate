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
    if (message.toLowerCase().includes('java') ||
      message.toLowerCase().includes('android')
    ) {
      actions.handleJava();
    }
    if (message.toLowerCase().includes('swift') ||
      message.toLowerCase().includes('iphone') ||
      message.toLowerCase().includes('mac') ||
      message.toLowerCase().includes('ios')
    ) {
      actions.handleSwift();
    }
    if (message.toLowerCase().includes('kotlin') ||
      message.toLowerCase().includes('android')
    ) {
      actions.handleKotlin();
    }
    if (message.toLowerCase().includes('sharp') ||
      message.toLowerCase().includes('c#') ||
      message.toLowerCase().includes('juego') ||
      message.toLowerCase().includes('desktop') ||
      message.toLowerCase().includes('escritorio') ||
      message.toLowerCase().includes('windows')
    ) {
      actions.handleCSharp();
    }
    if (message.toLowerCase().includes('php') ||
      message.toLowerCase().includes('wordpress') ||
      message.toLowerCase().includes('cms') ||
      message.toLowerCase().includes('web')
    ) {
      actions.handlePHP();
    }
    if (message.toLowerCase().includes('typescript') ||
      message.toLowerCase().includes('type') ||
      message.toLowerCase().includes('tipado')
    ) {
      actions.handleTypescript();
    }
    if (message.toLowerCase().includes('html') ||
      message.toLowerCase().includes('css') ||
      message.toLowerCase().includes('esqueleto') ||
      message.toLowerCase().includes('estructura') ||
      message.toLowerCase().includes('diseño') ||
      message.toLowerCase().includes('estilo')
    ) {
      actions.handleHtmlCss();
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