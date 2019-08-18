import React from 'react';
import './ListPoke.css';
import {
  ModalDetail
} from '../Components';
import {Link} from 'react-router-dom';
import { Col } from 'react-bootstrap';

const typeColor = (data) => {
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

export const ListPoke = props => {
  return(
      <Col xs={12} sm={12} md={4} lg={4}>
        <div className="container-item">
          <div className="photo-pokemon-container">
            <img className="pokemon-image" alt={props.name} src={props.sprites.front_default} />
          </div>
          <div>
            <Link to={`/pokemon/${props.name}/`} className="pokemon-name">
              #{props.id} {props.name}
            </Link>
            <br/>
            {props.types.map(att => (
              <span className="atribute-pokemon-container" style={{backgroundColor: typeColor(att.type.name)}} key={att.type.url}>
                {att.type.name}
              </span>
            ))}
            <br/>
            <ModalDetail {...props} />
          </div>
        </div>
      </Col>
  );
}

export default ListPoke
