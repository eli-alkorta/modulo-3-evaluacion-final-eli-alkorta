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
      input: "",
      gender: "",
      species: ""
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
  }

  componentDidUpdate(){
    localStorage.setItem('data', JSON.stringify(this.state.input));
  }

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('data'));
    if(localData !== ''){
      this.setState({
        input: localData})}
    fetchCharacters()
    .then((data) => {
      this.setState({
        data: data.results,
      });
    });
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
    this.setState({
      input: inputValue,
    });
    }
  handleGender(inputValue) {
    this.setState({
      gender: inputValue,
    })
  }
  handleSpecies(inputValue) {
    this.setState({
      species: inputValue,
    })
  }
  

  render() {
    const { data, input, gender, species } = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters handleInput={this.handleInput} handleGender={this.handleGender} handleSpecies={this.handleSpecies} input={input} gender={gender} species={species}/>
            <CharacterList dataList={data} input={input} gender={gender} species={species}/>
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
