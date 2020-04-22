import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  return (
    <ul className="characterList">
      {props.dataList.map((characterObj) => (
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
