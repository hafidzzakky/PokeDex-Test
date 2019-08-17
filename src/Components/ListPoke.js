import React, { Component } from 'react';
import {
  HeaderList
} from '../Components';
import './ListPoke.css'
export class ListPoke extends Component {
  render() {
    console.log('data : ', this.props)
    return (
      <div className="container-item">
        <div className="photo-pokemon-container">
          <img className="pokemon-image" src={this.props.sprites.front_default} />
        </div>
        <div>
          <span className="pokemon-name">#{this.props.id} {this.props.name}</span>
          <br/>
          {console.log(this.props.types)}
          {this.props.types.map(att => (
            <span className="atribute-pokemon-container" key={att.type.url}>
              {att.type.name}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default ListPoke
