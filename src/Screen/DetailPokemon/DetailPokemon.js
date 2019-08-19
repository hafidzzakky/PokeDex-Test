import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom"
import {
  getInfoPokemonByName
} from '../../Actions';

class DetailPokemon extends Component {
  componentDidMount(){
      console.log(this.props)
      this.props.getInfoPokemonByName(this.props.match.params.pokemon);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.pokemon !== this.props.match.params.pokemon) {
        this.props.actions.getInfoPokemonByName(nextProps.match.params.pokemon);
    }
  }

  render() {
    const { 
      pokemonSpeciesData, 
      pokemonSpeciesLoading, 
      pokemonSpeciesError,
      pokemonInfoData,
      pokemonInfoError,
      pokemonInfoLoading
    } = this.props;
    return (
      <div>
        {
          pokemonSpeciesLoading ? 
            <p>Loading. . .</p>
            :
            console.log(pokemonInfoData)
            // console.log(pokemonSpeciesData.genera[2] ? pokemonSpeciesData.genera[2].genus : '-')
            // console.log(Object.values(pokemonSpeciesData.flavor_text_entries).pop().flavor_text)
            // <p>{pokemonSpeciesData}</p>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pokemonSpeciesData   : state.DetailPokemon.dataSpecies.species,
  pokemonSpeciesError   : state.DetailPokemon.dataSpecies.error,
  pokemonSpeciesLoading : state.DetailPokemon.dataSpecies.loading,
  pokemonInfoData   : state.DetailPokemon.dataInfoPokemon.pokemon,
  pokemonInfoError   : state.DetailPokemon.dataInfoPokemon.error,
  pokemonInfoLoading : state.DetailPokemon.dataInfoPokemon.loading,

})

const mapDispatchToProps = {
  getInfoPokemonByName
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailPokemon))
