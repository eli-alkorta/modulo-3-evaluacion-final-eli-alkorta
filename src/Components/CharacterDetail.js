import React from "react";

const CharacterDetail = (props) => {
  return (
     <div className="detailWrapper">
    <div className="detailCard">
       <div className="photoContainer">
      <img
        className="photoDetail"
        src={props.character.image}
        alt={props.character.name}
      />
      </div>
      <div className="textDetail">       
        <span className="nameDetail">{props.character.name}</span>
        <span className="statusDetail">Status: {props.character.status}</span>
        <span className="speciesDetail">Species: {props.character.species}</span>
        <span className="originDetail">Origin: {props.character.origin.name}</span>
        <span className="episodeDetail">Episodes: {props.character.episode.length}</span>
      </div>
    </div>
    </div>
  );
};
export default CharacterDetail;
