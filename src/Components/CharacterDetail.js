import React from "react";
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
     <div className={`detailWrapper ${props.dayMode === true ? 'sunshine' : ''}`}>
        <Link to={"/"}>
       <p className="return">Volver</p>
       </Link>
    <div className="detailCard">
       <div className="photoContainer">
      <img
        className="photoDetail"
        src={props.character.image}
        alt={props.character.name}
      />
      </div>
      
      <div className="textDetail">   
      <div className={`iconContainer ${props.dayMode === true ? 'sunshine' : ''}`}>
      <i className={`fas fa-skull-crossbones ${props.character.status === 'Dead' ? "active" : "hidden"}`} id="icon"></i> 
      <i className={`far fa-user ${props.character.species === 'Human' ? "active" : "hidden"}`} id="icon"></i>   
      <i className={`fab fa-reddit-alien ${props.character.species === 'Alien' ? "active" : "hidden"}`} id="icon"></i>   
      </div>
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
