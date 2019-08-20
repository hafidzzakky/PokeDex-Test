import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter, Link} from "react-router-dom"
import {
  typeColor
} from '../../Components'
import {
  getInfoPokemonByName
} from '../../Actions';
import { Button, Alert, ProgressBar, Row, Col } from 'react-bootstrap';
import './DetailPokemon.css';
class DetailPokemon extends Component {
  componentDidMount(){
      this.props.getInfoPokemonByName(this.props.match.params.pokemon);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.pokemon !== this.props.match.params.pokemon) {
        this.props.actions.getInfoPokemonByName(nextProps.match.params.pokemon);
    }
  }

  goBack = () => {
    this.props.history.goBack();
  }

  renderErrorContent = () => {
    if(this.props.pokemonInfoError){
      return(
        <Alert variant='danger'>
          {this.props.pokemonInfoError}
        </Alert>
      );
    }
  }


  render() {
    const { 
      pokemonSpeciesData, 
      pokemonSpeciesLoading, 
      pokemonInfoData,
      pokemonInfoLoading
    } = this.props;
    return (
      <div>
        {
          pokemonInfoLoading ? 
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <p>Loading Pokemon.... </p>
            </div> 
            :
            <div>
              <Row>
                <Col md={{span: 8, offset: 2}}  style={{backgroundColor: '#f7f7f7', padding: 10,paddingLeft: 15, paddingRight: 15, borderRadius: 5}}>
                  <Row>
                    <Col md="4">
                      <div className="photo-pokemon-detail-container">
                        <img className="pokemon-image" alt={pokemonInfoData.name} src={pokemonInfoData.sprites.front_default} />
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="pokemon-name-container">
                        <Row>
                          <Col sm={6} md={6} lg={6}>
                          <span>Pokemon</span>
                          <p className="pokemon-name-detail">{pokemonInfoData.name}</p>
                          </Col>
                          <Col sm={6} md={6} lg={6}>
                            <span>Type</span>
                            <Row>
                            {pokemonInfoData.types.map(att => (
                                <p className="atribute-pokemon-container" style={{backgroundColor: typeColor(att.type.name)}} key={att.type.url}>
                                {att.type.name}
                                </p>
                            ))}
                            </Row>
                          </Col>
                        </Row>
                        <div className="info-pokemon">
                            <div>
                                <span>Height</span>
                                <p className="pokemon-name-detail">{pokemonInfoData.height}"</p>
                                <span>Weight</span>
                                <p className="pokemon-name-detail">{pokemonInfoData.weight} lbs</p>
                            </div>
                            <div>
                                <span>Category</span>
                                {pokemonSpeciesLoading ? <p>Loading. . ..</p> : <p className="pokemon-name-detail">{pokemonSpeciesData.genera[2] ? pokemonSpeciesData.genera[2].genus : '-'}</p>}
                                <span>Base Experience</span>
                                <p className="pokemon-name-detail">{pokemonInfoData.base_experience}</p>
                            </div>
                        </div>
                      </div>
                    </Col>
                    <Col md="4">
                      <div style={{backgroundColor: '#fff', borderRadius: 8, margin: 4, padding: 10}}>
                        {pokemonInfoData.stats.map((stat, index) => (
                          <div key={index}>
                            <span className="stat-title-detail">{stat.stat.name.replace('-',' ')}</span>
                            <ProgressBar now={stat.base_stat} />
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <div style={{backgroundColor: '#fff', padding: 10, margin: 4, borderRadius: 8, width: '100%'}}>
                        <p>Description</p>
                        <span style={{fontSize: 12, textAlign: 'justify'}}>
                          {pokemonSpeciesLoading ? <p>Loading . . .</p> : Object.values(pokemonSpeciesData.flavor_text_entries).pop().flavor_text}
                        </span>
                      </div>
                      <Link to="/" className="pokemon-name-detail">
                        <Button style={{fontWeight: 500,width: '100%', marginTop: 10, marginLeft: 5}}>Explore More Pokemon</Button>
                      </Link>
                    </Col>
                    <Col md="8">
                      <div style={{backgroundColor: '#fff', padding: 10, margin: 4, marginLeft:0, borderRadius: 8, width: '100%'}}>
                        <span>Sprites</span>
                        <Row>
                          <Col>
                            <div>
                              <img className="pokemon-image" alt={pokemonInfoData.sprites.front_default} src={pokemonInfoData.sprites.front_default} />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="pokemon-image" alt={pokemonInfoData.sprites.back_default} src={pokemonInfoData.sprites.back_default} />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="pokemon-image" alt={pokemonInfoData.sprites.front_shiny} src={pokemonInfoData.sprites.front_shiny} />
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <img className="pokemon-image" alt={pokemonInfoData.sprites.back_shiny} src={pokemonInfoData.sprites.back_shiny} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
        }
        {this.renderErrorContent()}
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
