import React from "react";
import "../Stylesheets/App.scss";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import fetchCharacters from "../services/fetchCharacters";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      characterInfo:{
        input: "",
        gender: "",
        species: ""
      }
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.characterInfo));
  }

  componentDidMount() {
    fetchCharacters().then((data) => {
      this.setState({
        data: data.results,
      });
    });
    const localData = JSON.parse(localStorage.getItem("data"));
    if (localData !== null) {
      this.setState(prevState => {
        return {
          ...prevState,
          characterInfo: {
            input: localData.input,
            gender: localData.gender,
            species: localData.species,
          }
        }
      });
    }
  }

  renderCharacterDetail(props) {
    const urlId = props.match.params.id;
    const characters = this.state.data;
    for (let characterObj of characters) {
      if (characterObj.id === parseInt(urlId)) {
        return <CharacterDetail character={characterObj} />;
      }
    }
  }
  handleInput(inputValue) {
    this.setState((prevState) => {
      return (prevState.characterInfo.input = inputValue);
    })};
  
  handleGender(inputValue) {
    this.setState((prevState) =>{
      return(prevState.characterInfo.gender = inputValue);
    });
  }
  handleSpecies(inputValue) {
    this.setState((prevState) =>{
      return(prevState.characterInfo.species= inputValue)
    });
  }

  render() {
    const { input, gender, species } = this.state.characterInfo;
    const { data } = this.state;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters
              handleInput={this.handleInput}
              handleGender={this.handleGender}
              handleSpecies={this.handleSpecies}
              input={input}
              gender={gender}
              species={species}
            />
            <CharacterList
              dataList={data}
              input={input}
              gender={gender}
              species={species}
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
