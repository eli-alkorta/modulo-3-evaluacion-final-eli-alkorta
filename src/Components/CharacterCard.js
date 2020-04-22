import React from "react";

const CharacterCard = (props) => {
  return (
    <div className="cardContainer">
      <img className="photo" src={props.photo} alt={props.name} />
      <div className="textContainer">
        <span className="name">{props.name}</span>
        <span className="species">{props.species}</span>
      </div>
    </div>
  );
};
export default CharacterCard;
