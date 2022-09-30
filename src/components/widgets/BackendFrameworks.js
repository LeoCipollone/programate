const BackendFrameworks = (props) => {
    const options = [
      {
        name: "Django",
        handler: props.actionProvider.handleDjango,
        id: 0
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