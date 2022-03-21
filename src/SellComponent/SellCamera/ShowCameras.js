import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ShowCam from './ShowCam';

const ShowCameras = () => {

    const [cameras, setCameras] = useState([])
    

    useEffect(() => {
        fetch('https://arcane-thicket-06182.herokuapp.com/sellCameras')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <br />
            <p className="container">
                <strong style={{ color: 'orange', marginTop: '20px', fontFamily: 'Montserrat', fontSize: '30px' }}>Sell Your <span style={{ color: 'black'}}> Camera</span>  </strong>
            </p>
            <div className="text-center">
                <div className="row row-cols-3 row-cols-md-3 g-4 rounded-3">
                    {
                        cameras.length === 0 && <div className="pra container text-black">...Loading</div>
                    }

                    {
                        cameras.map(Show => <ShowCam

                            Show={Show} >
                                
                        </ShowCam>)
                    }


                </div>
            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@My Rate {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default ShowCameras;