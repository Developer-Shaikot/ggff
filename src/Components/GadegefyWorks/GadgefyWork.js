import React from 'react';
import cardOne from '../../GadgefyDone/Icons/Check price icon.png';
import cardTwo from '../../GadgefyDone/Icons/Scooter_Outline 1.png';
import cardThree from '../../GadgefyDone/Icons/Online payment_Two Color 1.png';
import './GadgefyWork.css';


const GadgefyWork = () => {
    return (
        <div>
            <div className="gadyWork container px-3">
                <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3 mt-2">
                    <div className="p-2">
                        
                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={cardOne} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    <span className="number">1</span> Check Price
                                </h5>
                                <br />
                                
                            </div>
                     
                    </div>
                    <div className="p-2">
                      
                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={cardTwo} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    <span className="number">2</span> Schedule Pickup
                                </h5>
                                <br />
                                
                            </div>
                     
                    </div>

                    <div className="p-2">
                        
                            <img style={{ borderRadius: '5px', height: '110px', marginLeft: '7px' }} src={cardThree} alt="" />
                            <div class="card-body">

                                <h5 class="card-text">
                                    <span className="number">3</span> Get Paid Instantly
                                </h5>
                                <br />
                                {/* <small className="pra">
                                    Select your device & tell us about its current condition, and our Al tech will tailor-make the perfect price for you.
                                </small> */}
                            </div>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GadgefyWork;