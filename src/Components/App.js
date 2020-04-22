import React from 'react';
import '../Stylesheets/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import fetchCharacters from '../services/fetchCharacters';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Filters />
          <CharacterList />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
