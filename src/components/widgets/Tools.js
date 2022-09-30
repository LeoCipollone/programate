const Tools = (props) => {
    const options = [
      {
        name: "Git",
        handler: props.actionProvider.handleGit,
        id: 0
      },
      {
        name: "Docker",
        handler: props.actionProvider.handleDocker,
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
  
  export default Tools;