import React from 'react';

class Pokedex {
  constructor() {

  }

  render() {
    return (
      <div>
        <h1>Choose your Pokemon!</h1>
        <PokemonSelector/>
        <h3>I choose you ... </h3>
        <PokemonDetails/>
      </div>
    );

  }
}

export default Pokedex;
