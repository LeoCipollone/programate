const FrontendFrameworks = (props) => {
    const options = [
      {
        name: "ReactJS",
        handler: props.actionProvider.handleReact,
        id: 0
      },
      {
        name: "Angular",
        handler: props.actionProvider.handleAngular,
        id: 1
      },
      {
        name: "VueJS",
        handler: props.actionProvider.handleVue,
        id: 2
      },
      {
        name: "Svelte",
        handler: props.actionProvider.handleSvelte,
        id: 3
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
  
  export default FrontendFrameworks;