import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  const { dayMode, input, gender, species } = props;

  return (
    <ul className={`characterList ${dayMode === true ? "sunshine" : ""}`}>
      {props.dataList
        .filter(
          (characterObj) =>
            input === "" ||
            characterObj.name.toLowerCase().includes(input.toLowerCase())
        )
        .filter(
          (characterObj) => gender === "" || characterObj.gender === gender
        )
        .filter(
          (characterObj) => species === "" || characterObj.species === species
        )
        .map((characterObj) => (
          <li key={characterObj.id} className="characterItem">
            <Link to={`/character/${characterObj.id}`}>
              <CharacterCard
                photo={characterObj.image}
                name={characterObj.name}
                species={characterObj.species}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default CharacterList;
