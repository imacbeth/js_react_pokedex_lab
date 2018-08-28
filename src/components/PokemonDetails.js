import React from 'react';

const PokemonDetails = (props) => {
  console.log(props);
  if (!props.selectedPokemonDetails) return null;

  return (
    <div className="pokemon-details">
      <h1>{capitalizeFirstLetter(props.selectedPokemonDetails.name)}</h1>
      <img src={props.selectedPokemonDetails.sprites.front_default} alt="{props.selectedPokemonDetails.name}" ></img>
      <h3>height: {props.selectedPokemonDetails.height} feet</h3>
      <h3>weight: {props.selectedPokemonDetails.weight} lbs</h3>

     </div>
  );
}



function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export default PokemonDetails;
