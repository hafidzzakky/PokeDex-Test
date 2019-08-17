import React, { useState } from 'react'
import { Button, Modal, Table} from 'react-bootstrap';
import './ListPoke.css';
import './ModalDetail.css';

const ModalDetail = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button size="sm" style={{marginLeft: 4, fontSize: 12}} variant="primary" onClick={handleShow}>
          Detail
        </Button>
        {console.log('detail modal : ', props)}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detail Pokemon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='body-detail-container'>
                <div className="photo-pokemon-container">
                    <img className="pokemon-image" alt={props.name} src={props.sprites.front_default} />
                </div>
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
                    <div className="ability-container">
                        <span>Ability</span>
                        <br/>
                        {props.abilities.map(abi => (
                            <span className="atribute-pokemon-container" key={abi.ability.slot}>
                                {abi.ability.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="container-absolute-pokemon-types">
                    {props.types.map(att => (
                        <span className="atribute-pokemon-container" key={att.type.url}>
                        {att.type.name}
                        </span>
                    ))}
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
