import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAllPokemon,
  getAllTypes,
  filterPokemonByTypes,
  getSpeciesByName
} from '../../Actions';
import {
  ListPoke,
} from '../../Components';
import {withRouter} from "react-router-dom";
import * as $ from 'jquery'
import { Button, Row, Col } from 'react-bootstrap';

import './Home.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      resultPerRequest : 30,
      filter: true
    };
  }
  
  componentWillMount(){
    this.props.getAllPokemon(this.props.listDetailPokemon.length, this.state.resultPerRequest);
    this.props.getAllTypes();
  }

  componentDidMount(){
    $(window).scroll(function () {
      if(this.state.filter){
        if ($(window).scrollTop() === $(document).height() - $(window).height() && !this.props.listDetailPokemonLoading) {
          this.props.getAllPokemon(this.props.listDetailPokemon.length, this.state.resultPerRequest)
        }
      }else{
        return false;
      }
    }.bind(this));
  }

  getDetailSpecies = (pokemonName) => {
    this.props.getSpeciesByName(pokemonName);
  }

  typeColor = (data) => {
    if(data === 'normal'){
      return '#afafaf';
    }else if (data === 'bug'){
    return '#8B9814'
    }else if (data === 'dark'){
      return '#4B382A'
    }else if (data === 'dragon'){
      return '#7562D5'
    }else if (data ==='electric'){
      return '#F3CA58'
    }else if (data === 'fairy'){
      return '#D680D7'
    }else if (data === 'fighting'){
      return '#79351E'
    }else if (data === 'fire'){
      return '#D84708'
    }else if (data === 'flying'){
      return '#5A72CC'
    }else if (data === 'ghost'){
      return '#5E5EA4'
    }else if (data === 'grass'){
      return '#7CC245'
    }else if (data === 'ground'){
      return '#CEBE70'
    }else if (data === 'ice'){
      return '#79D8F4'
    }else if (data === 'poison'){
      return '#8F468F'
    }else if (data === 'psychic'){
      return '#ED4880'
    }else if (data === 'rock'){
      return '#9E863E'
    }else if (data === 'steel'){
      return '#C1C1CD'
    }else if (data === 'water'){
      return '#4A9CF0'
    }else if (data === 'shadow'){
      return '#17132a'
    }else if (data === 'unknown'){
      return '#6d6d6d'
    }
  }

  showOnlyThisType = (data) => {
    console.log(data)
    this.setState({
      filter: data === 'All' ? true : false
    }, this.props.filterPokemonByTypes(this.props.listDetailPokemon, data));
    
  }

  renderContent = () => {
    if(this.props.listFilteredDetailPokemon.length > 0){
      return this.props.listFilteredDetailPokemon.map((pokemon) => {
        return (
          <ListPoke {...pokemon} key={pokemon.name}/>
        );
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{borderBottomColor: '#f7f7f7', borderBottomWidth: 1, borderBottomStyle: 'solid'}}>
          <h1>Pokedex</h1>
        </div>
        <span className="pokemon-name" style={{marginTop: 15, marginBottom: 10}}>Type Pokemon </span>
        {this.props.listTypePokemonLoading ? <p>Loading Type . . . </p> : 
          <Row>
            <Col>
              <div className={{margin: 10}}>
                <Button size="sm" 
                onClick={() => this.showOnlyThisType('All')}
                style={{
                  marginLeft: 4, 
                  fontSize: 12, 
                  backgroundColor: '#eb3b5a',   
                  borderWidth: 0
                }}>
                  All
                </Button>
                {this.props.listTypePokemon.map(item => (
                  <Button size="sm" 
                  onClick={() => this.showOnlyThisType(item.name)}
                  style={{
                    marginLeft: 4, 
                    fontSize: 12, 
                    backgroundColor: this.typeColor(item.name),   
                    borderWidth: 0
                  }} key={item.url} >
                    {item.name}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        }
        <div className='container-content'>
        <Row>
          {this.renderContent()}
        </Row>
        {this.props.listDetailPokemonLoading ? <p>Loading Pokemon.... </p> : false}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  DetailSpecies        : state.DetailPokemon.dataSpecies,
  DetailSpeciesError   : state.DetailPokemon.errorDataSpecies,
  DetailSpeciesLoading : state.DetailPokemon.loadingDataSpecies,
  listDetailPokemon        : state.DetailPokemon.data,
  listFilteredDetailPokemon        : state.DetailPokemon.filteredPokemon,
  listDetailPokemonError   : state.DetailPokemon.error,
  listDetailPokemonLoading : state.DetailPokemon.loading,
  listTypePokemon         : state.AllTypePokemon.data,
  listTypePokemonError    : state.AllTypePokemon.error,
  listTypePokemonLoading  : state.AllTypePokemon.loading,

})

const mapDispatchToProps = {
  getAllPokemon,
  getAllTypes,
  filterPokemonByTypes,
  getSpeciesByName
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
