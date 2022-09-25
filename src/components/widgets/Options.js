const Options = (props) => {
  const options = [
    {
        name: "No sé que estudiar",
        handler: props.actionProvider.handleLanguage,
        id: 0
    },
    {
      name: "Python",
      handler: props.actionProvider.handlePython,
      id: 1
    },
    {
      name: "JavaScript",
      handler: props.actionProvider.handleJavascript,
      id: 2
    },
    {
      name: "SQL",
      handler: props.actionProvider.handleSQL,
      id: 3
    },
    {
      name: "Java",
      handler: props.actionProvider.handleJava,
      id: 4
    },
    {
      name: "Swift",
      handler: props.actionProvider.handleSwift,
      id: 5
    },
    {
      name: "Kotlin",
      handler: props.actionProvider.handleKotlin,
      id: 6
    },
    {
      name: "C#",
      handler: props.actionProvider.handleCSharp,
      id: 7
    },
    {
      name: "PHP",
      handler: props.actionProvider.handlePHP,
      id: 8
    },
    {
      name: "TypeScript",
      handler: props.actionProvider.handleTypescript,
      id: 9
    },
    {
      name: "HTML/CSS",
      handler: props.actionProvider.handleHtmlCss,
      id: 10
    },
  ];
  
  return (
    <div className="options">
      <h1 className="options-header">Opciones</h1>
      <div className="options-container">
        {options.map((option) => {
          return (
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default Options;
