import React , { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import imgOne from '../../images/Canon/Canon EOS 1200D.jpg'
import { Button } from 'react-bootstrap';

import GetValue from '../../SellComponent/SellCamera/GetValue';
import { Link } from 'react-router-dom';

const EOS3000D = () => {


    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="container">
            <Navbar></Navbar>
            <br />

            <p className="container">
                <strong style={{ color: 'orange', marginTop: '20px', fontFamily: 'Montserrat', fontSize: '30px' }}>Sell Your <span style={{ color: 'black' }}> Camera</span>  </strong>
            </p>
            <div style={{ width: '70%', marginLeft: '15%' }} className="cart-item shadow text-center">
                <div className="row row-cols-3 row-cols-md-3 g-4 rounded-1container">
                    <Link className="Cn" to="/EOS3000D">
                        <div>

                            <img style={{ borderRadius: '5px', width: '70%', margin: '10%' }} src={imgOne} alt="" />

                        </div>

                    </Link>
                    <div class="card-body">
                        <p>Sell your,
                            <h3 style={{ color: 'green' }}>
                            EOS 3000D
                            </h3>
                        </p>
                        <br />
                        <p>
                            You can get Upto:
                            <h5 style={{ color: 'green' }}>9,500/- </h5>
                        </p>
                        <br />

                        <Button onClick={openModal} variant="warning">Get Exact Value</Button>{' '}

                        <GetValue modalIsOpen={modalIsOpen} price={"7,600/- INR"} closeModal={closeModal}></GetValue>
                        <br />
                        <p>
                            * Note: Estimated price is only mentioned for Camera body. To get additional price for any lenses along with body finish the quick process of evaluation.

                            This is an Estimated Price, Actual Price will be provided on basis of the details your provide going forward.
                        </p>
                    </div>
                </div>

            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@My Rate {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
            <br />

        </div>
    );
};
export default EOS3000D;