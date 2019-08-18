import React, { useState } from 'react'
import { Button, Modal, ProgressBar, Row, Col } from 'react-bootstrap';
import './ListPoke.css';
import './ModalDetail.css';

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

const ModalDetail = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props)
    return (
      <>
        <Button size="sm" style={{marginLeft: 4, fontSize: 12}} variant="primary" onClick={handleShow}>
          Detail
        </Button>
        <Modal 
          show={show} 
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Detail Pokemon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row style={{padding: 10}}>
              <Col md="4">
                <div className="photo-pokemon-detail-container">
                  <img className="pokemon-image" alt={props.name} src={props.sprites.front_default} />
                </div>
              </Col>
              <Col md="4">
                <div className="pokemon-name-container">
                  <span>Pokemon Name</span>
                  <p className="pokemon-name">{props.name}</p>
                  <div className="info-pokemon">
                      <div>
                          <span>Height</span>
                          <p className="pokemon-name">{props.height}"</p>
                          <span>Weight</span>
                          <p className="pokemon-name">{props.weight} lbs</p>
                      </div>
                      <div>
                          <span>Base Experience</span>
                          <p className="pokemon-name">{props.base_experience}</p>
                      </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="container-absolute-pokemon-types">
                  {props.types.map(att => (
                      <span className="atribute-pokemon-container" style={{backgroundColor: typeColor(att.type.name)}} key={att.type.url}>
                      {att.type.name}
                      </span>
                  ))}
                </div>
                <div className="ability-container">
                  <span>Ability</span>
                  <br/>
                  {props.abilities.map((abi, index) => (
                      <span className="atribute-pokemon-container" key={index}>
                          {abi.ability.name}
                      </span>
                  ))}
                </div>
              </Col>
            </Row>
            <div>
              <div className="stat-container">
                {props.stats.map((stat, index) => (
                  <div key={index}>
                    <span className="stat-title">{stat.stat.name.replace('-',' ')}</span>
                    <ProgressBar now={stat.base_stat} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="stat-container">
                <Row>
                  <Col>
                    <div>
                      <img className="pokemon-image" alt={props.sprites.front_default} src={props.sprites.front_default} />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <img className="pokemon-image" alt={props.sprites.back_default} src={props.sprites.back_default} />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <img className="pokemon-image" alt={props.sprites.front_shiny} src={props.sprites.front_shiny} />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <img className="pokemon-image" alt={props.sprites.back_shiny} src={props.sprites.back_shiny} />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="button-footer" onClick={handleClose}>
                Close
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export { ModalDetail };
