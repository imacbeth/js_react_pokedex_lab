import React from 'react';
import PokemonSelector from '../components/PokemonSelector';

class Pokedex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemon: null
    }
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this)
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((pokemon) => {
      console.log(pokemon);
      this.setState({pokemon: pokemon.results})
    })
  }

  handlePokemonSelected(index){
    const selectedPokemon = this.state.pokemon[index];
    this.setState({selectedPokemon: selectedPokemon});
  }

  render() {
    return (
      <div>
        <h1>Choose your Pokemon!</h1>
        <PokemonSelector
          pokemon = {this.state.pokemon}
          onPokemonSelected={this.handlePokemonSelected}
        />
        <h3>I choose you ... </h3>
        {/* <PokemonDetails/> */}
      </div>
    );

  }
}

export default Pokedex;
