import React from 'react';
import './WhyUs.css';
import imgOne from '../../GadgefyDone/Icons/Solution icon.png';
import imgTwo from '../../GadgefyDone/Icons/discount icon.png';
import imgThree from '../../GadgefyDone/Icons/Premium icon.png';
import imgFour from '../../GadgefyDone/Icons/Trained professionals icon.png';
import imgFive from '../../GadgefyDone/Icons/truck icon.png';

const WhyUs = () => {
    return (
        <div className="pt-4 pb-4 mt-3">

            <h6 className="WhyUs"><b>Why Us</b></h6>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3 mt-5">
                    <div class="contained">
                        <div class="image">
                            <img className="icn" src={imgOne} alt="" />
                        </div>
                        <div class="text">
                            <p>One-stop Solution</p>
                        </div>
                    </div>

                    <div class="contained">
                        <div class="image">
                            <img className="icn" src={imgTwo} alt="" />
                        </div>
                        <div class="text">
                            <p>Amazing Prices</p>
                        </div>
                    </div>

                    <div class="contained">
                        <div class="image">
                            <img className="icn" src={imgThree} alt="" />
                        </div>
                        <div class="text">
                            <p>Premium Products</p>
                        </div>
                    </div>

                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4 rounded-3 mt-3 mb-3">
                    <div class="contained">
                        <div class="image">
                            <img className="icn" src={imgFour} alt="" />
                        </div>
                        <div class="text">
                            <p>Trained Professional</p>
                        </div>
                    </div>

                    <div class="contained">
                        <div class="image">
                            <img className="icn" src={imgFive} alt="" />
                        </div>
                        <div class="text">
                            <p>Quick & Hassle-free</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;