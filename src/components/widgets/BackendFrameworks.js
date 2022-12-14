const BackendFrameworks = (props) => {
    const options = [
      {
        name: "Django",
        handler: props.actionProvider.handleDjango,
        id: 0
      },
      {
        name: "Express",
        handler: props.actionProvider.handleExpress,
        id: 1
      },
      {
        name: "Laravel",
        handler: props.actionProvider.handleLaravel,
        id: 2
      },
      {
        name: "Spring",
        handler: props.actionProvider.handleSpring,
        id: 3
      },
      {
        name: "Symfony",
        handler: props.actionProvider.handleSymfony,
        id: 4
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
  
  export default BackendFrameworks;