import React from 'react';
import imgOne from '../../GadgefyDone/Illustration/CANON.png'
import imgTwo from '../../GadgefyDone/Illustration/NIKON.png'
import imgThree from '../../GadgefyDone/Illustration/SONY.png'
import './TopSelling.css'
import { Link } from 'react-router-dom';

const TopSelling = () => {
    return (
        <div>
            <div className="Tsell mt-3">
            <Link to="/sell">
                <main className="row row-cols-1 row-cols-md-3 g-4 rounded-3">
                    <Link to="/canon">
                        <img className="responsive " src={imgOne} alt="" />
                    </Link>
                    <Link to="/Nikon">
                        <img className="responsive" src={imgTwo} alt="" />
                    </Link>
                    <Link to="/Sony">
                        <img className="responsive" src={imgThree} alt="" />
                    </Link>
                </main>
                </Link>
            </div>
        </div>
    );
};

export default TopSelling;