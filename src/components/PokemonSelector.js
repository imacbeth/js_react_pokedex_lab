import React from 'react';

const PokemonSelector = (props) => {
  function handleChange(evt) {
    props.onPokemonSelected(evt.target.value);

  }

  const options = props.pokemon.map((pokemon, index) => {
    return <option value={index} key={index} >{pokemon.name}</option>
  });

    return(
      <select className = "pokemon-selector">
        <option disabled value="selected">Select a Pokemon…</option>
        {options}
      </select>
    )
}

export default PokemonSelector;
