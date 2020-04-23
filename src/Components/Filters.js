import React from "react";

const Filters = (props) => {
  const updateInput = (event) => {
    props.handleInput(event.currentTarget.value);
  };

  return (
    <form className="filters">
      <input
        className="search"
        type="text"
        name="search"
        id="search"
        value={props.value}
        onChange={updateInput}
      />
    </form>
  );
};

export default Filters;
