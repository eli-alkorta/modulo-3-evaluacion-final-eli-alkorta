import React from "react";
import "../Stylesheets/App.scss";
import Header from './Header';
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from './Filters';
import fetchCharacters from "../services/fetchCharacters";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input: ''
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    fetchCharacters().then((data) => {
      this.setState({
        data: data.results,
      });
    });
  }
  renderCharacterDetail(props) {
    console.log(props);
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
      input: inputValue
    })
  }

  render() {
    const { data, input } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filters handleInput={this.handleInput}/>
            <CharacterList dataList={data} input={input}/>
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
