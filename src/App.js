import React from 'react';
import Character from './components/Character';
import { connect } from 'react-redux';

const App = ({ characters }) => (
  <div className="App">
    <h1>hola</h1>
    {characters.map(character =>
      <Character
        key={character.id}
        name={character.name}
        image={character.image}
      />
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

export default connect(mapStateToProps)(App);
