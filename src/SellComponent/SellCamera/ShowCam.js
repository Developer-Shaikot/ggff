import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GetValue from './GetValue';
const ShowCam = (props) => {
    const { name, price, imageURL} = props.Show;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal() {
      setIsOpen(false);
    }
  

    return (
        <div class="container">

        <div >
        
            <div class="col">
                <div class="buyCam shadow">
                    <img src={imageURL} class="cardimg" alt="" />
                    <div class="card-body">
                        <h5 className="pra" >{name}</h5>
                        <h9 className="pra" >{price}$</h9>
                        <br />
                        <br />
                        
                            <Button  onClick={openModal}variant="warning">Get Exact Value</Button>{' '} 

                            <GetValue modalIsOpen={modalIsOpen} price={price} closeModal={closeModal}></GetValue>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    );
};

export default ShowCam;