import React from 'react'

class PokemonSelector extends React.Component {


  render() {
    return(
      <select className = "pokemon-selector">
        <option disabled value="selected">Select a Pokemon…</option>
        {props}
      </select>
    )
  }
}

export default PokemonSelector
