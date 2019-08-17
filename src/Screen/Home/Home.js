import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAllPokemon
} from '../../Actions'
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
    this.props.getAllPokemon(this.state.index, this.state.resultPerRequest);
  }

  loadMore = () => {
    console.log(this.state)
    this.setState({
      index: this.state.index + this.state.resultPerRequest
    }, this.props.getAllPokemon(this.state.index, this.state.resultPerRequest))
  }

  render() {
    return (
      <div className="container">
        <h1>Pokedex</h1>
        <hr/>
        {this.props.listPokemonLoading ? <p>Loading . . . </p> : 
          <div className='container-content'>
            {this.props.listPokemon.map(item => (
              <div className="container-item" key={item.name}>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        }
        <button onClick={() => this.loadMore()}>
          Load More
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listPokemon         : state.AllPokemon.data,
  listPokemonError    : state.AllPokemon.error,
  listPokemonLoading  : state.AllPokemon.loading
})

const mapDispatchToProps = {
  getAllPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
