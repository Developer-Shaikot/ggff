import React from 'react';
import './CameraData.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CameraData = (props) => {
    const { name, price, imageURL, _id } = props.camera;
    return (
        <div class="container">

            <div >

                <div class="col">
                    <div className="buyCam shadow">
                        <img src={imageURL} class="cardimg" alt="" />
                        <div class="card-body">
                            <h5 className="pra" >{name}</h5>
                            <h9 className="pra" >₹ {price}</h9>
                            <br />
                            <br />
                            <Link className="click" to={`/buy/${_id}`}>
                                <Button variant="warning">Buy</Button>{' '} </Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraData;