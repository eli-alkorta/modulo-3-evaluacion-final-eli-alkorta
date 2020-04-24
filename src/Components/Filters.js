import React from "react";
import PropTypes from "prop-types";

const Filters = (props) => {
  const updateInput = (event) => {
    // console.log(event.cancelable); No le veo sentido a un preventDefault porque
    //este evento no es cancelable como muestra el console.log y no hay ningún
    // evento submit ni click que se pueda prevenir//
    props.handleInput(event.currentTarget.value);
    
  };
  const updateGender = (event) => {
    props.handleGender(event.currentTarget.value);
  }
  const updateSpecies = (event) => {
    props.handleSpecies(event.currentTarget.value);
  }

  return (
    <form className={`filters ${props.dayMode === true ? 'sunshine' : ''}`}>
      <div className="genderContainer">
        <label htmlFor="Male">Male</label>
        <input
          onChange={updateGender}
          type="checkbox"
          id="Male"
          name="gender"
          value="Male"
          checked={props.gender === "Male" ? true : false}
        />
        <label htmlFor="Female">Female</label>
        <input
          onChange={updateGender}
          type="checkbox"
          id="Female"
          name="gender"
          value="Female"
          checked={props.gender === "Female" ? true : false}
        />
      </div>
      <input
        className={`search ${props.dayMode === true ? 'sunshine' : ''}`}
        type="text"
        name="search"
        id="search"
        value={props.input}
        onChange={updateInput}
      />
       <div className="speciesContainer">
        <label htmlFor="Human">Human</label>
        <input
          onChange={updateSpecies}
          type="checkbox"
          id="Human"
          name="species"
          value="Human"
          checked={props.species === "Human" ? true : false}
        />
        <label htmlFor="Alien">Alien</label>
        <input
          onChange={updateSpecies}
          type="checkbox"
          id="Alien"
          name="species"
          value="Alien"
          checked={props.species === "Alien" ? true : false}
        />
      </div>
    </form>
  );
};

Filters.propTypes = {
  input: PropTypes.string,
};

export default Filters;
