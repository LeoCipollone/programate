const Frameworks = (props) => {
    const options = [
      {
        name: "Front End",
        handler: props.actionProvider.handleFrontendFrameworks,
        id: 0
      },
      {
        name: "Back End",
        handler: props.actionProvider.handleBackendFrameworks,
        id: 1
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
  
  export default Frameworks;