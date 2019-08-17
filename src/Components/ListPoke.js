import React, { Component } from 'react';
import './ListPoke.css';
import {
  ModalDetail
} from '../Components'

export const ListPoke = props => {
  console.log('list poke : ', props)
  return(
    <div className="container-item">
      <div className="photo-pokemon-container">
        <img className="pokemon-image" alt={props.name} src={props.sprites.front_default} />
      </div>
      <div>
        <span className="pokemon-name">#{props.id} {props.name}</span>
        <br/>
        {props.types.map(att => (
          <span className="atribute-pokemon-container" key={att.type.url}>
            {att.type.name}
          </span>
        ))}
        <br/>
        <ModalDetail {...props} />
      </div>
    </div>
  );
}

export default ListPoke
