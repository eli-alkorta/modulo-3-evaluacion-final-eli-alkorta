import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const { dayMode } = props;
  const { image, name, status, species, origin, episode } = props.character;

  return (
    <div className={`detailWrapper ${dayMode === true ? "sunshine" : ""}`}>
      <Link to={"/"}>
        <p className="return">Volver</p>
      </Link>
      <div className="detailCard">
        <div className="photoContainer">
          <img className="photoDetail" src={image} alt={name} />
        </div>

        <div className="textDetail">
          <div
            className={`iconContainer ${dayMode === true ? "sunshine" : ""}`}
          >
            <i
              className={`fas fa-skull-crossbones ${
                status === "Dead" ? "active" : "hidden"
              }`}
              id="icon"
            ></i>
            <i
              className={`far fa-user ${
                species === "Human" ? "active" : "hidden"
              }`}
              id="icon"
            ></i>
            <i
              className={`fab fa-reddit-alien ${
                species === "Alien" ? "active" : "hidden"
              }`}
              id="icon"
            ></i>
          </div>
          <span className="nameDetail">{name}</span>
          <span className="statusDetail">Status: {status}</span>
          <span className="speciesDetail">Species: {species}</span>
          <span className="originDetail">Origin: {origin.name}</span>
          <span className="episodeDetail">Episodes: {episode.length}</span>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
