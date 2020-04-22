import React from 'react';
import '../Stylesheets/App.scss';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
// import Filters from './Filters';
import fetchCharacters from '../services/fetchCharacters';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  componentDidMount() {
    fetchCharacters()
    .then(data => {
      this.setState({
        data: data.results
    })
  })
}
renderCharacterDetail(props) {
  console.log(props)
const urlId = props.match.params.id;
const characters = this.state.data;
for(let characterObj of characters){
  if(characterObj.id === parseInt(urlId)){
    return <CharacterDetail character={characterObj}/>
  }
}

}

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
           {/* <Filters /> */}
        <CharacterList dataList={data}/> 
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
