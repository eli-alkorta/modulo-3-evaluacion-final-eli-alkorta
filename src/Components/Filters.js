import React from "react";

const Filters = (props) => {
  
  const updateInput = (event) => {
    // console.log(event.cancelable); No le veo sentido a un preventDefault porque 
    //este evento no es cancelable como muestra el console.log y no hay ningún 
    // evento submit ni click que se pueda prevenir//
    props.handleInput(event.currentTarget.value);
  };

  return (
    <form className="filters">
      <input
        className="search"
        type="text"
        name="search"
        id="search"
        value={props.input}
        onChange={updateInput}
      />
    </form>
  );
};

export default Filters;
