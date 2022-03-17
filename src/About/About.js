import React from 'react';
import cardOne from '../GadgefyDone/Icons/Layer_x0020_1.png';

import cardThree from '../GadgefyDone/Icons/Group 32.png';
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {

    return (
        <div className="AboutCam shadow">
            <h4 className="text-center mt-3 mb-5">What are you looking for?</h4>
            <div className="row row-cols-1 row-cols-md-2 g-4 rounded-3">


                <div>
                    <img style={{ borderRadius: '5px', height: '50px', marginLeft: '7px' }} src={cardOne} alt="" />
                    <div class="card-body">

                        <p class="card-text">
                            Camera
                        </p>
                        <br />

                    </div>
                    <div className='sellBuyBtn'>
                        <Link to="/sellcamera">
                        <button type="button" className="btn1"><p className="txt">Sell</p></button></Link>
                        <Link to="/buyCamera">
                        <button type="button" className="btn2"><p className="txt">Buy</p></button></Link>
                        
                    </div>
                </div>

                

                <div className="sector">
                    <img style={{ borderRadius: '5px', height: '50px', marginLeft: '7px' }} src={cardThree} alt="" />
                    <div class="card-body">

                        <p class="card-text">
                            Coming Soon
                        </p>
                        <br />

                    </div>
                    <div className='sellBuyBtn'>
                   
                    </div>
                    
                </div>

            </div>

        </div>


    );
}