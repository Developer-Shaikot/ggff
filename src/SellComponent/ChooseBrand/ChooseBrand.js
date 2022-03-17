import React from 'react';
import imgOne from '../../GadgefyDone/Illustration/CANON.png'
import imgTwo from '../../GadgefyDone/Illustration/NIKON.png'
import imgThree from '../../GadgefyDone/Illustration/SONY.png'
import './ChooseBrand.css'
import { Link } from 'react-router-dom';
const ChooseBrand = () => {
    return (
        <div>
            <div className="choose ml-5">
                <main className="row row-cols-3 row-cols-md-3 ml-5">
                    <Link to="/canon">
                        <img className="chooseBrand " src={imgOne} alt="" />
                    </Link>
                    <Link to="/Nikon">
                        <img className="chooseBrand" src={imgTwo} alt="" />
                    </Link>
                    <Link to="/Sony">
                        <img className="chooseBrand" src={imgThree} alt="" />
                    </Link>
                </main>

            </div>
        </div>
    );
};

export default ChooseBrand;