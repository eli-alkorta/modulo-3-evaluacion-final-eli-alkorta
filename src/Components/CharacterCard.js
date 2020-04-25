import React from "react";

const CharacterCard = (props) => {
  const { photo, name, species } = props;

  return (
    <div className="cardContainer">
      <img className="photo" src={photo} alt={name} />
      <div className="textContainer">
        <span className="name">{name}</span>
        <span className="species">{species}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
