const Options = (props) => {
  const options = [
    {
      name: "No sé que estudiar",
      handler: props.actionProvider.handleLanguage,
      id: 0
    },
    {
      name: "Roadmaps",
      handler: props.actionProvider.handleRoadmaps,
      id: 1
    },
    {
      name: "HTML y CSS",
      handler: props.actionProvider.handleHtmlCss,
      id: 2
    },
    {
      name: "Python",
      handler: props.actionProvider.handlePython,
      id: 3
    },
    {
      name: "JavaScript",
      handler: props.actionProvider.handleJavascript,
      id: 4
    },
    {
      name: "SQL",
      handler: props.actionProvider.handleSQL,
      id: 5
    },
    {
      name: "Java",
      handler: props.actionProvider.handleJava,
      id: 6
    },
    {
      name: "Swift",
      handler: props.actionProvider.handleSwift,
      id: 7
    },
    {
      name: "Kotlin",
      handler: props.actionProvider.handleKotlin,
      id: 8
    },
    {
      name: "C#",
      handler: props.actionProvider.handleCSharp,
      id: 9
    },
    {
      name: "PHP",
      handler: props.actionProvider.handlePHP,
      id: 10
    },
    {
      name: "TypeScript",
      handler: props.actionProvider.handleTypescript,
      id: 11
    },
    {
      name: "Frameworks",
      handler: props.actionProvider.handleFrameworks,
      id: 12
    },
    {
      name: "Herramientas",
      handler: props.actionProvider.handleTools,
      id: 13
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
