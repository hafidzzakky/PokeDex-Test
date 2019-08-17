import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAllPokemon
} from '../../Actions';
import {
  ListPoke,
} from '../../Components';
import { Button } from 'react-bootstrap';

import './Home.css';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      resultPerRequest : 30
    };
  }
  
  componentDidMount(){
    console.log('this.props.match.params.id : ')
    this.props.getAllPokemon(this.state.index, this.state.resultPerRequest);
    this.setState({
      index: 30
    })
  }

  loadMore = () => {
    console.log(this.state)
    this.setState({
      index: this.state.index + this.state.resultPerRequest
    })
    console.log('jajal : ', this.state)
    this.props.getAllPokemon(this.state.index, this.state.resultPerRequest)
  }

  DetailPokemon = (data) => {
    console.log('iki data pokemone', data)
  }

  render() {
    return (
      <div className="container">
        <h1>Pokedex</h1>
        <hr/>
        <div className='container-content'>
          {this.props.listDetailPokemonLoading ? <p>Loading . . . </p> : 
            this.props.listDetailPokemon.map(item => (
              <ListPoke {...item} key={item.name}/>
            ))
          }
        </div>
        <Button variant="primary" onClick={() => this.loadMore()}>Primary</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listPokemon         : state.AllPokemon.data,
  listPokemonError    : state.AllPokemon.error,
  listPokemonLoading  : state.AllPokemon.loading,
  listDetailPokemon        : state.DetailPokemon.data,
  listDetailPokemonError   : state.DetailPokemon.error,
  listDetailPokemonLoading : state.DetailPokemon.loading
})

const mapDispatchToProps = {
  getAllPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
